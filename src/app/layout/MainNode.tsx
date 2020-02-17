import Home from "app/home/Home";
import User from "app/user/User";
import RouteRenderer from "components/RouteRenderer";
import React from "react";
import { routeNode } from "react-mobx-router5";
import Layout from "./Layout";

class MainNode extends React.Component<any> {
    render() {
        const { routerStore, route } = this.props;
        const config = {
            home: { Node: Home },
            user: { Node: User }
        };
        return (
            <RouteRenderer
                config={config}
                routerStore={routerStore}
                render={({ Node, test }) => {
                    return (
                        <Layout>
                            <Node route={route} />
                        </Layout>
                    );
                }}
            />
        );
    }
}

export default routeNode("")(MainNode);
