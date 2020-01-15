import React, { Component } from 'react';
import './DisplayData.css';

class DisplayData extends Component{
    render(){
        let {username,location,repos,followers,url,create,pic} = this.props.displaydata;
        return(
            <React.Fragment>
                <div className="circle"> <img src={pic} alt="Picture"/></div>
                <div className="display">
                    <a href = {url} target="blank" style={{}} > <p>{username}</p></a> 
                    <p>Location: {location}</p>
                    <p>Total Repositories: {repos}</p>
                    <p>Followers: {followers}</p> 
                    <p>Created At: {create}</p>
            </div>
            </React.Fragment>
        )
    }
}

export default DisplayData