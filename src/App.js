import './SharedCompononents/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaBeer, FaFacebook } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import AOS from 'aos';
import Banner from './Components/Banner/Banner';


function App() {

	useEffect(() => {
		AOS.init();
	}, []);


	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={
					<Banner />
				} />
			</Routes>
		</>
	)
}

export default App
