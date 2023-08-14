import {Component} from "react"
import Posts from "./Posts"

class PostForm extends Component{
    state={
        message:" ",
        posts:[],
        searchIt:"",
        
        


    }
    onChangeIt=(event)=>{
        this.setState({message:event.target.value})
    }

    onClickIt=(event)=>{
        // const {addPost} = this.props
        const{posts}=this.state
        const {message}=this.state
        const msg={
            id:Date.now(),
            message
        }
        console.log(msg)
        event.preventDefault()
        
        this.setState({message:" ",posts: [...this.state.posts, msg]})
        console.log(posts)

    }
    LikeIt=(id)=>{
        this.setState(prevState => ({
            posts: prevState.posts.map(post =>
              post.id === id ? { ...post, likes: (post.likes || 0) + 1 } : post
            )
          }));
        

    }

    EditIt=(postId, newText) => {
        this.setState(prevState => ({
          posts: prevState.posts.map(post =>
            post.id === postId ? { ...post, message: newText } : post
          )
        }));
      }

      DeleteIt=(id) => {
        this.setState(prevState => ({
          posts: prevState.posts.filter(post => post.id !== id)
        }));
      }

      handleSearch=(event)=>{
        this.setState({searchIt:event.target.value})
      }

    render(){
        const {message,searchIt}=this.state
        const {posts}=this.state 
        const filteredPosts = posts.filter(post =>
            post.message.includes(searchIt)
          );
       
        

        return (
            <div>
            
            <form className="post-form" onSubmit={this.onClickIt}>
            <textarea className="text-area" onChange={this.onChangeIt} placeholder="Write Your Post" value={message} />
            <button type="submit">Post</button>
        </form>
        <input
          type="text"
          placeholder="Search posts"
          value={searchIt}
          onChange={this.handleSearch}
        />
        <div>
          {filteredPosts.map(post => (
            // <div key={post.id}>{post.message}</div>
            <Posts id={post.id} postname={post.message} onClickLike={this.LikeIt} post={post} onEditIt={this.EditIt} onDeleteIt={this.DeleteIt} onChangeIt={this.changeIt} searchItVal={searchIt}/>
          ))}
          
        </div>
        
        </div>
        )
    }
}

export default PostForm