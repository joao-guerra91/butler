import React from "react";
import { MoreVert, Favorite } from '@material-ui/icons'
import './postDetails.css'
import { getPost, deletePost } from "../../api";

class PostDetails extends React.Component {
  state= {
    _id: "",
    title: "",
    imageUrl: "",
  }

  async componentDidMount() {
    const postId = this.props.match.id;
    const response = await getPost(postId);
    this.setState({
      _id: response.data._id,
      title: response.data.title,
      imageUrl: response.data.imageUrl,
    });
  }

  handleDeletePost = async (id) => {
    await deletePost(id);
    this.props.feedSetState();

  }

  render() {
    const { title, imageUrl, _id} = this.state;
    return(
      <div className="postDetails">
        <div className="postDetailsWrapper">
          <div className="postDetailsTop">
            <div className="postDetailsTopLeft">
              <img className="postDetailsProfilePic" src="/images/kate.jpg" alt=""/>
              <span className="postDetailsUsername">Kate Moss</span>
              <span className="postDetailsDate">5 mins ago</span>
            </div>
            <div className="postDetailsTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postDetailsCenter">
            <div className="postDetailsText">{this.props.title}</div>
            {this.props.imageUrl && <img className="postDetailsImg" src={this.props.imageUrl} alt={this.props.title} />}
          </div>
          <div className="postDetailsBottom">
            <div className="postDetailsBottomLeft">
              <Favorite htmlColor="red"/>
              <spam className="postLikeCounter">2 people like this</spam>
            </div>
            <div className="postDetailsBottomRight">
              <span className="postDetailsCommentText">2 comments</span>
              <button onClick={() => this.handleDeletePost(this.props._id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostDetails;