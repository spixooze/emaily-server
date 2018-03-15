import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

class SurveyNew extends Component {
  state = { showFormReview: false }
  render() {
    return (
      <div>
        {this.state.showFormReview ? (
          <SurveyFormReview
            onCancel={() =>
              this.setState({ showFormReview: !this.state.showFormReview })
            }
          />
        ) : (
          <SurveyForm
            onSurveySubmit={() =>
              this.setState({ showFormReview: !this.state.showFormReview })
            }
          />
        )}
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew)
