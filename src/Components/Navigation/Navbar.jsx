import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaLinkedin, FaFacebook, FaGooglePlus, FaTwitter, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/logo/logo.svg";
import { useState } from "react";

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<>
			<SubNav />
			<nav className='px-5 xl:px-0 max-w-7xl flex justify-between items-center gap-3 py-1.5 mx-auto font-righteous'>
				<div>
					<img src={logo} className='w-52' alt='' />
				</div>

				<div className='text-xl lg:flex hidden gap-0 navlinks'>
					<NavLink to={"/"} className='grid place-content-center  py-2 px-3'>
						Home
					</NavLink>
					<NavLink to={"/about"} className='grid place-content-center py-2 px-3'>
						About
					</NavLink>
					<NavLink to={"/contact"} className='grid place-content-center py-2 px-3'>
						Contact
					</NavLink>
					<NavLink to={"/property"} className='grid place-content-center py-2 px-3'>
						Property
					</NavLink>
				</div>

				<div className='lg:flex hidden items-center gap-1'>
					<input
						type='search'
						placeholder='search'
						className='border border-black rounded-full px-3.5 py-2 focus:outline-none focus:border-primary hover:border-primary transition-all'
					/>
					<FaSearch className='text-[25px] hover:text-primary transition-all' />
				</div>

				<div className='text-2xl text-gray-800 lg:hidden' onClick={() => setNavOpen(!navOpen)}>
					{navOpen ? <IoMdClose /> : <FaBars />}
				</div>
			</nav>

			<div className={`lg:hidden transition-all duration-300 overflow-hidden ${!navOpen ? "h-0" : "h-[350px]"}`}>
				<div className='text-x flex flex-col py-3 gap-5 font-righteous navlinks'>
					<NavLink to={"/"} className='grid place-content-center  py-2 px-3'>
						Home
					</NavLink>
					<NavLink to={"/about"} className='grid place-content-center py-2 px-3'>
						About
					</NavLink>
					<NavLink to={"/contact"} className='grid place-content-center py-2 px-3'>
						Contact
					</NavLink>
					<NavLink to={"/property"} className='grid place-content-center py-2 px-3'>
						Property
					</NavLink>

					<div className='flex justify-center items-center gap-1'>
						<input
							type='search'
							className='border border-black rounded-full px-3.5 py-2 focus:outline-none focus:border-primary hover:border-primary transition-all'
						/>
						<FaSearch className='text-[25px] hover:text-primary transition-all' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;

const SubNav = () => {
	return (
		<div className='bg-black font-righteous text-gray-300  py-1'>
			<div className='max-w-7xl mx-auto flex px-5 xl:px-0 md:flex-row gap-1 items-center justify-evenly md:justify-between flex-wrap'>
				<span className='flex items-center gap-2 text-xs md:text-md'>
					<FaPhoneAlt />
					Need Support ? +411-555-555-5
				</span>
				<span>
					<Link to={"/login"} className='flex items-center text-xs md:text-md gap-2'>
						<IoPerson />
						Login/Registration
					</Link>
				</span>
				<span className='flex gap-2 items-center md:text-4xl'>
					<a href='#'>
						<FaFacebook />
					</a>
					<a href='#'>
						<FaTwitter />
					</a>
					<a href='#'>
						<FaGooglePlus />
					</a>
					<a href='#'>
						<FaLinkedin />
					</a>
				</span>
			</div>
		</div>
	);
};
