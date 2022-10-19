import { Routes } from "react-router-dom";
import PublicRouter from "./modules/public/public.router";

const Router = () => {
	return <Routes>{PublicRouter()}</Routes>;
};

export default Router;
