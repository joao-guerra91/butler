import React from "react";
import { MoreVert, Favorite } from '@material-ui/icons'
import './postDetails.css'
import { deletePost, like } from "../../api";
import { Dropdown } from 'react-bootstrap'

class PostDetails extends React.Component {
  state= {
    _id: "",
    likes: "",
  }

  handleLikeBtn = async () => {
    await like(this.state._id)
  }

  handleDeletePost = async (id) => {
    await deletePost(id);
    this.props.feedSetState();
  }

  render() {
    const {likes} = this.state;
    return( this.props.user &&
      <div className="postDetails">
        <div className="postDetailsWrapper">
          <div className="postDetailsTop">
            <div className="postDetailsTopLeft">
              <img className="postDetailsProfilePic" src={this.props.user.profilePicture} alt=""/>
              <span className="postDetailsUsername">{this.props.user.username}</span>
              <span className="postDetailsDate">{this.props.createdAt}</span>
            </div>
            <div className="postDetailsTopRight">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <MoreVert />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Follow</Dropdown.Item>
                <Dropdown.Item onClick={() => this.handleDeletePost(this.props._id)}>Delete post</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
          </div>
          <div className="postDetailsCenter">
            <div className="postDetailsText"><b>{this.props.title}</b></div>
            <div className="postDetailsDes">{this.props.description}</div>
            {this.props.imageUrl && <img className="postDetailsImg" src={this.props.imageUrl} alt={this.props.title} />}
          </div>
          <div className="postDetailsService">{this.props.service}</div>
          <div className="postDetailsBottom">
            <div className="postDetailsBottomLeft">
              <Favorite htmlColor="red" />
              <spam className="postLikeCounter">{likes} people like this</spam>
            </div>
            <div className="postDetailsBottomRight">
              <span className="postDetailsCommentText">2 comments</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostDetails;