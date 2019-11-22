import React from 'react';
import './App.css';
import './View3'
import View3 from "./View3";
import Menu from "./Menu";
import axios from 'axios';
import { exists } from 'fs';
import AuthForm from './User/AuthForm';
import RegForm from './User/RegForm';

class App extends React.Component {
    state = {
        placeId: null,
        users: [],
        url: "/"
    };

    render() {
        if (!this.state.users.length){
            this.getAll();
        }
        //this.state.url=location.query;
        console.log('App props', this.props);
        let userItems = [];
        let users = this.state.users;
        for (let i = 0; i < users.length; i++) {
      //      userItems.push(<span eventKey="{i}">{users[i].text}</span>)
         //   userItems.push(<UserListItems user="{users[i]}">{users[i].text}</UserListItems>)
        }
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Office map
                        {userItems}
                       {this.state.url}
                    </p>
                </header>

                <Menu/>
                <View3/>
                <RegForm/>
            
            </div>

        );
    }

    getAll() {
        axios.get('http://localhost:8080/notes')
            // .then(resp => resp.json())
            .then( (response) => {//когда ответ получим - можем вызвать функцию
                console.info(response);
                this.setState({
                    users: response.data
                });
            })
            .catch( (error) => {
                console.error(error);
            });
    }
}

export default App;
