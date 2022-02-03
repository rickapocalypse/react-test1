import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {                            // estado
      idade: 23,
      count:0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({idade: 18} )
  }
  handleAClick = (event)=>{
    event.preventDefault();
    const {idade} = this.state;
    const nextIdade = idade + 1;
    this.setState({ idade: idade +1 });

  }

  render() {                                 // método render
    const {idade, count} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleClick}>                        
            {idade} {count}
          </p>
          <a onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link 
          </a>
        </header>
      </div>
    );
  }
}

export default App;