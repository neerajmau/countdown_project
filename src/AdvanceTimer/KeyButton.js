import React, { Fragment } from 'react'
import classes from './KeyButton.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { setHours, setMinute, setSecond } from '../Actions/index';
export default function KeyButton() {
    const myState = useSelector((store) => store.countDownReduces)
    let { time } = myState
    const dispatch = useDispatch()
    const inputKey = (value) => {
        if (myState.focus === "hours") {
            if (time.h === 0 || time.h === '') { dispatch(setHours(Number(value))) }
            else if (time.h > 0) {
                let result = time.h + value
                dispatch(setHours(Number(result)))
            }
        }
        if (myState.focus === "minute") {
            if (time.m === 0 || time.m === '') { dispatch(setMinute(Number(value))) }
            else if (time.m > 0) {
                let result = time.m + value
                dispatch(setMinute(Number(result)))
            }
        }
        if (myState.focus === "second") {
            if (time.s === 0 || time.s === '') { dispatch(setSecond(Number(value))) }
            else if (time.s > 0) {
                let result = time.s + value
                dispatch(setSecond(Number(result)))
            }
        }
        console.log("object", myState.time)
    }
    return (
        <Fragment>
            <div className={classes.keybutton}>
                <button onClick={() => { inputKey("1") }}>1</button>
                <button onClick={() => { inputKey("2") }}>2</button>
                <button onClick={() => { inputKey("3") }}>3</button>
                <button onClick={() => { inputKey("4") }}>4</button>
                <button onClick={() => { inputKey("5") }}>5</button>
                <button onClick={() => { inputKey("6") }}>6</button>
                <button onClick={() => { inputKey("7") }}>7</button>
                <button onClick={() => { inputKey("8") }}>8</button>
                <button onClick={() => { inputKey("9") }}>9</button>
                <button>x</button>
                <button onClick={() => { inputKey("0") }}>0</button>
                <button>#</button>
            </div>
        </Fragment>
    )
}
