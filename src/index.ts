import express from "express";
import config from "@/config";
import { graphqlServer, parseServer } from "@/parse/parse-server";
import { displayEnvironment, filesCacheControl, handleErrors, requireHTTPS } from "@/parse/express-utils";
import { Func, Jobs, Webhooks, EventHook } from "@/cloud/main";

const start = () => {
    const app = express();

    app.use(requireHTTPS);
    app.use(filesCacheControl);
    app.use(config.app.parseMount, parseServer.app);

    graphqlServer.applyGraphQL(app);

    Func.init();
    Jobs.init();
    EventHook.init();
    Webhooks.init(app);

    app.listen(config.app.port, displayEnvironment).on("error", handleErrors);
};

start();
