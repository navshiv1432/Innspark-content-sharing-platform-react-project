import "./Posts.css"
import {MdDeleteOutline} from "react-icons/md"
import {AiFillLike} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"
import {BsFillShareFill} from "react-icons/bs"

const Posts=(props)=>{
    const {postname,id,onClickLike,post,onEditIt,onDeleteIt}=props
    const onLikeClick=()=>{
        onClickLike(id)

    }

    const onEditClick=()=>{
        onEditIt(id,prompt("Edit post:" , post.message))
    }

    const onDeleteClick=()=>{
        onDeleteIt(post.id)
    }
   
    

    
    return(
        <div className="list-items">
            <div className="post-head-cont">
            <h1 className="post-head">{postname}</h1>
            </div>
            
            <div className="options-cont">
            <div className="option">
                <div>
                <AiFillLike onClick={onLikeClick} className="icon"/>
            {post.likes && <span className="span">{post.likes}</span>}
                </div>
            
            <p className="para1">Like It</p>
           
            </div>

            
            <div className="option">
            <AiFillEdit onClick={onEditClick} className="icon"/>
            <p className="para">Edit</p>
            </div>
            <div className="option">
            <MdDeleteOutline onClick={onDeleteClick} className="icon"/>
            <p className="para">Delete</p>
            </div>
            <div className="option">
            <BsFillShareFill className="icon" />
            <p className="para">Share</p>
            </div>

            </div>
            
            
        </div>
    )
}

export default Posts