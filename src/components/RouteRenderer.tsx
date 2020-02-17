import reduce from "lodash/reduce";

interface PageConf {
    forwardTo?: string;
    forwardParams?: {};
    exact?: boolean;
}

type PagesConf = {
    [key: string]: PageConf;
};

const getNode = (route, config: PagesConf): PageConf => {
    const routeName = route.name;
    return reduce(
        config,
        (res, routeConf, key) => {
            if (routeName === key) {
                Object.assign(res, routeConf);
            }
            return res;
        },
        {}
    );
};

const RouteRenderer = ({ config, render, routerStore }) => {
    if (!config || !render) {
        return null;
    }
    const nodeToRender = getNode(routerStore.route, config);
    if (!nodeToRender) {
        return null;
    }
    if (nodeToRender.forwardTo) {
        routerStore.navigate(
            nodeToRender.forwardTo,
            nodeToRender.forwardParams,
            { replace: true }
        );
        return null;
    }
    return render(nodeToRender) || null;
};
export default RouteRenderer;
