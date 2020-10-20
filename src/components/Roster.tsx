import React from 'react';
import { Col } from 'react-bootstrap';
import { Model, Ability } from '../types';
import Phase from './Phase';
import AbilityList from './AbilityList';
import { NoPhaseDetails } from './NoPhaseDetails';
import { MovementPhaseDetails } from './MovementPhaseDetails';
import { ScoutingPhaseDetails, hasScoutingPhase } from './ScoutingPhaseDetails';
import { DeploymentPhaseDetails, hasDeploymentPhase } from './DeploymentPhaseDetails';
import { InitiativePhaseDetails, hasInitiativePhase } from './InitiativePhaseDetails';
import { PsychicPhaseDetails, hasPsychicPhase } from './PsychicPhaseDetails';
import { ShootingPhaseDetails } from './ShootingPhaseDetails';
import { FightPhaseDetails } from './FightPhaseDetails';
import { MoralePhaseDetails } from './MoralePhaseDetails';
import { CloseButton } from './CloseButton';

const _ = require('lodash')

type Props = {
  name: string,
  models: Model[],
  forceRules: Ability[],
  onClose: any,
};

function Roster(props: Props) {
  // Display models sorted by category and type
  const sortedModels = _.sortBy(props.models, (x: Model) => ([x.category == null, x.category, x.type]))
  return <>
    <h1 style={{
      background: 'black',
      color: 'white',
      padding: '10px',
      width: '100%',
      textTransform: 'capitalize',
      display: 'flex',
    }}>
      <Col>
        {props.name}
      </Col>
      <Col style={{flexGrow: 0, textAlign: 'right'}}>
        <small>{_.sumBy(props.models, (model: Model) => (model.selected * model.points))}pts</small>
      </Col>
      <Col style={{flexGrow: 0, textAlign: 'right'}}>
        <CloseButton onClose={props.onClose}/>
      </Col>
    </h1>
    <>
      <AbilityList abilities={props.forceRules} phase="" highlight/>
      {sortedModels.map((model: Model) => (
        <NoPhaseDetails model={model}/>
      ))}
    </>
    {_.some(sortedModels, hasScoutingPhase) &&
      <Phase name="scouting">
        <>
          <AbilityList abilities={props.forceRules} phase="scouting" highlight/>
          {sortedModels.map((model: Model) => (
            hasScoutingPhase(model) &&
            <ScoutingPhaseDetails model={model}/>
          ))}
        </>
      </Phase>
    }
    {_.some(sortedModels, hasDeploymentPhase) &&
      <Phase name="deployment">
        <>
          <AbilityList abilities={props.forceRules} phase="deployment" highlight/>
          {sortedModels.map((model: Model) => (
            hasDeploymentPhase(model) &&
            <DeploymentPhaseDetails model={model}/>
          ))}
        </>
      </Phase>
    }
    {_.some(sortedModels, hasInitiativePhase) &&
      <Phase name="initiative">
        <>
          <AbilityList abilities={props.forceRules} phase="initiative" highlight/>
          {sortedModels.map((model: Model) => (
            hasInitiativePhase(model) &&
            <InitiativePhaseDetails model={model}/>
          ))}
        </>
      </Phase>
    }
    <Phase name="movement">
      <>
        <AbilityList abilities={props.forceRules} phase="movement" highlight/>
        {sortedModels.map((model: Model) => (
          <MovementPhaseDetails model={model}/>
        ))}
      </>
    </Phase>
    {_.some(sortedModels, hasPsychicPhase) &&
      <Phase name="psychic">
        <>
          <AbilityList abilities={props.forceRules} phase="psychic" highlight/>
          {sortedModels.map((model: Model) => (
            hasPsychicPhase(model) &&
            <PsychicPhaseDetails model={model}/>
          ))}
        </>
      </Phase>
    }
    <Phase name="shooting">
      <>
        <AbilityList abilities={props.forceRules} phase="shooting" highlight />
        {sortedModels.map((model: Model) => (
          <ShootingPhaseDetails model={model}/>
        ))}
      </>
    </Phase>
    <Phase name="fight">
      <>
        <AbilityList abilities={props.forceRules} phase="fight" highlight/>
        {sortedModels.map((model: Model) => (
          <FightPhaseDetails model={model}/>
        ))}
      </>
    </Phase>
    <Phase name="morale">
      <>
        <AbilityList abilities={props.forceRules} phase="morale" highlight/>
        {sortedModels.map((model: Model) => (
          <MoralePhaseDetails model={model}/>
        ))}
      </>
    </Phase>
  </>
}

export default Roster;
