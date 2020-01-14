import React, {Component} from 'react'

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <button>Get Name</button>
                </form>    
            </div>
        )
    }
}

export default GetUsername