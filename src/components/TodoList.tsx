import React from 'react';
import { FilterValueType, TaskType } from '../App';

type TodoListPropType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (taskId: number) => void,
    changeFilter: (newFilter: FilterValueType) => void
}

export default function Todolist(props: TodoListPropType) {
    let tasksJSXElement = props.tasks.map(task => {
        return (
            <li key={task.id}><input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <button onClick={() => props.removeTask(task.id)}>x</button>
            </li>

        )

    })
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {tasksJSXElement}
            </ul>
            <div>
                <button onClick={() => props.changeFilter('all')}>All</button>
                <button onClick={() => props.changeFilter('active')}>Active</button>
                <button onClick={() => props.changeFilter('completed')}>Completed</button>
            </div>
        </div>
    )
}