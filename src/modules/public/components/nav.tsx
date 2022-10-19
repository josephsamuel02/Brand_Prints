import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<section className="w-screen ">
			<nav className=" w-full mx-auto flex flex-row py-2  bg-purple-600">
				<img src="/vite.svg" alt="" className="w-14 h-14 mx-4 ml-8" />
				<div className="mx-auto m-0  flex items-center flex-row flex-2/3">
					<Link to={"#"} className="mx-auto px-7 py-4 space-x-1.5 text-white font-light text-lg ">
						Home
					</Link>
					<Link to={"#"} className="mx-auto px-7 py-4 space-x-1.5 text-white font-light text-lg ">
						Products
					</Link>
					<Link to={"#"} className="mx-auto px-7 py-4 space-x-1.5 text-white font-light text-lg  ">
						contact
					</Link>
				</div>
			</nav>
		</section>
	);
};

export default Nav;
``;
