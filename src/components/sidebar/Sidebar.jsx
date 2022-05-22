import React from 'react'
import './sidebar.css'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/favicon.ico'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__logo" style={{ marginTop: '20px' }}>
                <Link to='/'><img src={logo} alt="Project Logo" /></Link>
            </div>
            <ul className='sidbar__items'>
                <li>
                    <p>Dashboard</p>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li >
                    <NavLink to='/analytice' className='disable'>Analytics</NavLink>
                </li>
                <li >
                    <NavLink to='/sales' className='disable'>Sales</NavLink>
                </li>
                <li>
                    <p>Quick Menu</p>
                    <NavLink to='/users'>Users</NavLink>
                </li>
                <li >
                    <NavLink to='/products' className='disable'>Products</NavLink>
                </li>
                <li >
                    <NavLink to='/transactions' className='disable'>Transactions</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar