import React from "react";

export class TodolistTask extends React.Component {
    render() {
        const {title, isDone, priority} = this.props
        return (<div>
            <input type='checkbox' checked={isDone}/>
            <span>{title}:</span>
            <span>{priority}</span>

        </div>)
    }
}