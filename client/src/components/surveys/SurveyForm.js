import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'

import validateEmails from '../../utils/validateEmails'

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
]

class SuveyForm extends Component {
  renderFields = () =>
    FIELDS.map(({ name, label }) => (
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
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys">Cancel</Link>
          <button type="submit">Next</button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  console.log('validate - emails', values)
  const errors = {}

  errors.emails = validateEmails(values.emails || '')

  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value'
    }
  })

  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SuveyForm)
