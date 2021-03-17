import React from "react";

export class TodolistHeader extends React.Component {
    render() {
        return (<div>
                <input type="text" placeholder={'Write your task'}/>
                <button>Add Task</button>
            </div>


        );
    }
}