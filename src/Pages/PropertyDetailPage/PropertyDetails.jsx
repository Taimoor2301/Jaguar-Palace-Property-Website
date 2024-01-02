import { GrLocation } from "react-icons/gr";
import { FaBed, FaBath, FaParking } from "react-icons/fa";
import { GiSwitzerland } from "react-icons/gi";
import { IoMdDocument } from "react-icons/io";
import { FaEye, FaAddressBook, FaPercentage } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { recentProperty } from "../Home/data";

export default function Detail() {
	const { id } = useParams();
	const item = recentProperty.find((item) => item.id.toString() === id);

	return (
		<>
			<div className='bg-gray-100'>
				<main className='max-w-7xl mx-auto lg:py-10 py-3 font-poppins grid grid-cols-2 lg:grid-cols-3 gap-4'>
					<div className='bg-white rounded-xl flex flex-col gap-3 p-4 col-span-2'>
						<div className='rounded-xl overflow-hidden h-[20rem]'>
							<img
								className='w-full h-full object-cover object-center'
								src={item.image}
								alt='image'
							/>
						</div>

						<div className='flex justify-between items-center gap-5 text-gray-700'>
							<h1 className='text-2xl md:text-3xl font-bold'>{item.heading}</h1>
							<span className='p-2 rounded-md bg-primary text-white text-sm font-semibold'>{item.type}</span>
						</div>

						<div className='flex gap-2 items-center font-bold text-xs md:text-sm tracking-wider text-gray-700'>
							<GrLocation className='text-2xl text-primary' />
							<span>{item.location}</span>
						</div>

						<div className='flex items-center gap-4 border-b-2 pb-6 text-gray-700 flex-wrap'>
							<span className='flex items-center gap-2 text-sm font-semibold'>
								<FaBed className='text-2xl text-primary' /> {item.bedrooms}
							</span>
							<span className='flex items-center gap-2 text-sm font-semibold'>
								<FaBath className='text-2xl text-primary' /> {item.bathrooms}
							</span>
							<span className='flex items-center gap-2 text-sm font-semibold'>
								<FaParking className='text-2xl text-primary' /> 4 Parking
							</span>
							<span className='flex items-center gap-2 text-sm font-semibold'>
								<GiSwitzerland className='text-2xl text-primary' /> {item.landArea} sq feet
							</span>
						</div>

						<div className='flex gap-2 flex-col border-b-2 pb-5'>
							<h1 className='font-bold text-xl text-gray-800'>Property Deatils</h1>
							<p className='text-sm text-gray-600 lg:max-w-[80%]'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus dolore, a blanditiis nisi minima deserunt officia
								quaerat soluta commodi sequi iusto cumque assumenda aliquam corrupti aut quam porro laborum.
							</p>
						</div>

						<h1 className='text-gray-800 font-bold text-xl'>Owner Deatils</h1>
						<div className='flex flex-col lg:flex-row gap-5 flex-wrap text-gray-700 items-start lg:items-center'>
							<span className='flex items-center justify-center gap-2 text-lg font-semibold'>
								<IoPerson className='text-primary' />
								Taimoor
							</span>
							<span className='flex items-center justify-center gap-2 text-lg font-semibold'>
								<FaAddressBook className='text-primary' />
								Rawalpindi, Pakistan
							</span>
							<span className='flex items-center justify-center gap-2 text-lg font-semibold'>
								<FaPercentage className='text-primary' />
								60% Owneship
							</span>
						</div>
					</div>

					{/* 2nd column  */}

					<div className='col-span-full lg:col-span-1 rounded-xl p-4 bg-white flex flex-col gap-6'>
						<div className='flex flex-col gap-2 rounded-lg border border-primary px-3 py-5 max-w-sm'>
							<span className='text-xl text-gray-700 font-bold flex justify-between gap-5 flex-col-reverse'>
								Appraisal <IoMdDocument className='text-primary text-6xl' />
							</span>

							<p className='text-md pl-3 bg-gray-100 p-1 rounded-lg text-sm mb-4'>click to view file</p>

							<a
								// download={file1}
								download='file2.pdf'
								href='#'
								className='border border-primary text-gray-700
						hover:text-white hover:bg-primary transition-all py-2 rounded-xl font-bold flex justify-center items-center gap-2'>
								View <FaEye />
							</a>
						</div>
						<div className='flex flex-col gap-2 rounded-lg border border-primary px-3 py-5 max-w-sm'>
							<span className='text-xl text-gray-700 font-bold flex justify-between gap-5 flex-col-reverse'>
								Deed of Ownership <IoMdDocument className='text-primary text-6xl' />
							</span>

							<p className='text-md bg-gray-100 p-1 rounded-lg text-sm mb-4 pl-3'>click to view file</p>

							<a
								href='#'
								download='file.pdf'
								className='border border-primary text-gray-700
						hover:text-white hover:bg-primary transition-all py-2 rounded-xl font-bold flex justify-center items-center gap-2'>
								View <FaEye />
							</a>
						</div>
						<button className='flex items-center justify-center rounded-lg duration-300 transition-all hover:bg-primary px-3 py-5 max-w-sm font-righteous text-white bg-gray-700'>
							Contact Owner
						</button>
					</div>
				</main>
			</div>
		</>
	);
}
