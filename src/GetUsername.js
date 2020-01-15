import React, {Component} from 'react'
import './DisplayData';

class GetUsername extends Component{
    state = {
        name: null,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var name = document.getElementById("name");
        if(name.value!=="") {
            this.props.handleName(this.state);
        }
        name.value ="";
    }
    render(){
        return(
            <div className="gitname">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name" style={{fontSize: '20px'}}>Name: </label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <button>Get GitHubName</button>
                </form>    
            </div>
        )
    }
}

export default GetUsername