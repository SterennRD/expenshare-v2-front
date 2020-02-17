import React from "react";
import { routeNode } from "react-mobx-router5";
import User from "./User";
import RouteRenderer from "components/RouteRenderer";

function UserNode(props) {
    const { route, routerStore } = props;
    return (
        <RouteRenderer
            config={{
                user: { PageComponent: User }
            }}
            routerStore={routerStore}
            render={({ PageComponent }) => {
                return <PageComponent route={route} />;
            }}
        />
    );
}

export default routeNode("user")(UserNode);
