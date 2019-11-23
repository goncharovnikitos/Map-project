import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import RegPage from "./components/RegPage";
import AuthPage from "./components/AuthPage";
import LogoutPage from "./components/LogoutPage";
import NotFoundPage from "./components/NotFoundPage";
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import config from './config';
import jQuery from "jquery";
const apiPrefix = config.apiPrefix;

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialized:
                false,
            placeId: null,
            users: [],
            user_id: 'guest',
        };
        this.init = () => {
            let _this = this;
            jQuery.get(apiPrefix + '/get-login', function(res){
                _this.setState({
                    user_id: res
                });
                // _this.state.user_id = res; // user._id OR 'guest'
            });
            axios.get(apiPrefix + '/get-login')
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
            // if (!this.state.users.length){
            // this.getAll();
            // }
        };
        this.getAll = () => {
            axios.get(apiPrefix + '/users')
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
        };
        this.init();
    }


    render() {
        let userItems = [];
        let users = this.state.users;
        for (let i = 0; i < users.length; i++) {
      //      userItems.push(<span eventKey="{i}">{users[i].text}</span>)
         //   userItems.push(<UserListItems user="{users[i]}">{users[i].text}</UserListItems>)
        }
        let loginBtn = '';
        if (this.state.user_id === 'guest')
            loginBtn = <a href="/auth">Войти</a>
        else
            loginBtn = <span>Привет {this.state.user_id} <a href="/logout">Выйти</a></span>
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Office map.
                        {loginBtn}
                        {/*{userItems}*/}
                    </p>
                </header>
                <Router>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/reg" component={RegPage} />
                        <Route exact path="/auth" component={AuthPage} />
                        <Route exact path="/logout" component={LogoutPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Router>
                {/*<Menu/>*/}
                {/*<View3/>*/}
            </div>

        );
    }


}

export default App;