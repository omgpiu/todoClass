import './App.css';
import React from "react";

class TodolistTasks extends React.Component {
    render() {
        return (
            <div>
                hey
            </div>
        );
    }
}

class App extends React.Component {
    render = () => {
        return (
            <div>
                <TodolistTasks/>
            </div>
        )
    }
}

export default App;
