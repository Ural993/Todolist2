import { title } from 'process';
import React, { KeyboardEvent, ChangeEvent, useState } from 'react';
import { FilterValueType, TaskType } from '../App';

type TodoListPropType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (taskId: string) => void,
    changeFilter: (newFilter: FilterValueType) => void
    addTask: (title: string) => void,
}

export default function Todolist(props: TodoListPropType) {
    let [title, setTitle] = useState('')
    let tasksJSXElement = props.tasks.map(task => {

        const removeTaskHandler = () => {
            props.removeTask(task.id)
        }
        return (
            <li key={task.id}><input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <button onClick={removeTaskHandler}>x</button>
            </li>

        )
    })

    const addTaskHandler = () => {
        title && props.addTask(title)
        setTitle('')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') { addTaskHandler() }
    }
    const changeFilterForAll = () => {
        props.changeFilter('all')
    }
    const changeFilterForActive = () => {
        props.changeFilter('active')
    }
    const changeFilterForCompleted = () => {
        props.changeFilter('completed')
    }

    return (

        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler} />
                <button onClick={addTaskHandler}>+</button>
            </div>
            <ul>
                {tasksJSXElement}
            </ul>
            <div>
                <button onClick={changeFilterForAll}>All</button>
                <button onClick={changeFilterForActive}>Active</button>
                <button onClick={changeFilterForCompleted}>Completed</button>
            </div>
        </div>
    )
}