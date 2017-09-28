import React from 'react'

class Comments extends React.Component {

  handleSubmit(e) {
    e.preventDefault()

    const { postId } = this.props.params; 
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
    /* →  console.log() */
  }

  render() {
    const { postComments } = this.props;
    return (
      <div className="comments">    
        {postComments.map((comment, i) => 
        <div className="comment" key={i}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
          </p>
        </div>
        )} 

        <form ref="commentForm" className="comment-form" onSubmit={(e) => this.handleSubmit(e)}>
         <input type="text" ref="author" placeholder="author"/>  
          <input type="text" ref="comment" placeholder="comment"/>  
          <input type="submit" hidden/>
        </form> 
      </div>
    )
  }
}

export default Comments;
