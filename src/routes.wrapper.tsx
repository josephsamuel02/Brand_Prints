import { ReactElement, Suspense } from "react";
import { Route } from "react-router-dom";

const getSingleRoute = (path: string, component: ReactElement, loader: ReactElement, id?: number) => (
	<Route key={id} path={path} element={<Suspense fallback={loader}>{component}</Suspense>} />
);

const RoutesWrapper = (
	path: string,
	component: ReactElement,
	loader: ReactElement,
	subComponent?: Array<[path: string, component: ReactElement, loader: ReactElement, subComponent?: []]>
) => {
	return <Route path={path} element={<Suspense fallback={loader}>{component}</Suspense>}></Route>;

	//return getSingleRoute(path, loader, component);
};

export default RoutesWrapper;
