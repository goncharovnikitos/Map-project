import React from 'react';
import jQuery from 'jquery';
import config from '../../config';
import axios from 'axios';

const apiPrefix = config.apiPrefix;

export default class List extends React.Component {
    state = {
        users: []
    };

    async componentDidMount() {
        let response = await axios.get(apiPrefix + '/users');

        this.setState({users: response.data})
    }

    render() {
        if (!this.state.users) return null;
        return (
            <ul>
                {this.state.users.map(u => <li>{u.lastName} {u.firstName} {u.middleName}</li>)}
            </ul>
        );
    }
}

