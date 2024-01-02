import { useState } from "react";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const AddNewModel = ({ closeModel }) => {
	const dataTemplate = {
		Property_Type: "",
		Property_Description: "",
		Pictures: "",
		Location: {
			Lattitude: "",
			Longitude: "",
		},
		Google_PlusCode: "",
		Deed_of_Ownership: "",
		Appraisal: "",
		Owner: {
			Name: "",
			Address: "",
			Ownership_Percentage: "",
		},
	};

	const [data, setData] = useState(dataTemplate);

	return (
		<motion.div
			className='bg-black/50 backdrop-blur-sm fixed w-screen h-screen left-0 top-0 grid place-content-center z-[99999]'
			onClick={() => closeModel(false)}>
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0 }}
				transition={{ duration: 0.3 }}
				className='bg-white max-w-7xl mx-auto lg:w-[80vw] w-[95vw] h-[90vh] lg:h-[93vh] rounded-xl p-3 shadow-md flex flex-col justify-between py-8 items-center gap-10 relative'
				onClick={(e) => e.stopPropagation()}>
				<IoCloseCircleOutline
					className='absolute text-4xl right-3 top-3 cursor-pointer hover:text-red-600 transition-all duration-300'
					onClick={() => closeModel(false)}
				/>

				<h1 className='text-lg font-poppins font-medium underline font-righteous'>Add New Document</h1>

				<div className='grid grid-cols-2 md:grid-cols-4 gap-5 text-sm font-righteous w-full overflow-auto flex-1'>
					{/*  type  */}
					<label
						htmlFor=''
						className='flex flex-col gap-1 col-span-1 items-start '>
						Property Type
						<select
							value={data.Property_Type}
							className='border-2 border-primary rounded-lg p-1 text-gray-800'
							onChange={(e) => setData((prev) => ({ ...prev, Property_Type: e.target.value }))}>
							<option value='commercial'>Commercial</option>
							<option value='recidential'>Recidential</option>
						</select>
					</label>

					{/* location  */}

					<label className='col-span-1 flex flex-col gap-1'>
						Loaction
						<div className='flex gap-2 flex-wrap text-gray-800'>
							<input
								className='border-2 border-primary rounded-lg p-2 w-28'
								type='text'
								name='lattitude'
								value={data.Location.Lattitude}
								onChange={(e) => setData((p) => ({ ...p, Location: { ...data.Location, Lattitude: e.target.value } }))}
								placeholder='lattitude'
							/>
							<input
								className='border-2 border-primary rounded-lg p-2 w-28'
								type='text'
								name='longitude'
								value={data.Location.Longitude}
								onChange={(e) => setData((p) => ({ ...p, Location: { ...data.Location, Longitude: e.target.value } }))}
								placeholder='longitude'
							/>
						</div>
					</label>

					{/* pics  */}
					<label className='col-span-2 flex flex-col gap-2'>
						Upload Pictures
						<input
							className='file:bg-primary file:border-none file:px-4 file:py-1.5 file:rounded-md file:text-gray-700'
							type='file'
							id='property_pictures'
							value={data.Pictures}
							onChange={(e) => setData((p) => ({ ...p, Pictures: e.target.files }))}
						/>
					</label>

					{/* description  */}

					<label className='col-span-full flex flex-col gap-2'>
						Property Description
						<textarea
							name='PropertyDescription'
							cols='20'
							rows='5'
							value={data.Property_Description}
							placeholder='description...'
							className='rounded-lg border-2 border-primary p-2'
							onChange={(e) => setData((prev) => ({ ...prev, Property_Description: e.target.value }))}></textarea>
					</label>

					{/* google code  */}

					<label className='col-span-1 flex flex-col gap-2'>
						Google Plus Code
						<input
							name='googlePlusCode'
							type='text'
							value={data.Google_PlusCode}
							placeholder='google plus code...'
							className='rounded-lg border-2 border-primary p-2'
							onChange={(e) => setData((prev) => ({ ...prev, Google_PlusCode: e.target.value }))}
						/>
					</label>

					{/* Deed of ownership  */}

					<label className='col-span-1 flex flex-col gap-2'>
						Deed of Ownership
						<input
							className='file:bg-primary file:border-none file:px-4 file:py-1.5 file:rounded-md file:text-gray-700'
							name='deedofownership'
							type='file'
							value={data.Deed_of_Ownership}
							placeholder='deed of ownership...'
							onChange={(e) => setData((prev) => ({ ...prev, Deed_of_Ownership: e.target.files }))}
						/>
					</label>

					{/* appraisal  */}

					<label className='col-span-1 flex flex-col gap-2'>
						Appraisal
						<input
							className='file:bg-primary file:border-none file:px-4 file:py-1.5 file:rounded-md file:text-gray-700'
							name='appraisal'
							type='file'
							value={data.Appraisal}
							placeholder='appraisal...'
							onChange={(e) => setData((prev) => ({ ...prev, Appraisal: e.target.files }))}
						/>
					</label>

					{/* owner  */}
					<label className='col-span-full flex flex-col gap-2'>
						Owner
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
							<input
								name='name'
								type='text'
								value={data.Owner.Name}
								placeholder='name...'
								className='rounded-lg border-2 border-primary p-2'
								onChange={(e) => setData((prev) => ({ ...prev, Owner: { ...data.Owner, Name: e.target.value } }))}
							/>
							<input
								name='address'
								type='text'
								value={data.Owner.Address}
								placeholder='address...'
								className='rounded-lg border-primary border-2 p-2'
								onChange={(e) => setData((prev) => ({ ...prev, Owner: { ...data.Owner, Address: e.target.value } }))}
							/>
							<input
								name='ownership'
								type='text'
								value={data.Owner.Ownership_Percentage}
								placeholder='ownership %'
								className='rounded-lg border-primary border-2 p-2'
								onChange={(e) => setData((prev) => ({ ...prev, Owner: { ...data.Owner, Ownership_Percentage: e.target.value } }))}
							/>
						</div>
					</label>

					<button
						className='p-2 rounded-lg bg-primary flex items-center justify-center hover:text-white text-sm font-poppins font-medium gap-2 w-52 hover:bg-purple-600 transition-all group h-12'
						onClick={() => closeModel(false)}>
						Submit <FaArrowRight className='group-hover:translate-x-2 transition-all -rotate-90 group-hover:rotate-0 duration-300' />
					</button>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default AddNewModel;

const Input = ({ label = "input", placeholder, name = "input", type = "text", onChange, value }) => {
	return (
		<label className='flex flex-col gap-1'>
			{label}
			<input
				className='p-2 rounded-lg border hover:border-purple-500 focus:border-purple-500 focus:outline-none'
				type={type}
				name={name}
				placeholder={placeholder || label}
				value={value}
				onChange={(e) => onChange(e)}
			/>
		</label>
	);
};
