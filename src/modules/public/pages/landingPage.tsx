import { Outlet } from "react-router-dom";
import LandingPageDashBoard from "../components/landing.page.dashBoard";
import Features from "./features";
import Products from "./products";
const LandingPage = () => {
	return (
		<>
			<LandingPageDashBoard />
			<Products />
			<Features />
		</>
	);
};

export default LandingPage;
