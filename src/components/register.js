import {Component} from "react"
import {Link} from "react-router-dom"
import "./register.css"



class Register extends Component{
    state={
        name:"",
        contactNumber:"",
        error:false,
        accountCreate:false,
        
    }

    onClickIt=async(event)=>{
        event.preventDefault()
        const {name,contactNumber}=this.state 
        if(name!=="" && contactNumber!==""){
            this.setState({accountCreate:true})
            this.setState({error:false})
            
            
        }else{
            this.setState({error:true})

        }

    }

    onChangeName=(event)=>{
        this.setState({
            name:event.target.value
        })
        
    }
    onChangeNumber=(event)=>{
        this.setState({
            contactNumber:event.target.value
        })
    }



    render(){
        const {name,contactNumber,error,accountCreate}=this.state
        return(
            <form className="register-cont" onSubmit={this.onClickIt}>
                <h1 className="content">Content Sharing Platform</h1>
                <div className="input-cont">
                    
                <label htmlFor="name" className="label">Name</label>
                <input className="name" id="name" type="text" value={name} onChange={this.onChangeName} placeholder="Enter the Name"/>
                </div>
                <div className="input-cont">
                <label htmlFor="contact" className="label">Contact Number</label>
                <input className="name" value={contactNumber} id="contact" onChange={this.onChangeNumber} type="text" placeholder="Enter the Contact Number"/>
                </div>
                <button className="btn" type="submit">Create Account</button>
                    
                
            {error?(<p className="not-success">Name or Password not Entered</p>):(<p></p>)}
            {accountCreate?(<p className="success">Account Created</p>):null}
            {accountCreate?(
                <>
                <Link to="/Home"><button type="button" className="login">Login</button></Link>
                </>
            ):(null)}
            </form>
        )
    }
}

export default Register