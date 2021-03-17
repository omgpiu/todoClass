import React from "react";
import {TodolistTask} from "./TodolistTask";

export class TodolistTasks extends React.Component {
    render() {
        const {tasks} = this.props
        return (<>
                {tasks.map(task => {
                    return (
                        <TodolistTask title={task.title} isDone={task.isDone} priority={task.priority}/>
                    )
                })}

            </>

        );
    }
}