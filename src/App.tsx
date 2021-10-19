import React, { useState } from 'react';
import './App.css';
import Todolist from './components/TodoList';

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}
export type FilterValueType = "all" | "active" | "completed"


function App() {
    let tasksForHookUseState: Array<TaskType> = [
        { id: 1, title: "HTML", isDone: false },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "jQuery", isDone: false },
    ]
    let [tasks, setTasks] = useState<Array<TaskType>>(tasksForHookUseState)
    let [filter, setFilter] = useState<FilterValueType>('completed')
    let removeTask = (taskID: number) => {
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
            <Todolist title={"What to learn?"} tasks={tasksForRender} removeTask={removeTask} changeFilter={changeFilter} />

        </div>
    );
}

export default App;
