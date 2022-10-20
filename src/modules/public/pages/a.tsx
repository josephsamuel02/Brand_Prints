import { Link, Outlet } from "react-router-dom";

const A = () => {
	return (
		<div className=" max-w-full bg-red-600">
			<br /> <br /> <br /> <br /> <br /> <br /> <br />
			<br /> <br /> <br /> <br /> <br />
			<br /> <br /> <br /> <br /> <br /> <br />
			<h2 className="flex flex-col mx-auto">AAAAAAAA </h2>
			<ul className="flex flex-col mx-auto">
				<Link to={"b"}>b</Link>
			</ul>
			<Outlet />
		</div>
	);
};

export default A;
