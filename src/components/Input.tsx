import React, { ChangeEvent, KeyboardEvent, useState } from "react"
import './Todolist.css'

type PropsType = {
    addTask: () => void
    title: string
    setTitle: (title: string) => void
    error: string | null
    setError: (error: string | null) => void
}

export const Input = ({ setTitle, title, error, setError, ...props }: PropsType) => {



    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)

    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            props.addTask();
        }
    }

    return (<>

        <input value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            className={error ? 'error' : ''}
        />
        {error && <div className={'errorMessage'}>{error}</div>}
    </>
    )
}