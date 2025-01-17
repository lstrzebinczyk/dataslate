import React, { MouseEvent } from 'react'
import { Button } from 'react-bootstrap'

interface Props {
  onClose: (event: MouseEvent<HTMLButtonElement>) => void
}

export function CloseButton (props: Props) {
  return (<Button variant='dark' className='d-print-none' onClick={props.onClose}>Close</Button>)
}
