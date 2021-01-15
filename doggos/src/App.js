import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    dogs: [],
    newBreed: 'hound',
    breed: 'hound'
    // dogs: ["https://images.dog.ceo/breeds/hound-ibizan/n02091244_2838.jpg"]
  }
  // constructor() {
  //   super();
  //   this.state = {
  //     dogs: []
  //   }
  // }

  // https://dog.ceo/api/breed/hound/images/random/3

  componentDidMount() {
    axios.get(`https://dog.ceo/api/breed/hound/images/random/3`)
      .then(res => {
        console.log(`bk: App.js: cdm: axiosget: res: `, res)
        this.setState({ dogs: res.data.message })
      })
      .catch(err => console.error(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.breed !== this.state.breed) {
      // make our api call
      axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images/random/3`)
        .then(res => {
          console.log(`bk: App.js: cdm: axiosget: res: `, res)
          this.setState({ dogs: res.data.message })
        })
        .catch(err => console.error(err));
    }
  }

  handleClick = e => {
    this.setState({
      breed: this.state.newBreed
    });
  }

  handleChange = e => {
    this.setState({
      newBreed: e.target.value
    })
  }

  render() {
    return (
      <>
        <input value={this.state.newBreed} onChange={this.handleChange} /><button onClick={this.handleClick}>set breed</button>
        {this.state.dogs.map(dogUrl => {
          return <div key={dogUrl}><img src={dogUrl} alt="dog" /></div>
        })}
      </>
    )
  }
}

export default App;