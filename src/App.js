import './SharedCompononents/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaBeer, FaFacebook } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from './Components/Banner/Banner';
import Category from './Components/Category/Category';
import Items from './Components/Items/Items';
import Locations from './Components/Location/Locations';


function App() {

	useEffect(() => {
		AOS.init();
	}, []);


	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={
					<>
						<Banner />
						<Category />
						<Items />
						<Locations />
					</>
				} />
			</Routes>
		</>
	)
}

export default App
