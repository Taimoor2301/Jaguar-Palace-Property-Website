import { FaPlus } from "react-icons/fa";
import AddNewModel from "../../../Components/Models/AddNewModel";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { recentProperty } from "../../Home/data";
const ListingTab = () => {
	const [openModel, setOpenModel] = useState(false);

	useEffect(() => {
		if (openModel) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [openModel]);

	return (
		<div className='flex flex-col gap-8'>
			<button
				className='bg-green-500 text-white text-xs p-2 w-28 rounded-lg font-medium tracking-wider hover:bg-green-600 flex justify-center items-center gap-1 group self-end'
				onClick={() => setOpenModel(true)}>
				Add New <FaPlus className='group-hover:rotate-[270deg] transition-all duration-700' />
			</button>

			<AnimatePresence>{openModel && <AddNewModel closeModel={setOpenModel} />}</AnimatePresence>

			<div className='flex flex-col font-righteous'>
				<div className='py-4 px-5 border-b flex items-center gap-5 w-full bg-primary transition-all rounded-lg text-white mb-5 tracking-wider'>
					<span className=''>S.no</span>
					<span className='w-full'>Owner Name</span>
					<span className='w-full text-end font-medium underline'>Type</span>
				</div>

				{recentProperty.map((item, i) => (
					<ListElement
						key={item.id}
						index={i}
						{...item}
					/>
				))}
			</div>
		</div>
	);
};

export default ListingTab;

const dummyData = [
	{ type: "Recidential", owner: "Owner one", id: 1 },
	{ type: "Commercial", owner: "Owner Two", id: 2 },
	{ type: "Commercial", owner: "Owner Three", id: 3 },
	{ type: "Recidential", owner: "Owner Four", id: 4 },
	{ type: "Commercial", owner: "Owner Five", id: 5 },
];

const ListElement = ({ type, id, heading, index }) => {
	return (
		<Link
			to={`/file/${id}`}
			className='py-4 px-2 border-b flex items-center gap-5 w-full hover:bg-primary/50 transition-all rounded-lg hover:text-white1 text-xs'>
			<span className='w-12 md:w-8 bg-gray-700 text-white text-sm flex justify-center items-center aspect-square rounded-full'>{index + 1}</span>
			<span className='w-52 font-semibold'>{heading}</span>
			<span className='w-full text-end font-medium underline'>{type}</span>
		</Link>
	);
};
