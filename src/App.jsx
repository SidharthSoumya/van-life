import { Component } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Vans from './components/Vans'

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<header>
					<Link className="site-logo" to="/">#VanLife</Link>
					<nav>
						<Link to="/about">About</Link>
					</nav>
				</header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/vans" element={<Vans />} />
				</Routes>
			</BrowserRouter>
		)
	}
}
