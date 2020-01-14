import React, { Component } from 'react';

class DisplayData extends Component{
    render(){
        let {username,location,repos,followers,url,create} = this.props.displaydata;
        return(
            <div >
                <p>Username: {username} </p>
                <p>Location: {location}</p>
                <p>Total Repositories: {repos}</p>
                <p>Followers: {followers}</p> 
                <p>URL: {url}</p>
                <p>Created At: {create}</p>
            </div>
        )
    }
}

export default DisplayData