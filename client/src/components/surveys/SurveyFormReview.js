import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { withRouter } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

import { Container, FlexGroup } from '../styled'
import formFields from './formFields'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ label, name }) => (
    <Form.Field key={name}>
      <label>{label}</label>
      <input value={formValues[name]} />
    </Form.Field>
  ))

  return (
    <Container>
      <Form>
        <h5>Please confirm your entries</h5>
        {reviewFields}
        <FlexGroup>
          <Button onClick={onCancel}>Back</Button>
          <Button onClick={() => submitSurvey(formValues, history)}>
            SEND SURVEY ->
          </Button>
        </FlexGroup>
      </Form>
    </Container>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))
