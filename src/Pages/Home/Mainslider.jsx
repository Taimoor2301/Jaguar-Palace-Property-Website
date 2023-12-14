import { register } from "swiper/element/bundle";

import image1 from "../../assets/images/mainimg1.jpg";
import image2 from "../../assets/images/mainimg2.jpg";
import image3 from "../../assets/images/mainimg3.jpg";
import { Link } from "react-router-dom";
import "./slider.css";

register();

const Mainslider = () => {
	return (
		<div className='relative max-w-[1530px] mx-auto'>
			<swiper-container
				slides-per-view='1'
				speed='500'
				loop='true'
				autoPlay='true'>
				{images.map((i) => (
					<Slide
						key={i}
						img={i}
					/>
				))}
			</swiper-container>
		</div>
	);
};

export default Mainslider;

const images = [image1, image2, image3];
const Slide = ({ img }) => {
	return (
		<swiper-slide>
			<div className='max-h-[80vh] relative'>
				<img
					src={img}
					className='object-cover object-center'
					alt='image'
				/>
				<div className='absolute inset-0 bg-black/40  flex justify-center items-center'>
					<div className='flex flex-col md:gap-3 gap-1 items-center fadein'>
						<h2 className='md:text-xl text-sm font-righteous font-thin tracking-wide text-white'>Real Estate Excellence</h2>
						<h1 className='text-2xl md:text-7xl font-bold text-white tracking-wide font-righteous'>
							We are <span className='text-primary'>awesome</span>
						</h1>
						<Link
							to={"/features"}
							className='flex justify-center items-center text-sm md:text-2xl text-white bg-primary hover:scale-105 opacity-90 hover:opacity-100 transition-all duration-150 font-medium md:py-2.5 py-1 md:px-10 px-3'>
							See all features
						</Link>
					</div>
				</div>
			</div>
		</swiper-slide>
	);
};
