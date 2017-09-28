import React from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import {dispatch} from 'redux'


class Photo extends React.Component {
  render() {
    const { post, index, comments, increment } = this.props;
    
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
           <img src={post.display_src} alt={post.caption} className="grid-photo"/>
          </Link>

          <CSSTransitionGroup 
              transitionName="like"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              
              <span key={post.likes} className="likes-heart">{post.likes}</span>

          </CSSTransitionGroup>
        </div>
        
        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button className="likes" onClick={() => this.props.increment(index)}>&hearts; {post.likes}</button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"> </span>
                {comments[post.code] ? ' ' + comments[post.code].length : ' ' + 0 }
              </span>
            </Link>
          </div>
          
        </figcaption>

      </figure>
    )
  }
}

export default Photo;