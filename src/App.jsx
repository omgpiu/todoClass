import './App.css';
import React from "react";
import {TodolistHeader} from "./TodolistHeader";
import {TodolistFooter} from "./TodolistFooter";
import {TodolistTasks} from "./TodolistTasks";

class App extends React.Component {
    tasks = [
        {
            title: 'CSS',
            isDone: true,
            priority: 'high'
        },
        {
            title: 'HTML',
            isDone: false,
            priority: 'low',
        },
        {
            title: 'REACT',
            isDone: true,
            priority: 'high',
        },
        {
            title: 'ANGULAR',
            isDone: true,
            priority: 'low'
        },

    ]
    filterValue = 'All'
    render = () => {

        return (
            <div>
                <TodolistHeader/>
                <TodolistTasks tasks={this.tasks}/>
                <TodolistFooter filterValue={this.filterValue}/>
            </div>
        )
    }
}

export default App;
