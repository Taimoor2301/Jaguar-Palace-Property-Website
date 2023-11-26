import React from "react";

function TabButton({ name, active, onclick }) {
	return (
		<button
			onClick={() => onclick(name)}
			className={`${
				active === name && "bg-primary text-white"
			} font-righteous md:text-lg hover:text-white hover:bg-primary transition-all duration-500 py-2 px-5`}>
			{name}
		</button>
	);
}

export default TabButton;
