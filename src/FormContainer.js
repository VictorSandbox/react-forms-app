import React, { Component } from 'react'
import FormComponent from './FormComponent'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      age: 0,
      gender: '',
      destination: '',
      isRoundTrip: false,
      isVegan: false,
      isKosher: false,
      isLoggedIn: false
    }
    this.onValueChange = this.onValueChange.bind(this)
  }

  onValueChange (event) {
    const { name, value, type, checked } = event.target
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value
        })
    console.log(event.target)
  }

  render () {
    return (
      <div>
        <FormComponent onValueChange={this.onValueChange} data={this.state} />
      </div>
    )
  }
}
export default Form
