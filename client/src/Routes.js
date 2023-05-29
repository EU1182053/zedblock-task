import React from 'react'
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import TaskScreen from './components/TaskScreen'


const RouterList = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/taskscreen" element={<TaskScreen/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default RouterList
