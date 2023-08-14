import {Component} from "react"
import PostForm from "./PostForm"
import "./Home.css"


class Home extends Component{
    

    
    

    render(){
        
        return(
            <div className="home-cont">
                <nav>
                    <h1 className="head-content">Let's Make a Content</h1>
                    
                </nav>
                
                <PostForm />
                
        
    
            </div>
        )

    }
    


    
        
        
    
    
}


export default Home