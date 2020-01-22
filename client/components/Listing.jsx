import React from 'react'
import Post from './Post'

class Listing extends React.Component {
  render () {
    return (

      <ul>
        {this.props.posts.map((post, i) => (
          <Post key={i} post={post} />)
        )}
      </ul>

    )
  }
}
export default Listing