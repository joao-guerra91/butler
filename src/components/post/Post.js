import React from 'react'
import './post.css'
import { addPost, uploadFile } from "../../api";
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

class Post extends React.Component {
  state= {
    title: "",
    imageUrl: "",
  }

  handleFileChange = (event) => {
    this.setState({
      imageUrl: event.target.files[0],
    });
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { title, imageUrl } = this.state;

    const uploadData = new FormData();
    uploadData.append("file", imageUrl);

    //1. Upload the image to our api
    const response = await uploadFile(uploadData);

    //2. Create the post on our api
    const newPost = {
      title,
      imageUrl: response.data.fileUrl,
    };
    await addPost(newPost);
    this.props.feedSetState()

  }

  render() {
    const { title } = this.state;
    return(
      <div className="post">
        <div className="postWrapper">
          <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
            <div className="postTop">
              <img className="postProfilePic" src="/images/kate.jpg" alt=""/>
                <input 
                  placeholder="What's in you mind" 
                  className="postInput"
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  />
            </div>
            <hr className="postHr"/>
            <div className="postBottom">
              <div className="postOptions">
                <div className="postOption">
                  <PermMedia htmlColor="tomato" className="postIcon"/>
                  <input
                    className="postOptionText"
                    type="file"
                    onChange={this.handleFileChange} 
                  />
                </div>
                <div className="postOption">
                  <Label htmlColor="blue" className="postIcon"/>
                  <span className="postOptionText">Tag</span>
                </div>
                <div className="postOption">
                  <Room htmlColor="green" className="postIcon"/>
                  <span className="postOptionText">Location</span>
                </div>
                <div className="postOption">
                  <EmojiEmotions htmlColor="goldenrod" className="postIcon"/>
                  <span className="postOptionText">Like</span>
                </div>
              </div>
              <button className="postButton" type="submit" >Post</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Post;