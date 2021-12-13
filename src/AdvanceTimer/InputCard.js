import React from 'react'
import classes from './InputCard.module.css'
import { useSelector } from 'react-redux'
export default function InputCard(props) {
    const myState = useSelector((state) => state.countDownReduces)
    let inputshow = myState.showkey ? classes.inputcard1 : classes.inputcard
    return <div className={inputshow}>{props.children}</div>
}
