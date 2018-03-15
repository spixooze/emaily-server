import React from 'react'
import { Form, Label } from 'semantic-ui-react'

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <Form.Field>
      <label>{label}</label>
      <input {...input} />
      {touched && error ? <Label pointing>{error}</Label> : null}
    </Form.Field>
  )
}
