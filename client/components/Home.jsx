import React from 'react'
import Listing from 'react'
import { getPosts } from '../api/index'

class Home extends React.Component {
    state = {
      posts: []
    }
  
    componentDidMount () {
      this.fetchPosts()
    }
  
    fetchPosts () {
      return getPosts()
        .then(posts => {
          this.setState({ posts: posts })
        })
        .catch(err => {
          this.setState({ errorMessage: err.message })
        })
    }
  
    render () {
      return (
        <>
            <div >
              <h1> this is app </h1>
                  <Listing posts={this.state.posts}/>
            </div>
        </>
      )
    }
  }
  
export default Home