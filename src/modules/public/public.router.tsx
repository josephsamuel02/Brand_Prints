import React, { ReactElement } from "react";
import LandingPage from "./pages/landingPage";
import RoutesWrapper from "../../routes.wrapper";
import PublicLoader from "./public.loader";
import ROUTES from "./public.routes";

const injectLoader = (path: string, component: ReactElement) => RoutesWrapper(path, component, <PublicLoader />);

const PublicRouter = () => {
	return <>{injectLoader(ROUTES.HOME, <LandingPage />)}</>;
};

export default PublicRouter;
