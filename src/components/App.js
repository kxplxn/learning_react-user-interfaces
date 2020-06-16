import React, { Component } from 'react';
import '../css/App.css';

import ListAppointments from "./ListAppointments";
import SearchAppointments from "./SearchAppointments";
import AddAppointments from "./AddAppointments";

class App extends Component {
    constructor() {
        super();
        this.state = {
            myAppointments: [],
            lastIndex: 0
        }
    }
    
    componentDidMount() {
        fetch('./data.json')
            .then(response => response.json())
            .then(result => {
                const appointments = result.map(item => {
                    item.aptId = this.state.lastIndex;
                    this.setState({lastIndex: this.state.lastIndex + 1});
                    return item;
                });
                this.setState({myAppointments: appointments});
            });
    }
    
    render() {
        return (
            <main className="page bg-white" id="petratings">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 bg-white">
                            <div className="container">
                                <AddAppointments />
                                <SearchAppointments />
                                <ListAppointments appointments={this.state.myAppointments}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;