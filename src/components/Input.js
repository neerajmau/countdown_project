import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setHours, setMinute, setSecond, onFocus1 } from '../Actions/index'

export default function Input(props) {
    const dispatch = useDispatch()
    const myState = useSelector((store) => store.countDownReduces)
    let { h, m, s } = myState.time


    return (
        <div>
            <input type="number" value={h} placeholder='00' onChange={(e) => dispatch(setHours(e.target.value))} onClick={() => dispatch(onFocus1("hours"))} ></input><span>:</span>
            <input type="number" value={m} placeholder='00' onChange={(e) => dispatch(setMinute(e.target.value))} onClick={() => dispatch(onFocus1("minute"))}></input><span>:</span>
            <input type="number" value={s} placeholder='00' onChange={(e) => dispatch(setSecond(e.target.value))} onClick={() => dispatch(onFocus1("second"))}></input>
        </div>
    )
}
