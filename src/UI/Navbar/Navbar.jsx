import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout, toggleIsFetchingAuth } from "../../redux/auth-reducer";
import Preloader from "../components/common/Preloader/Preloader";
import s from './Navbar.module.css'
import bsuLogo from '../../images/BSU_logo.jpg'
import Circle from "../components/common/Circle/Circle";

const Navbar = () => {
    const {uid} = useSelector(state => state.auth.authUserData)
    const unreadMsg = useSelector(state => state.messagesPage.unreadCount)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout(uid))
    }

    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <a href="#">
                        <span className={`${s.icon} ${s.brandname}`}>
                            <img src={bsuLogo}/>
                        </span>
                        <span className={s.title}>Legal clinic</span>
                    </a>
                </li>

                <li>
                    <NavLink to="/">
                        <span className={s.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={s.ionicon} viewBox="0 0 512 512"><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                        </span>
                        <span className={s.title}>Home</span>
                    </NavLink>
                </li>


                <li>
                    <NavLink to="/profile">
                        <span className={`${s.icon} ${s.home}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={s.ionicon} viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
                        </span>
                        <span className={s.title}>My page</span>
                    </NavLink>
                </li>
            
            
                <li>
                    <NavLink to="/messages">
                        <span className={`${s.icon} ${s.messages}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={s.ionicon} viewBox="0 0 512 512"><path d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>
                            {unreadMsg.length ? <Circle s={s}/> : <></>} 
                        </span>
                        <span className={s.title}>Messages</span>{
                            unreadMsg.length ?
                        <span className={s.rightCounterWrap}>
                            <span className={s.rightCounter}>{unreadMsg.length}</span>
                        </span>
                        : <></>
                        }
                    </NavLink>
                </li>
            
            
                <li>
                    <NavLink to="/">
                        <span className={`${s.icon} ${s.news}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={s.ionicon} viewBox="0 0 512 512"><path d="M32 32v432a16 16 0 0016 16h432" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="96" y="224" width="80" height="192" rx="20" ry="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="240" y="176" width="80" height="240" rx="20" ry="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="383.64" y="112" width="80" height="304" rx="20" ry="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                        </span>
                        <span className={s.title}>News</span>
                    </NavLink>
                </li>
            
            
                <li>
                    <NavLink to="/">
                        <span className={`${s.icon} ${s.settings}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={s.ionicon} viewBox="0 0 512 512"><path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                        </span>
                        <span className={s.title}>Settings</span>
                    </NavLink>
                </li>
            
            
                <li onClick={onLogout}>
                    <a>
                        <span className={`${s.icon} ${s.signOut}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={s.ionicon} viewBox="0 0 512 512"><path d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                        </span>
                        <span className={s.title}>Sign out</span>
                    </a>
                </li>
            </ul>
        </nav>
        
    )
}

export default Navbar