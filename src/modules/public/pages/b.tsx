import { Link, Outlet } from "react-router-dom";

const B = () => {
	return (
		<div className=" max-w-full">
			<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
			<h2>BBBBBBBBB </h2>
			<ul className="flex flex-col mx-auto">
				<Link to={"c"}>c</Link>
			</ul>
			<Outlet />
		</div>
	);
};

export default B;
