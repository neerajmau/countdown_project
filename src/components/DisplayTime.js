import React, { Fragment } from 'react'
import classes from './BasicTimer.module.css';
import { useSelector } from 'react-redux';
export default function DisplayTime(props) {
    const myState = useSelector((state) => state.countDownReduces)

    let display = props.displaytime ? classes.displaytimeshow : ''
    let redcolor = myState.colorchange ? classes.colorChange : false
    return (
        <Fragment>
            <div className={display} style={{ color: 'black' }}><span>H</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>M</span>&nbsp;&nbsp; &nbsp;<span>S</span>&nbsp; &nbsp;&nbsp;<span>MS</span></div>
            <div className={display} style={redcolor ? {
                color: 'red'
            } : { color: 'blue' }}>
                <span >{(myState.time.h >= 10) ? myState.time.h : "0" + myState.time.h}</span>&nbsp;:&nbsp;
                <span>{(myState.time.m >= 10) ? myState.time.m : "0" + myState.time.m}</span>&nbsp;:&nbsp;
                <span>{(myState.time.s >= 10) ? myState.time.s : "0" + myState.time.s}</span>&nbsp;:&nbsp;
                <span>{(myState.time.ms >= 10) ? myState.time.ms : "0" + myState.time.ms}</span>
            </div >
        </Fragment>
    )
}
