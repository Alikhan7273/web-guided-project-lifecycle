import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    console.log(`bk: App.js: compnentDidMount`);
    // the DOM is renderd and availabel for us to query!!!!!
    // call and API and asynchronously update
    setTimeout(() => {
      this.setState({ pokemon: data })
    }, 4000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`bk: App.js: CDU: prevProps, prevState: `, prevProps, prevState)
    console.log(`bk: App.js: CDU: this.state: `, this.state)
    if (prevProps.username !== this.props.username) {
      console.log(`bk: CDU with username being changed`);
    }

    if (prevState.pokemon !== this.state.pokemon) {
      console.log(`bk: CDU with pokemon state changing`);
    }
  }

  render() {
    console.log(`bk: App.js: render(): App renders`);
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
