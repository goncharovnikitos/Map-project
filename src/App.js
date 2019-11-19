import React from 'react';
import './App.css';
import UsersComp from "./UsersComp";
import MapComp from './MapComp'
import PeopleCard from "./PeopleCard";

let dict = {
    1: 1,
    2: 2,
    3: 3,
    4: null,
    5: null,
};

class App extends React.Component {
    state = {
        placeId: null
    };

    render() {
        console.log('App props', this.props)
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Здесь будет какая-то шапка
                    </p>
                </header>
                <div className="body">
                    <MapComp onPlace={(e) => {
                        this.setState({placeId: e.target.dataset.placeid});
                        console.log(e.target.dataset.placeid);
                    }
                    }/>
                    {/*<UsersComp selectedPlace={dict[this.state.placeId]}/>*/}
                    <PeopleCard placeId={this.state.placeId}/>
                </div>
            </div>

        );
    }
}

export default App;
