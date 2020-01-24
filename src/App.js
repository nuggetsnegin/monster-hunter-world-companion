import React, { Component } from 'react'
import ReactDOM from 'react-DOM'
import Monsters from './Monsters'

export default class App extends Component {
    render() {
        return (
            <div>
                <Monsters />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
