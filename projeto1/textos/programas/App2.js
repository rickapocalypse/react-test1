import './App.css';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  state = {
    counter:0,
    posts: [
      {
        id: 1,
        title: 'O titulo 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'O corpo 3'
      },
    ]
  };
  timeoutUpadate = null;

  componentWillUnmount(){
    clearTimeout(this.timeoutUpadate)
  }

  componentDidMount() {                      //lifecycle
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  handleTimeout = () => {
    const {posts, counter} = this.state;
    posts[0].title = 'O título mudou';
    this.timeoutUpadate = setTimeout(()=> {
      this.setState({posts, counter: counter + 1});
    },1000);
  }


  render() {                                 // método render
    const { posts, counter } = this.state;
    return (
      <div className='App'>
        <p>{counter}</p>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            </div>
        ))}
      </div>
        );
  }
}
export default App;
