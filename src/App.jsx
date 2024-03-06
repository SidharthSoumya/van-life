import { Component } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import VanDetail from './pages/Vans/VanDetail'
import Vans from './pages/Vans/Vans'
import Layout from './components/Layout'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetail'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPrice from './pages/Host/HostVanPrice'
import HostVanPhotos from './pages/Host/HostVanPhotos'

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="vans" element={<Vans />} />
						<Route path="vans/:id" element={<VanDetail />} />
						<Route path="host" element={<HostLayout />}>
							<Route index element={<Dashboard />} />
							<Route path="income" element={<Income />} />
							<Route path="reviews" element={<Reviews />} />
							<Route path="vans" element={<HostVans />} />
							<Route path="vans/:id" element={<HostVanDetail />}>
								<Route index element={<HostVanInfo />} />
								<Route path="pricing" element={<HostVanPrice />} />
								<Route path="photos" element={<HostVanPhotos />} />
							</Route>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		)
	}
}
