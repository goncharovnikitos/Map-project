import React from 'react';
import './App.css';
import './components/View3'
import MainPage from "./components/MainPage";
import RegPage from "./components/RegPage";
import AuthPage from "./components/AuthPage";
import NotFoundPage from "./components/NotFoundPage";
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends React.Component {
    state = {
        placeId: null,
        users: []
    };

    render() {
        if (!this.state.users.length){
            this.getAll();
        }
        //this.state.url=location.query;
        console.log('App props', this.props);
        // console.log('App props', this.props);
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
                    </p>
                </header>
                <Router>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/reg" component={RegPage} />
                        <Route exact path="/auth" component={AuthPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Router>
                {/*<Menu/>*/}
                {/*<View3/>*/}
            </div>

        );
    }

    getAll() {
        axios.get('http://localhost:8080/users')
            // .then(resp => resp.json())
            .then( (response) => {//когда ответ получим - можем вызвать функцию
                // console.info(response);
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
