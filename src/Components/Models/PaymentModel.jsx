import { useState } from "react";
import TabButton from "../buttons/TabButton";
import { motion } from "framer-motion";

const PaymentModel = ({ closeModel }) => {
	const handleClick = (e) => {
		e.stopPropagation();
	};

	const [activeTab, setActiveTab] = useState("crypto");
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
				exit={{ opacity: 0, scale: 0 }}
				className='bg-white max-w-7xl mx-auto lg:w-[80vw] w-[95vw] h-[90vh] lg:h-[90vh] rounded-xl p-3 shadow-md flex flex-col items-center gap-10'
				onClick={(e) => handleClick(e)}>
				<div className='border border-gray-800 rounded-full overflow-hidden justify-self-center'>
					<TabButton name='crypto' active={activeTab} onclick={changeTab} />
					<TabButton name='peer' active={activeTab} onclick={changeTab} />
				</div>

				<div className='flex-1 w-full'>{activeTab !== "crypto" ? <PeerPayment /> : <CryptoPayment />}</div>
			</motion.div>
		</motion.div>
	);
};

export default PaymentModel;

const CryptoPayment = () => {
	return (
		<div className='flex gap-1 flex-col lg:flex-row h-full'>
			<div className='rounded-xl overflow-hidden max-h-[20rem] lg:max-h-[100%] flex-1'>
				<img src={img1} alt='' className='w-full h-full object-center object-cover' />
			</div>

			<div className='col-span-1 border rounded-xl px-3 py-5 flex-1'>
				<h1 className='text-xl font-righteous text-center'>Payment via Crypto</h1>
			</div>
		</div>
	);
};
const PeerPayment = () => {
	return (
		<div className='flex gap-1 flex-col lg:flex-row h-full'>
			<div className='rounded-xl overflow-hidden max-h-[20rem] lg:max-h-[100%] flex-1'>
				<img src={img2} alt='' className='w-full h-full object-center object-cover' />
			</div>

			<div className='border rounded-xl px-3 py-5 flex-1'>
				<h1 className='text-xl font-righteous text-center'>Payment via Peer</h1>
			</div>
		</div>
	);
};

const img1 =
	"https://img.freepik.com/free-vector/flat-design-cryptocurrency-concept_23-2149166905.jpg?size=626&ext=jpg&ga=GA1.1.2038201854.1686040080&semt=ais";

const img2 =
	"https://img.freepik.com/free-vector/gradient-installment-illustration_23-2149397487.jpg?size=600&ext=jpg&ga=GA1.1.2038201854.1686040080&semt=ais";
