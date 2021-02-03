import React from 'react'
import logo from './logo.svg'
import './App.scss'
import AllComments from './components/AllComments.jsx'
import AddComment from './components/AddComment.jsx'

function App() {

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<p>Hello Vite + React!</p>
				<p>Backend : Node - Express - mySql</p>
				<AllComments/>
				<AddComment/>
			</header>
		</div>
	)
}

export default App
