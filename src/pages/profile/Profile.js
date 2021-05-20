import React from 'react';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed'
import './profile.css'
import { getUser } from "../../api";
import { Dropdown } from 'react-bootstrap'
import { MoreVert} from '@material-ui/icons'
import { Modal, Button, Form } from 'react-bootstrap'
import { updateUser, uploadFile } from "../../api";
import axios from 'axios';


class Profile extends React.Component {
  state = {
    _id: "",
    username: "",
    profilePicture: "",
    coverPicture: "",
    followers: "",
    followings: "",
    description: "",
    city: "",
    service: "",
  };

  // handleFollowBtn = async () => {
  //   let userId = 

    
  //   try {
  //     if(alreadyFollowing) {
  //       await unfollowing(userId)
  //     } else {
  //       await following(userId)
  //     }
  //   } catch(e) {
  //     console.log(e)
  //   }
  // }

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
    let { name } = event.target;
    this.setState({
      [name]: event.target.files[0]
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
    const { username, profilePicture, coverPicture, description, city, service, _id } = this.state;
    let newProfilePic = "";
    let newCoverPic = "";
    if(typeof profilePicture !== "string") {
      
          const uploadData = new FormData();
          uploadData.append("file", profilePicture);
        //  uploadData.append("file", coverPicture);
      
      
          //1. Upload the image to our api
          const response = await uploadFile(uploadData);
          newProfilePic = response.data.fileUrl
    } else {
      newProfilePic = profilePicture
    }
    if(typeof coverPicture !== "string") {
      
          const uploadData = new FormData();
          uploadData.append("file", coverPicture);
        //  uploadData.append("file", coverPicture);
      
      
          //1. Upload the image to our api
          const response = await uploadFile(uploadData);
          newCoverPic = response.data.fileUrl
    } else {
      newCoverPic = coverPicture
    }

    //2. Create the post on our api
    const updatedUser = {
      _id,
      username,
      profilePicture: newProfilePic,
      coverPicture: newCoverPic,
      description,
      city,
      service,
    };
    await updateUser(updatedUser);
  }

  async componentDidMount() {
    const userId = this.props.match.params.id;
    const response = await getUser(userId);
    this.setState({
      _id: response.data._id,
      username: response.data.username,
      profilePicture: response.data.profilePicture,
      coverPicture: response.data.coverPicture,
      followers: response.data.followers,
      followings: response.data.followings,
      description: response.data.description,
      city: response.data.city,
      service: response.data.service
    });
  }

  render(){
    const { username, profilePicture, coverPicture, description, city, service } = this.state;
    return ( this.props.loggedInUser &&
      <>
      <div className="profile">
        <Leftbar {...this.props}/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" alt="" src={coverPicture} />
              <img className="profileUserImg" alt="" src={profilePicture} />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{username}</h4>
              <div className="buttons">
                <button className="ProfileFollowBtn">Follow</button>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <MoreVert />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={this.handleShow}>Edit details</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed {...this.props}/>
            <Rightbar profile {...this.props} city={city} username={username} description={description} service={service}/>
          </div>
        </div>
      </div>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form encType="multipart/form-data">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="title" 
                name="username"
                value={username}
                onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>City</Form.Label>
              <Form.Control 
                type="text"
                placeholder="eg. Lisboa" 
                name="city"
                value={city}
                onChange={this.handleChange}
                />
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

            </Form.Group>
            <Form.Group>
            <Form.Label>Change your profile picture:</Form.Label>
            <Form.File
              className="postOptionText"
              type="file"
               name="profilePicture"
           //  value={profilePicture}
              onChange={this.handleFileChange} 
            />
          </Form.Group>
          <Form.Label>Change your cover picture:</Form.Label>
          <Form.Group>
            <Form.File
              className="postOptionText"
              type="file"
               name="coverPicture"
              // value={coverPicture}
              onChange={this.handleFileChange} 
            />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleFormSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Profile;