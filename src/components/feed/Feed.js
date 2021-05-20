import React from 'react';
import './feed.css'
import { getAllPosts } from '../../api';
import Post from '../post/Post'
import PostDetails from '../post-details/PostDetails'

class Feed extends React.Component {
  state = {
    posts: []
  }

  feedSetState = async () => {
    const response = await getAllPosts();
    this.setState({
      posts: response.data,
    })
  }

  async componentDidMount() {
    const response = await getAllPosts();
    this.setState({
      posts: response.data,
    })
  }

  render() {
    return (
      <>
        <ul className="feedUl">
        <Post {...this.props}  feedSetState={this.feedSetState}/>
          {this.state.posts.reverse().map((post) => {
            return(
              <li className="feedLi" key={post._id}>
                <div className="feed">
                  <div className="feedWrapper">
                    <PostDetails {...post} {...this.props} feedSetState={this.feedSetState}/>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default Feed;

