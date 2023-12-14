import React, { useEffect, useState } from "react";
import ProfileTab from "./Tabs/ProfileTab";
import ListingTab from "./Tabs/ListingTab";
import HistoryTab from "./Tabs/HistoryTab";
import WalletTab from "./Tabs/WalletTab";
import TabButton from "../../Components/buttons/TabButton";

const Profile = () => {
	const [activeTab, setActiveTab] = useState("Profile");
	const [profileImageUrl, setProfileImageUrl] = useState(
		"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
	);

	const [profileImage, setProfileImage] = useState(null);

	useEffect(() => {
		if (profileImage) {
			const url = URL.createObjectURL(profileImage);
			setProfileImageUrl(url);
		}
	}, [profileImage]);
	function changeTab(name) {
		setActiveTab(name);
	}
	return (
		<div className='lg:py-10 py-5'>
			<div className='max-w-7xl mx-auto'>
				<div className='h-[20rem] p-2 relative'>
					<img
						className='w-full h-full object-cover rounded-2xl'
						src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fHww'
					/>

					<div className='aspect-square rounded-full h-[8rem] lg:h-[15rem] absolute lg:top-[50%] bottom-[-4rem] lg:left-[75%] left-[50%] translate-x-[-50%] lg:translate-x-0 border-white border-4 shadow-md overflow-hidden group transition-all duration-500'>
						<img className='w-full h-full object-cover object-center' src={profileImageUrl} alt='' />
						<label
							htmlFor='profilePic'
							className='absolute inset-0 z-[1000] bg-black/30 backdrop-blur-sm invisible group-hover:visible flex justify-center items-center text-white font-righteous text-lg'>
							Update Pictue
						</label>
						<input type='file' className='absolute hidden' id='profilePic' onChange={(e) => setProfileImage(e.target.files[0])} />
					</div>
				</div>

				<div className='bg-white shadow rounded-xl p-2 mt-20 border'>
					<div className='flex justify-center'>
						{buttons.map((button, i) => (
							<TabButton key={i} {...button} active={activeTab} onclick={changeTab} />
						))}
					</div>

					<div className='py-10 px-3'>{buttons.map((b, i) => (b.name === activeTab ? <b.el key={i} /> : null))}</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;

const buttons = [
	{ name: "Profile", el: ProfileTab },
	{ name: "Listing", el: ListingTab },
	{ name: "History", el: HistoryTab },
	{ name: "Wallet", el: WalletTab },
];
