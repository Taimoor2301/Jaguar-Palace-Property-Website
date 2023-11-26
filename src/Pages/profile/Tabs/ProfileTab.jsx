import { useState } from "react";
import { DataTemplate } from "../../../constants";

const ProfileTab = () => {
	const [data, setData] = useState(DataTemplate);

	function handleChange(e) {
		const { name, value } = e.target;
		setData((prev) => ({ ...prev, [name]: { ...prev[name], value: value } }));
	}

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
			<h1 className='text-2xl font-righteous tracking-wide col-span-full text-center py-6 underline'>Profile</h1>
			<DataField {...data.firstName} onChange={handleChange} />
			<DataField {...data.lastName} onChange={handleChange} />
			<DataField {...data.phoneNumber} onChange={handleChange} />
			<DataField {...data.email} onChange={handleChange} />
			<DataField {...data.city} onChange={handleChange} />
			<DataField {...data.state} onChange={handleChange} />
			<DataField {...data.postalCode} onChange={handleChange} />
			<DataField {...data.country} onChange={handleChange} />

			<button
				className='text-lg bg-primary text-white border-2 hover:border-primary border-transparent hover:bg-white hover:text-primary col-span-1 font-righteous py-1.5 rounded-md transition-all duration-500'
				onClick={() => console.log(data)}>
				Update
			</button>
		</div>
	);
};

export default ProfileTab;

const DataField = ({ name = "", value = "", onChange, type = "text", label }) => {
	return (
		<div className='flex flex-col gap-1 font-righteous'>
			<label>{label}</label>
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				className='px-3 py-2 col-span-1 rounded-md border hover:border-primary focus:border-primary focus:outline-none'
			/>
		</div>
	);
};
