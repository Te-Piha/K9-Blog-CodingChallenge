import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class NewPost extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Input fluid label='description' placeholder='description of blog' />
        <Form.TextArea label='descriptionPost' placeholder='Tell us more about your blog...' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default NewPost