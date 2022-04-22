import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const {postQuiz, inputChange, form } = props;

  const onChange = evt => {
    const {id, value} = evt.target
    inputChange({id, value});
  }

  const onSubmit = evt => {
    evt.preventDefault()
    postQuiz(form);
  }

  const submitButton = props.form.newQuestion.trim('').length > 0
    && props.form.newTrueAnswer.trim('').length > 0
    && props.form.newFalseAnswer.trim('').length > 0

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" value={form.newQuestion} placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" value={form.newTrueAnswer} placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" value={form.newFalseAnswer} placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={!submitButton}>Submit new quiz</button>
    </form>
  )
}

export default connect(state => state, actionCreators)(Form)
