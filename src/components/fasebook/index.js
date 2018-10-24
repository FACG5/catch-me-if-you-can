import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import "./index.js";
import { APPID } from './../../appID';

class Fasebook extends Component {
    state = { 
        isLoggedIn: false,
        userID: '',
        name: '',
        picture: ''
     }

     componentClicked = () => {
        console.log("clicked");
     } 

     responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name:response.name,
            picture: response.picture.data.url
        })
        this.props.onChange({ picture: this.state.picture, name: this.state.name});
     }

    render() { 
        let fbContent;

        if(this.state.isLoggedIn){
            fbContent= null;
        } else {
            fbContent = (
                <FacebookLogin
                appId = {APPID}
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} 
                />
            );
        }
        return (<div>{fbContent}</div>);
    }
}
 
export default Fasebook;