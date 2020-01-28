import React from 'react'
import Listing from './Listing'
import { getPosts } from '../api/index'
import Button from './Button'
import Images from './Images'

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
            <Button />
            <Images />
            <div >
              <Listing posts={this.state.posts}/>
            </div>
        </>
      )
    }
}

export default Home
