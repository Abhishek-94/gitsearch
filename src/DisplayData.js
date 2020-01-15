import React, { Component } from 'react';
import './DisplayData.css';

class DisplayData extends Component{
    render(){
        let {username,location,repos,followers,url,create,pic,message} = this.props.displaydata;
        if(message !== 'Not Found'){
        return(
            <React.Fragment>
                <div className="circle"> <img src={pic} alt ='display'/></div>
                <div className="display">
                    <a href = {url} target="blank"><p>{username}</p></a> 
                    <p>Location: {location}</p>
                    <p>Total Repositories: {repos}</p>
                    <p>Followers: {followers}</p> 
                    <p>Created At: {create}</p>
                </div>
            </React.Fragment>
        )}
        return(
            <p> InValid Username!! </p>
        )
    }
}

export default DisplayData