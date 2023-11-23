import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signup = () => {
	return (
		<main className='min-h-screen bg-gray-100 flex flex-col justify-center items-center gap-5'>
			<form action='' className='flex flex-col gap-5 py-4 px-6 bg-white rounded-md md:min-w-[30rem] min-w-[95%]'>
				<h1 className='text-5xl font-righteous text-primary text-center py-5'>Signup</h1>
				<div className='flex flex-col gap-1 font-righteous'>
					<label className='text-xl' htmlFor='email'>
						Username
					</label>
					<input className='py-3.5 px-4 border-2 focus:outline-none rounded-sm' type='text' name='username' id='username' placeholder='username' />
				</div>
				<div className='flex flex-col gap-1 font-righteous'>
					<label className='text-xl' htmlFor='email'>
						Email
					</label>
					<input className='py-3.5 px-4 border-2 focus:outline-none rounded-sm' type='email' name='email' id='email' placeholder='email' />
				</div>
				<div className='flex flex-col gap-1 font-righteous'>
					<label className='text-xl' htmlFor='password'>
						Password
					</label>
					<input
						className='py-3.5 px-4 rounded-sm border-2 focus:outline-none'
						type='password'
						name='password'
						id='password'
						placeholder='password'
					/>
				</div>

				<div className='w-full flex items-center gap-5 px-10 font-righteous text-gray-800'>
					<div className='bg-gray-50 h-[1px] rounded-md flex-1'></div>
					or continue with
					<div className='bg-gray-50 h-[1px] rounded-md flex-1'></div>
				</div>

				<div className='flex items-center justify-center gap-4 font-righteous md:text-2xl text-xl'>
					<button className='bg-primary font-righteous text-white border-2 border-primary hover:border-gray-800 hover:bg-transparent hover:text-gray-800 transition-all duration-500 rounded-md p-2'>
						Facebook
					</button>
					<button className='bg-primary font-righteous text-white border-2 border-primary hover:border-gray-800 hover:bg-transparent hover:text-gray-800 transition-all duration-500 rounded-md p-2'>
						Google
					</button>
				</div>

				<button
					type='submit'
					className='bg-primary font-righteous text-white md:text-2xl text-xl border-2 border-primary hover:border-gray-800 hover:bg-transparent hover:text-gray-800 transition-all duration-500 rounded-md py-3 my-5'>
					Login
				</button>
			</form>

			<div>
				Already have an account?{" "}
				<Link className='text-gray-800 font-righteous' to='/login'>
					Signup
				</Link>
			</div>
		</main>
	);
};

export default Signup;
