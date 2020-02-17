import { createRouter } from "router5";
import loggerPlugin from "router5/plugins/logger";
import browserPlugin from "router5/plugins/browser";
import { mobxPlugin } from "mobx-router5";
import routes from "./routes";
import { routerStore } from "../stores/stores";

export default function configureRouter(useLoggerPlugin = false) {
    const router = createRouter(routes, { defaultRoute: "home" });
    router.usePlugin(mobxPlugin(routerStore)); // Important: pass the store to the plugin!
    router.usePlugin(browserPlugin({ useHash: false }));

    if (useLoggerPlugin) {
        router.usePlugin(loggerPlugin);
    }
    return router;
}
