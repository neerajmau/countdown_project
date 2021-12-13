import React, { Fragment, useState } from 'react'
import InputCard from './InputCard'
import Input from '../components/Input';
import classes from './KeyInput.module.css'
import KeyButton from './KeyButton';
import Card from './Card';
import {
    stopTimer, resetTimer, setInterv, setShowTime, setShow, setColorChange, setSecond,
    setMinute, setHours, setMSecond
} from '../Actions/index';
import { useDispatch, useSelector } from 'react-redux';
import DisplayTime from '../components/DisplayTime';

export default function KeyInput() {
    const myState = useSelector((state) => state.countDownReduces)
    let { show, showtime, time, showkey } = myState
    const dispatch = useDispatch()
    const [displaytime, setdisplaytime] = useState(false)
    const start = () => {
        if (time.h === 0 && time.h === 0 && time.m === 0 && time.s === 0) {
            console.log("object")
            return
        }
        run()
        setdisplaytime(true)
        dispatch(setShowTime(false))
        dispatch(setInterv(setInterval(run, 10)))
        dispatch(setShow(true))
    }

    var updatedS = time.s, updatedM = time.m, updatedH = time.h, updatedms = time.ms;
    const run = () => {
        if (updatedH > 0 && updatedM === 0) {
            updatedM = 60
            updatedH--
            dispatch(setHours(updatedH))
        }
        if (updatedM > 0 && updatedS === 0) {
            updatedS = 60
            updatedM--
            dispatch(setMinute(updatedM))
        }
        if (updatedH === 0 && updatedM === 0 && updatedS === 10) {
            console.log("Change")
            dispatch(setColorChange(true))
        }
        if (updatedS > 0 && updatedms === 0) {
            updatedms = 100
            updatedS--;
            dispatch(setSecond(updatedS))
        }
        if (updatedms > 0) {
            updatedms--;
            dispatch(setMSecond(updatedms))
        }
        return
    };

    return (
        <Fragment>
            <div className={classes.advancetime}>
                <Card>
                    <InputCard className={classes.keyinput}>
                        {!showtime && <DisplayTime displaytime={displaytime} />}
                        <div className={classes.input}>
                            {showtime && <Input />}
                        </div>
                    </InputCard>
                    {showkey ? '' : <KeyButton />}


                    {showkey || show ? <div className={classes.buttonshow}>
                        {showkey && show ?
                            <button onClick={() => dispatch(stopTimer())} className={classes.stopbutton}>STOP</button> :
                            <button onClick={start} className={classes.stopbutton}>RESUME</button>}

                        <button onClick={() => dispatch(resetTimer())} className={classes.resetbutton}>RESET</button></div> :
                        <button className={classes.main_button} onClick={start}>START</button>}
                </Card>
            </div>
        </Fragment>

    )
}
