import { useState } from "react";
import TabButton from "../buttons/TabButton";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const PaymentModel = ({ closeModel }) => {
	const [activeTab, setActiveTab] = useState("Card");
	const changeTab = (name) => {
		setActiveTab(name);
	};

	return (
		<motion.div
			className='bg-black/50 backdrop-blur-sm fixed w-screen h-screen left-0 top-0 grid place-content-center z-[99999]'
			onClick={() => closeModel(false)}>
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.3 }}
				exit={{ opacity: 0, scale: 0 }}
				className='bg-white md:max-w-xl mx-auto w-[90vw]  h-[90vh] rounded-xl p-3 shadow-md flex flex-col items-center gap-10'
				onClick={(e) => e.stopPropagation()}>
				<div className='flex justify-center'>
					<div className='border border-gray-800 rounded-full overflow-hidden justify-self-center'>
						<TabButton
							name='Crypto'
							active={activeTab}
							onclick={changeTab}
						/>
						<TabButton
							name='Card'
							active={activeTab}
							onclick={changeTab}
						/>
					</div>
				</div>

				<div className='flex-1 w-full'>{activeTab !== "Crypto" ? <FiatPayment /> : <CryptoPayment />}</div>
			</motion.div>
		</motion.div>
	);
};

export default PaymentModel;

const CryptoPayment = () => {
	return (
		<div className=''>
			<div className='col-span-1 border rounded-xl px-3 py-5 flex-1'>
				<h1 className='text-xl font-righteous text-center'>Payment via Crypto</h1>
			</div>
		</div>
	);
};
const FiatPayment = () => {
	return (
		<div className='flex flex-col gap-2'>
			<h1 className='col-span-full text-md font-poppins font-medium md:pt-4 pb-4 md:pb-10 text-xl text-center font-righteous '>Payment via Crad</h1>

			<div className='flex flex-col col-span-full text-sm pb-5'>
				<span className='flex gap-2 items-center font-medium'>
					<FaArrowRight className='text-lg text-purple-500' /> Credit or Debit Card
				</span>
			</div>

			<div className='flex flex-col gap-0.5 col-span-full md:col-span-1'>
				<input
					type='text'
					className='border p-2 rounded-lg focus:outline-purple-500'
					placeholder='full name'
				/>
				<label className='text-sm font-poppins text-gray-600 font-medium'>Full Name</label>
			</div>
			<div className='flex flex-col gap-0.5 col-span-full md:col-span-1'>
				<input
					type='number'
					className='border p-2 rounded-lg focus:outline-purple-500'
					placeholder='card number'
				/>
				<label className='text-sm font-poppins text-gray-600 font-medium'>Card Number</label>
			</div>
			<div className='flex flex-col gap-0.5 col-span-full md:col-span-1'>
				<input
					type='text'
					className='border p-2 rounded-lg focus:outline-purple-500'
					placeholder='CVC'
				/>
				<label className='text-sm font-poppins text-gray-600 font-medium'>CVC</label>
			</div>
			<div className='flex flex-col gap-0.5 col-span-full md:col-span-1'>
				<input
					type='text'
					className='border p-2 rounded-lg focus:outline-purple-500'
					placeholder='MM/YY'
				/>
				<label className='text-sm font-poppins text-gray-600 font-medium'>Card Expiration</label>
			</div>

			<div className='w-full flex justify-center'>
				<button className='flex gap-2 items-center group text-gray-700 hover:text-white font-poppins font-medium bg-primary rounded-lg px-4 py-2'>
					Continue <FaArrowRight className='group-hover:translate-x-2 transition-all duration-300 -rotate-90 group-hover:rotate-0' />
				</button>
			</div>
		</div>
	);
};
