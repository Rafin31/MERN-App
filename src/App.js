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
import ProtectiveRoute from './Components/UserSignIn/ProtectiveRoute';
import Inventory from './Components/Inventroy/Inventory';
import Additem from './Components/AddItem/Additem';
import MyItems from './Components/MyItems/MyItems';
import { FormGroup } from 'react-bootstrap';
import Four04 from './Components/404page/Four04';
import Blog from './Components/Blog/Blog';



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



					<Route path='/items/:id' element={
						<ProtectiveRoute>
							<ManageItems />
						</ProtectiveRoute>
					} />


					<Route path='/manageInventories' element={
						<ProtectiveRoute>
							<Inventory />
						</ProtectiveRoute>
					} />

					<Route path='/addItem' element={
						<ProtectiveRoute>
							<Additem />
						</ProtectiveRoute>
					} />

					<Route path='/myItems' element={
						<ProtectiveRoute>
							<MyItems />
						</ProtectiveRoute>
					} />

					<Route path='/blog' element={<Blog />} />
					<Route path='*' element={<Four04 />} />


				</Routes>
				<Footer />

			</ExpressContext>


		</>
	)
}

export default App
