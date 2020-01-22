import React from 'react'

class User extends React.Component {
  render () {
    return (
<>
    <br />
    <div>
        <p ><b>Title:</b> {this.props.post.postDescription}</p>
        <p ><b>description:</b> {this.props.post.description}</p>
    </div>
</>
    )
  }
}
export default User