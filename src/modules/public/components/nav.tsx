import ROUTES from "../public.routes";

const Nav = () => {
	const navigation = [
		{ name: "Services", href: ROUTES.SERVICE },
		{ name: "Contact", href: ROUTES.CONTACT },
		{ name: "Company", href: ROUTES.COMPANY },
	];
	return (
		<section className="w-screen ">
			<nav className="w-full z-10 fixed top-0 backdrop-blur-lg flex flex-row py-3 items-center transparent bg-gradient-to-l from-blue-300 shadow-md te">
				<a href={ROUTES.HOME} className="mx-6 my-3 items-center">
					<img alt=" Company Logo" className="h-8 w-auto sm:h-10" src="/vite.svg" />
				</a>

				<ul className="mx-8 ml-40 py-3 hidden md:flex flex-row">
					{navigation.map((item, i) => (
						<a className="mx-1 px-6 tex-center text-indigo-600 text-lg font-md" href={`${item.href}`} key={i}>
							{item.name}
						</a>
					))}
				</ul>
			</nav>
		</section>
	);
};

export default Nav;
``;
