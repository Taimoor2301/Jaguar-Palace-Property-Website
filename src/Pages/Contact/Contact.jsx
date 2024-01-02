import React from "react";

export default function Contact() {
	return (
		<div className=''>
			<div className='max-w-7xl mx-auto px-5 py-10 lg:px-0'>
				<h1 className='text-5xl font-righteous py-10'>Contact Us</h1>

				<div className='text-lg tracking-wide'>
					<Heading>Get in Touch with Jaguar Palace</Heading>
					<Paragraph>
						Welcome to the Jaguar Palace Contact Page – the gateway to seamless communication. Whether you have questions, feedback, or you're ready
						to embark on your real estate journey, we're here to listen and assist. Your connection with us is the first step toward turning your
						property aspirations into reality.
					</Paragraph>
				</div>

				<Heading>Contact Information:</Heading>

				<div className='flex flex-col gap-3 pl-5'>
					<h3 className='font-righteous'>Address:</h3>
					<span>Jaguar Palace Headquarters Address</span>

					<span>Islamabad, Pakistan, 11100</span>

					<h3 className='font-righteous'>Phone:</h3>
					<span>+923-000-333-44</span>
					<h3 className='font-righteous'>Email:</h3>
					<span>email@jaguarpalace.com</span>
				</div>

				<Heading>Customer Support:</Heading>

				<div className='flex flex-col gap-3 pl-5'>
					<h3 className='font-righteous'>Customer Support Email:</h3>
					<span>customersupport@jaguarpalace.com</span>

					<h3 className='font-righteous'>Customer Support Phone:</h3>
					<span>+923-000-333-44</span>
				</div>

				<Heading>Visit Our Office:</Heading>

				<Paragraph>
					For a more personal experience, you're welcome to visit our office. Our doors are always open, and our team is ready to greet you and
					discuss your real estate needs.
				</Paragraph>

				<Heading>Your Feedback Matters:</Heading>
				<div className='flex flex-col gap-3 pl-5'>
					<h3 className='font-righteous'>Feedback Email:</h3>
					<span>feedback@jaguarpalace.com</span>
				</div>

				<Heading>Thank You for Choosing Jaguar Palace</Heading>
				<Paragraph>
					Your journey with Jaguar Palace starts here. Whether you're buying, selling, or simply exploring the possibilities, we're excited to be a
					part of your real estate adventure. Contact us today, and let's turn your dreams into addresses.
				</Paragraph>
			</div>
		</div>
	);
}

const Heading = ({ children }) => {
	return <h2 className='font-righteous text-gray-800 my-5 text-2xl'>{children}</h2>;
};

const Paragraph = ({ children }) => {
	return <p>{children}</p>;
};
