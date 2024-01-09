import React from 'react'
import Form from 'react-bootstrap/Form';
import sc from "./Input.module.scss"

export const Input = (props) => {
  return (
    <Form.Group controlId="formBasicEmail">
      {props.label && <Form.Label className="Input__label">{props.label}</Form.Label>}
      <Form.Control className={props.inputClass} name={props.name} type={props.type} placeholder={props.placeholder} />
    </Form.Group>
  )
}
