import React from 'react'
import { FilterValuesType } from '../App'
import './Todolist.css'
type PropsType = {
    name: string
    callBack: () => void
    style: string
}

export const Button = (props: PropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler} className={props.style}>{props.name}</button>
    )
}