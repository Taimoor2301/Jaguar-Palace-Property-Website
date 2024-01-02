import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Layout/Layout";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Profile from "./Pages/profile/Profile";
import About from "./Pages/About/About";
import PropertyDetails from "./Pages/PropertyDetailPage/PropertyDetails";
import Contact from "./Pages/Contact/Contact";
import RecentProperties from "./Pages/Property/PropertyPage";
import { useEffect } from "react";
const App = () => {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route
					path='/'
					element={<Layout />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='profile'
						element={<Profile />}
					/>
					<Route
						path='/property'
						element={<RecentProperties />}
					/>
					<Route
						path='about'
						element={<About />}
					/>
					<Route
						path='contact'
						element={<Contact />}
					/>
					<Route
						path='/file/:id'
						element={<PropertyDetails />}
					/>
				</Route>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/signup'
					element={<Signup />}
				/>
			</Routes>
		</>
	);
};

export default App;

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
};
