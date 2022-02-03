import './styles.css';

import { Component } from 'react/cjs/react.production.min';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page:0,
    postsPerPage: 4,
    searchValue:'',
  };

  async componentDidMount() {
    await this.loadPosts();

  }

  loadPosts = async () => {
    const {page, postsPerPage} = this.state
    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice(page,postsPerPage),
      allPosts: postsAndPhotos,  
    });
  }

  loadMorePosts = () => {
    const{
      page,
      postsPerPage,
      allPosts,
      posts,
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page: nextPage})
  }

  handleChange = (event) => {
    const {value} = event.target;
    this.setState({searchValue: value});
  }

  render() {
    const { posts, page, postsPerPage,allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ?
    allPosts.filter(post =>{
      return post.title.toLowerCase().includes(searchValue.toLowerCase());

    }) 
    :
    posts;
    
    return (
      <section className='container'>
        <div className='search-container'>
          {!!searchValue && (
          
            <h1> Search : {searchValue}</h1>
          
          )}

          <TextInput searchValue={searchValue} handleChange={this.handleChange} />
          <br/> <br/> <br/>
        </div>
        {filteredPosts.length > 0 &&(
          <Posts posts={filteredPosts}/>
        )}
        {filteredPosts.length === 0 &&(
          <p>Nada encontrado</p>
        )}

        
        <div className='button-container'>
          {!searchValue &&(
          <Button
            text ="Load more posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
          )}
        
        
        </div>
      </section>
    );
  }
}
export default Home;
