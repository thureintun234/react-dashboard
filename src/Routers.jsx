import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Users from './components/users/Users'

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<Users />} />
            </Routes>
        </div>
    )
}

export default Routers