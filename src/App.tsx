import React from 'react';
import './App.css';
import AddComment from "./components/AddComment"
import CommentList from "./components/CommentList"
import Axios from 'axios';
import CommentType from "./types/CommentType"

interface Props{
}
interface State{
  comments: CommentType[];
  errorMsg: string;
}

class App extends React.Component<Props, State> {
  state: State = {
    comments: [],
    errorMsg: ""
  }
  
  componentDidMount = () => {
    this.fetchComments();
  }

  fetchComments = () => {
    Axios.post("http://mbp-ajain:8080/graphql",{
      query: "query{getAllComments{id text} }",
    }).then(res => this.setState({ comments: res.data.data.getAllComments}));
  };

  addComment = (commentText: string) => {
    Axios.post("http://mbp-ajain:8080/graphql",{
      query: `mutation {addComment(input: "${commentText}"){id text} }`,
    }).then( res => {
      this.setState( prevState => ({
        comments: [res.data.data.addComment, ...prevState.comments],
        errorMsg : ""
      }));
    }).catch( () => {
      this.setState({ errorMsg: "Unable to save comments ..."})
    });
    
  }

  render (){
    return (
      <>
      <div className="App">
        <header className="App-header">
          APT Comments App
        </header>
        <p style={{ color: "red"}}>{this.state.errorMsg}</p>
        <AddComment onAddComment={this.addComment}/>
        <div className="CommentList">
          <CommentList comments={this.state.comments}/>
          </div>
      </div>
      </>
    );
  }

}
export default App;
