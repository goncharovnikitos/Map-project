import React from 'react';
import './App.css';
import './View3'
import View3 from "./View3";
import Menu from "./Menu";
import axios from 'axios';

class App extends React.Component {
    state = {
        placeId: null,
        users: []
    };

    render() {
        if (!this.state.users.length){
            this.getAll();
        }
        console.log('App props', this.props);
        let userItems = [];
        let users = this.state.users;
        for (let i = 0; i < users.length; i++) {
            userItems.push(<span eventKey="{i}">{users[i].text}</span>)
        }
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Office map
                        {userItems}
                    </p>
                </header>

                <Menu/>
                <View3/>
            </div>

        );
    }

    getAll() {
        axios.get('http://localhost:8080/notes')
            // .then(resp => resp.json())
            .then( (response) => {
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
