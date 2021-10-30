import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FilterValuesType } from '../App';
import { Button } from './Button';
import { FullInput } from './FullInput';

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
}

export function Todolist(props: PropsType) {

    const mainFunc = (value: FilterValuesType) => {
        changeFilter(value)
    }

    const onClickHandler = (tId: string) => props.removeTask(tId)

    let [filter, setFilter] = useState<FilterValuesType>("all");
    let [title, setTitle] = useState("")

    let tasksForTodolist = props.tasks;

    if (filter === "active") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }
    const addTask = () => {
        props.addTask(title);
        setTitle("");
    }
    return <div>
        <h3>{props.title}</h3>
        <FullInput addTask={props.addTask} title={title} setTitle={setTitle} />
        <Button name={'+'} callBack={addTask} />
        <ul>
            {
                tasksForTodolist.map(t => {

                    // const onClickHandler = () => props.removeTask(t.id)

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone} />
                        <span>{t.title}</span>
                        {/* <button onClick={onClickHandler}>x</button> */}
                        <Button name={'x'} callBack={() => onClickHandler(t.id)} />
                    </li>
                })
            }
        </ul>
        <div>
            <Button name={'All'} callBack={() => { mainFunc('all') }} />
            <Button name={'Active'} callBack={() => { mainFunc('active') }} />
            <Button name={'Completed'} callBack={() => { mainFunc('completed') }} />
        </div>
    </div>
}
