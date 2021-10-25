import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import Todolist from './components/TodoList';
//import { v1 } from 'uuid'
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}
export type FilterValueType = "all" | "active" | "completed"


function App() {
    let tasksForHookUseState: Array<TaskType> = [
        { id: v1(), title: "HTML", isDone: false },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "jQuery", isDone: false },
    ]
    let [tasks, setTasks] = useState<Array<TaskType>>(tasksForHookUseState)
    let [filter, setFilter] = useState<FilterValueType>('all')

    let addTask = (title: string) => {
        let newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }
    let removeTask = (taskID: string) => {
        setTasks(tasks.filter(t => t.id !== taskID))
    }
    let changeFilter = (newFilter: FilterValueType) => {
        setFilter(newFilter)
    }
    let tasksForRender = tasks
    if (filter === 'active') {
        tasksForRender = tasks.filter(t => t.isDone == false)
    } if (filter === 'completed') {
        tasksForRender = tasks.filter(t => t.isDone == true)
    }
    return (
        <div className="App">
            <Todolist title={"What to learn?"} tasks={tasksForRender} removeTask={removeTask} changeFilter={changeFilter} addTask={addTask} />

        </div>
    );
}

export default App;
