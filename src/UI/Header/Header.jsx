import React from "react";
import s from '../Navbar/Navbar.module.css'
import s1 from '../Layout/Layout.module.css'
import './Header.css'

const Header = () => {

    function addActive() {
        document.querySelector('.' + s.nav).classList.toggle(s.active)
        document.querySelector('.header').classList.toggle('active')
        document.querySelector('.' + s1.contentWrapper).classList.toggle(s1.active)
    }

    return (
        <header className="header">
            <div className="topbar">
                <div onClick={addActive} className="toggle">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
                </div>
                <div className="search">
                    <label>
                        <input type="text" placeholder={'Search here'}/>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>
                    </label>
                </div>
                <div className="user">
                    <img src="https://sun9-45.userapi.com/impg/pdhdc93j8Ib2TqV8rjKE644cHAzrpbN6BprpSg/lLtLcMfaXN8.jpg?size=1280x960&quality=95&sign=1c61305bbc5cd4a882295f78385a37af&type=album"/>
                </div>
            </div>
        </header>
    )
}

export default Header