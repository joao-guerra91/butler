import React from 'react'
import './post.css'
import { addPost, uploadFile } from "../../api";
import { PermMedia, Label, Room} from '@material-ui/icons'
import { Modal, Button, Form } from 'react-bootstrap'

class Post extends React.Component {
  state= {
    title: "",
    imageUrl: "",
    email: "",
    description: "",
    service: "",
    show: false
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  };
  handleShow = () => {
    this.setState({
      show: true
    })
  };

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
    const { title, imageUrl, email, description, service } = this.state;

    const uploadData = new FormData();
    uploadData.append("file", imageUrl);

    //1. Upload the image to our api
    const response = await uploadFile(uploadData);

    //2. Create the post on our api
    const newPost = {
      title,
      imageUrl: response.data.fileUrl,
      email,
      description,
      service,
    };
    await addPost(newPost);
    this.props.feedSetState()

  }

  render() {
    const { title, description, service, email } = this.state;
    
    return( this.props.loggedInUser && 
      <>
      <div className="post">
        <div className="postWrapper">
          <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
            <div className="postTop">
              <img className="postProfilePic" src={this.props.loggedInUser.profilePicture}  alt=""/>
                <input className="createPost" onClick={this.handleShow}
                  placeholder="Start a post..." 
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
                  <PermMedia htmlColor="black" className="postIcon"/>
                </div>
                <div className="postOption">
                  <Label htmlColor="blue" className="postIcon"/>
                  <span className="postOptionText">Tag</span>
                </div>
                <div className="postOption">
                  <Room htmlColor="red" className="postIcon"/>
                  <span className="postOptionText">Location</span>
                </div>
              </div>
              <button className="postButton" type="submit" >Post</button>
            </div>
          </form>
        </div>
      </div>
      <div>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="title" 
                name="title"
                value={title}
                onChange={this.handleChange}

                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email"
                placeholder="name@example.com" 
                name="email"
                value={email}
                onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>What service are you offering?</Form.Label>
              <Form.Control as="select"
                type="service"
                name="service"
                value={service}
                onChange={this.handleChange}
              >
                <option>Electricity</option>
                <option>Plumbing</option>
                <option>Cleaning</option>
                <option>Construction</option>
                <option>Music Lessons</option>
                <option>Web Development</option>
                <option>Photography</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea"
                rows={3} 
                type="description"
                placeholder="" 
                name="description"
                value={description}
                onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group>
            <Form.File
              className="postOptionText"
              type="file"
              onChange={this.handleFileChange} 
            />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
    )
  }
}

export default Post;