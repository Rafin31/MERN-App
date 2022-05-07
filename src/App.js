import './SharedCompononents/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Category from './Components/Category/Category';
import Items from './Components/Items/Items';
import Locations from './Components/Location/Locations';
import Footer from './Components/Footer/Footer';
import SignIn from './Components/UserSignIn/SignIn';
import { toast, ToastContainer } from 'react-toastify';
import Loading from './Components/Loaidng/Loading';
import ExpressContext from './Components/Context/ExpressContext';
import ManageItems from './Components/Manageitems/ManageItems';



function App() {

	useEffect(() => {
		AOS.init();
		toast.configure();
	}, []);


	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={2000}
			/>

			<ExpressContext>
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
					<Route path='/login' element={<SignIn />} />
					<Route path='/loading' element={<Loading />} />
					<Route path='/items/:id' element={<ManageItems />} />
				</Routes>
				<Footer />

			</ExpressContext>


		</>
	)
}

export default App
