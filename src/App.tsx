import React from 'react';
import './App.css';
import Todolist from './components/TodoList';

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}


function App() {
    const tasks_1: Array<TaskType> = [
        { id: 1, title: "HTML", isDone: false },
        { id: 2, title: "JS", isDone: false },
        { id: 3, title: "jQuery", isDone: false },
    ]
    return (
        <div className="App">
            <Todolist title={"What to learn?"} tasks={tasks_1} />
            <Todolist title={"What to buy?"} tasks={tasks_1} />
            <Todolist title={"What to eat?"} tasks={tasks_1} />
        </div>
    );
}

export default App;
