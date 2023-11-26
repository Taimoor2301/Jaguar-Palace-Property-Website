import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Layout/Layout";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Profile from "./Pages/profile/Profile";

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='profile' element={<Profile />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</>
	);
};

export default App;
