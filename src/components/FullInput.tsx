import React, { ChangeEvent, KeyboardEvent, useState } from "react"
import { Button } from "./Button"

type PropsType = {
    addTask: (title: string) => void
    title: string
    setTitle: (title: string) => void
}

export const FullInput = ({ setTitle, title, ...props }: PropsType) => {



    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }
    const addTask = () => {
        props.addTask(title);
        setTitle("");
    }
    return (
        <input value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
        />
    )
}