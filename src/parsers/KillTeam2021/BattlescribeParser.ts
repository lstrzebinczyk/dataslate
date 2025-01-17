import _ from 'lodash'
import * as XPath from 'xpath-ts'
import { Roster, Operative, Weapon, Equipment, Action, PsychicPower } from '../../types/KillTeam2021'
import { Ability } from '../../types/Ability'

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
const xpSelect = XPath.useNamespaces({ bs: 'http://www.battlescribe.net/schema/rosterSchema' })

const stat = (name: string, model: Element): number => {
  const node = xpSelect(`bs:profiles/bs:profile[@typeName='Operative']//bs:characteristic[@name='${name}']/text()`, model, true)
  if (node) {
    return parseInt(node.toString())
  } else { return 0 }
}

const parseWeapon = (weapon: Node): Weapon => {
  return {
    name: xpSelect('string(@name)', weapon, true).toString(),
    melee: xpSelect('string(@name)', weapon, true).toString().startsWith('⚔'),
    attacks: parseInt(xpSelect(".//bs:characteristic[@name='A']/text()", weapon, true).toString()),
    hit: parseInt(xpSelect(".//bs:characteristic[@name='WS/BS']/text()", weapon, true).toString()),
    damage: parseInt(xpSelect(".//bs:characteristic[@name='D']/text()", weapon, true).toString().split('/')[0]),
    specialRules: (xpSelect(".//bs:characteristic[@name='SR']/text()", weapon, true) || '-').toString(),
    criticalDamage: parseInt(xpSelect(".//bs:characteristic[@name='D']/text()", weapon, true).toString().split('/')[1]),
    criticalRules: (xpSelect(".//bs:characteristic[@name='!']/text()", weapon, true) || '-').toString()
  }
}

const parseAbility = (ability: Node): Ability => {
  return {
    name: xpSelect('string(@name)', ability, true).toString(),
    description: (xpSelect(".//bs:characteristic[@name='Ability']/text()", ability, true) || '-').toString(),
    phases: []
  }
}

const parsePsychicPower = (power: Node): PsychicPower => {
  const name = xpSelect('string(@name)', power, true).toString()
  const weap = xpSelect("..//bs:profile[@typeName='Weapons']", power, true) as Node
  return {
    name,
    description: (xpSelect(".//bs:characteristic[@name='Effect']/text()", power, true) || '-').toString(),
    weapon: weap ? parseWeapon(weap) : null
  }
}

const parseAction = (action: Node): Action => {
  return {
    name: xpSelect('string(@name)', action, true).toString(),
    description: (xpSelect(".//bs:characteristic[@name='Unique Action']/text()", action, true) || '-').toString(),
    cost: 1
  }
}

const parseEquipment = (equipment: Node): Equipment => {
  const description = xpSelect(".//bs:characteristic[@name='Equipment']/text()", equipment, true)
  return {
    name: xpSelect('string(@name)', equipment, true).toString(),
    cost: parseInt(xpSelect('string(.//bs:cost/@value)', equipment, true).toString()),
    description: description ? description.toString() : null
  }
}

const parseRule = (rule: Node): Ability => {
  return {
    name: xpSelect('string(@name)', rule, true).toString(),
    description: (xpSelect('.//bs:description/text()', rule, true) || '-').toString(),
    phases: []
  }
}

const factionKeywords = [
  'Brood Coven',
  'Cadre Mercenary',
  'Chaos Daemons',
  'Commorrite',
  'Craftworld',
  'Death Guard',
  'Ecclesiarchy',
  'Forge World',
  'Greenskin',
  'Grey Knight',
  'Hive Fleet',
  'Hunter Cadre',
  'Imperial Guard',
  'Kommando',
  'Space Marine',
  'Talons of the Emperor',
  'Thousand Sons',
  'Tomb World',
  'Traitor Space Marine',
  'Troupe',
  'Veteran Guardsman'
]

const parseOperative = (model: Element): Operative => {
  const allKeywords = (xpSelect(".//bs:categories/bs:category[@primary='false']/@name", model) as Node[]).map((x) => (x.textContent || '').replace('💀', ''))
  const faction = _.intersection(allKeywords, factionKeywords).pop() || allKeywords.find((k) => (k === k.toUpperCase())) || null
  const keywords = _.remove(allKeywords, (x) => (x !== faction))
  const details = {
    datacard: xpSelect('string(@name)', model, true).toString(),
    name: xpSelect('string(@customName)', model, true).toString(),
    stats: {
      movement: stat('M', model),
      actionPointLimit: stat('APL', model),
      groupActivation: stat('GA', model),
      defence: stat('DF', model),
      save: stat('SV', model),
      invulnerable_save: null,
      wounds: stat('W', model)
    },
    weapons: (xpSelect(".//bs:profile[@typeName='Weapons']", model) as Node[]).map(parseWeapon),
    equipment: (xpSelect(".//bs:selection[(@type='upgrade') and (.//bs:cost/@value!=\"0.0\")]", model) as Node[]).map(parseEquipment),
    abilities: (xpSelect(".//bs:profile[@typeName='Abilities']", model) as Node[]).map(parseAbility),
    actions: (xpSelect(".//bs:profile[@typeName='Unique Actions']", model) as Node[]).map(parseAction),
    rules: (xpSelect('.//bs:rules/bs:rule', model) as Node[]).map(parseRule),
    leader: (xpSelect("string(.//bs:categories/bs:category[@primary='true']/@name)", model, true).toString() === 'Leader'),
    keywords,
    faction
  }
  return details
}

export const parseBattlescribeXML = (doc: Document): Roster => {
  const operatives = []
  const name = xpSelect('string(/bs:roster/@name)', doc, true).toString()
  const faction = xpSelect('string(//bs:force/@catalogueName)', doc, true).toString()
  for (const model of xpSelect('//bs:selection[@type=\'model\']', doc) as Element[]) {
    operatives.push(parseOperative(model))
  }

  const fireteams = (xpSelect('//bs:force/@name', doc) as Node[]).map((node) => { return node.nodeValue }) as string[]

  const psychicPowers = (xpSelect(".//bs:profile[@typeName='Psychic Power']", doc) as Node[]).map(parsePsychicPower)
  // Assign unique operative names if they don't have them
  const romanNumerals = [
    '', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ',
    'Ⅵ', 'Ⅶ', 'Ⅷ', 'Ⅸ', 'Ⅹ',
    'ⅩⅠ', 'ⅩⅡ', 'ⅩⅢ', 'ⅩⅣ', 'ⅩⅤ',
    'ⅩⅥ', 'ⅩⅦ', 'ⅩⅧ', 'ⅩⅨ', 'ⅩⅩ'
  ]
  const counts: { [key: string]: number } = {}
  for (const o of operatives) {
    if (o.name === '') {
      if (!counts[o.datacard]) {
        counts[o.datacard] = 0
      }
      o.name = o.datacard + ' ' + romanNumerals[counts[o.datacard]++]
    }
  }
  return {
    system: 'KillTeam2021',
    name,
    faction,
    operatives,
    psychicPowers,
    fireteams
  }
}
