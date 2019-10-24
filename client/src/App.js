import React from 'react';
import axios from 'axios';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data1: "",
      loading: true
    }
    
  }
  componentDidMount(){
    axios.get('/api')
      .then((response) => {
        console.log(response.data.user.avatar_url);
        this.setState({ data1: response.data.user.avatar_url })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render(){
    return(
      <div>
        <h1>
          Hello2w
        </h1>
        <p>
          {this.state.data1}
          <img src= {this.state.data1} alt = "profil"></img>
        </p>
      </div>
      )
    }
    
  
}

export default App;