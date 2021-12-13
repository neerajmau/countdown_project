import React, { Fragment } from 'react'
import classes from './BasicTimer.module.css';
import Input from './Input';
import { VscDebugStart } from 'react-icons/vsc';
import { BsStop } from 'react-icons/bs'
import { FiRefreshCcw } from 'react-icons/fi'
import DisplayTime from './DisplayTime';
import {
    stopTimer, resetTimer, setInterv, setShowTime, setShow, setColorChange, setSecond, setMinute,
    setHours, setMSecond
} from '../Actions/index';
import { useDispatch, useSelector } from 'react-redux';
const BasicTimer = () => {
    const myState = useSelector((state) => state.countDownReduces)
    let { show, showtime, time } = myState
    const dispatch = useDispatch()


    const start = () => {
        if (time.h === 0 && time.h === 0 && time.m === 0 && time.s === 0) {
            console.log("object")
            return
        }
        run()
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

    let colorshow = show ? classes.stop : classes.left;
    return (
        <Fragment>
            <div className={classes.container}>
                <div className={classes.main}>
                    <div className={classes.input}>

                        {showtime ? <Input /> : <DisplayTime />}

                    </div>
                    <div className={classes.button_part}>
                        <div className={colorshow}>
                            {show ? <i onClick={() => dispatch(stopTimer())}><BsStop /> </i> : <i onClick={start}><VscDebugStart /></i>}
                        </div>
                        <div className={classes.right}>
                            <i onClick={() => dispatch(resetTimer())}> <FiRefreshCcw /></i>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BasicTimer;
