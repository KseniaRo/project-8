import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from '../store'
import { Provider, connect } from 'react-redux'

import './App.css'

import Login from './components/Login'
import Nav from './components/Nav'
import Home from './components/Home'
import Signup from './components/Signup'
import SinglePost from './components/SinglePost'



export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <main className="form-signin">
          <Route path='/home' exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home/posts/:postId " component={SinglePost} />
        </main>
      </BrowserRouter>
    </div>
  )
}
