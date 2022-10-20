import { Route, Routes } from "react-router-dom";
import Nav from "./modules/public/components/nav";
import A from "./modules/public/pages/a";
import B from "./modules/public/pages/b";
import C from "./modules/public/pages/c";
import Company from "./modules/public/pages/company";
import Contact from "./modules/public/pages/contact";
import LandingPage from "./modules/public/pages/landingPage";
import ROUTES from "./modules/public/public.routes";
const Router = () => {
	return (
		<>
			<Nav />

			<Routes>
				{/* {PublicRouter()} */}

				<Route path={ROUTES.HOME} element={<LandingPage />} />
				<Route path={ROUTES.COMPANY} element={<Company />}>
					<Route path={"a"} element={<A />}>
						<Route path={"b"} element={<B />} />
						<Route path={"c"} element={<C />} />
					</Route>
				</Route>
				<Route path={ROUTES.CONTACT} element={<Contact />} />
				<Route path={"*"} element={<h1>NO Page Here</h1>} />
			</Routes>
		</>
	);
};

export default Router;
