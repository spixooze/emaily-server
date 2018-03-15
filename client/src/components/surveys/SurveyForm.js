import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import styled from 'styled-components'
import { Button, Form } from 'semantic-ui-react'

import validateEmails from '../../utils/validateEmails'

import formFields from './formFields'
import { Container, FlexGroup } from '../styled'

class SuveyForm extends Component {
  renderFields = () =>
    formFields.map(({ name, label }) => (
      <Field
        key={name}
        type="text"
        name={name}
        label={label}
        component={SurveyField}
      />
    ))

  render() {
    return (
      <Container>
        <Form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <FlexGroup>
            <Link to="/surveys">
              <Button>Cancel</Button>
            </Link>
            <Button type="submit">Next</Button>
          </FlexGroup>
        </Form>
      </Container>
    )
  }
}

function validate(values) {
  console.log('validate - emails', values)
  const errors = {}

  errors.recipients = validateEmails(values.recipients || '')

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value'
    }
  })

  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SuveyForm)
