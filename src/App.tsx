import React, { useState } from 'react';
import './App.css';
import Todolist from './components/TodoList';

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}


function App() {
    let tasksForHookUseState: Array<TaskType> = [
        { id: 1, title: "HTML", isDone: false },
        { id: 2, title: "JS", isDone: false },
        { id: 3, title: "jQuery", isDone: false },
    ]
    let [tasks, setTasks] = useState<Array<TaskType>>(tasksForHookUseState)
    let removeTask = (taskID: number) => {
        setTasks(tasks.filter(t => t.id !== taskID))
    }

    return (
        <div className="App">
            <Todolist title={"What to learn?"} tasks={tasks} removeTask={removeTask} />

        </div>
    );
}

export default App;
