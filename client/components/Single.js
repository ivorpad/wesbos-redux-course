import React from 'react';
import { Link } from 'react-router'
import Photo from './Photo'
import Comments from './Comments'

class Single extends React.Component {
  render() {
    const index = this.props.posts.findIndex((post) => post.code === this.props.params.postId)
    const post = this.props.posts[index]
    const postComments = this.props.comments[this.props.params.postId] || []
    

    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />
        <Comments 
          postComments={postComments} 
          {...this.props}
          //postId={this.props.params.postId} 
        />
      </div>
    )
  }
}

export default Single;