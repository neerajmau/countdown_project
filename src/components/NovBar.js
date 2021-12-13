import React, { Fragment } from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { MdOutlineTimer } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { resetTimer } from '../Actions/index';

export default function NovBar() {
    const dispatch = useDispatch()
    return (
        <Fragment>
            <nav className={classes.main}>
                <h1><MdOutlineTimer /></h1>
                <ul>
                    <li><NavLink className={classes.navlink} to="/" onClick={() => dispatch(resetTimer())}>BasicTimer</NavLink> </li>
                    <li><NavLink className={classes.navlink} to="AdvanceTimer" onClick={() => dispatch(resetTimer())}> AdvanceTimer</NavLink></li>
                </ul>
            </nav>
        </Fragment >
    )
}
