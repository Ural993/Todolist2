import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FilterValuesType } from '../App';
import { Button } from './Button';
import { Input } from './Input';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    //changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeCheckbox: (taskId: string, isDone: boolean) => void
}

export function Todolist(props: PropsType) {

    const mainFunc = (value: FilterValuesType) => {
        changeFilter(value)
    }
    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    const onClickHandler = (tId: string) => props.removeTask(tId)

    let [filter, setFilter] = useState<FilterValuesType>("all");
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    let tasksForTodolist = props.tasks;

    if (filter === "active") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === true);
    }


    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim());
            setTitle("");
        } else {
            setError('It is not required')
        }

    }

    return <div>
        <h3>{props.title}</h3>
        <Input addTask={addTask} title={title} setTitle={setTitle} error={error} setError={setError} />
        <Button name={'+'} callBack={addTask} style={''} />
        <ul>
            {
                tasksForTodolist.map(t => {
                    const changeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeCheckbox(t.id, e.currentTarget.checked)
                    }

                    // const onClickHandler = () => props.removeTask(t.id)

                    return <li key={t.id} className={t.isDone ? 'isDone' : ''}>
                        <input type="checkbox" onChange={changeCheckboxHandler} checked={t.isDone} />
                        <span>{t.title}</span>
                        <Button name={'x'} callBack={() => onClickHandler(t.id)} style={''} />
                    </li>
                })
            }
        </ul>
        <div>
            <Button name={'All'} callBack={() => { mainFunc('all') }} style={filter === 'all' ? 'avtiveFilter' : ''} />
            <Button name={'Active'} callBack={() => { mainFunc('active') }} style={filter === 'active' ? 'avtiveFilter' : ''} />
            <Button name={'Completed'} callBack={() => { mainFunc('completed') }} style={filter === 'completed' ? 'avtiveFilter' : ''} />
        </div>
    </div>
}
