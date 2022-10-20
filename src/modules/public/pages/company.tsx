import { Link, Outlet } from "react-router-dom";

const Company = () => {
	return (
		<div className=" max-w-full">
			<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
			<h2>Company </h2>
			<ul className="flex flex-col mx-auto">
				<Link to={"a"}>a</Link>
			</ul>
			<Outlet />
		</div>
	);
};

export default Company;
