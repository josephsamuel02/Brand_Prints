import ROUTES from "../public.routes";

const Nav = () => {
	const navigation = [
		{ name: "Products", href: ROUTES.PRODUCT },
		{ name: "Features", href: ROUTES.FEATURES },
		{ name: "Contact", href: ROUTES.CONTACT },
		{ name: "Company", href: ROUTES.COMPANY },
	];
	return (
		<section className="w-screen ">
			<nav className="w-full z-10 fixed top-0   flex flex-row py-3 items-center bg-blue-200 bg-gradient-to-r from-white shadow-md te">
				<a href={ROUTES.HOME} className="mx-6 my-3 items-center">
					<img alt=" Company Logo" className="h-8 w-auto sm:h-10" src="/vite.svg" />
				</a>

				<ul className="mx-8 py-3 hidden md:flex flex-row">
					{navigation.map((item, i) => (
						<a className="mx-1 px-6 tex-center text-blue-600 text-lg" href={`${item.href}`} key={i}>
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
