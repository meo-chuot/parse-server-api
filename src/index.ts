import express from 'express';
import config from '@/config';
import { graphqlServer, parseServer } from '@/parse/parse-server';
import { displayEnvironment, handleErrors } from '@/parse/express-utils';
import { Func, Jobs, Webhooks, EventHook } from '@/cloud/main';

const start = async () => {
    const app = express();
    await parseServer.start();
    app.use(config.app.parseMount, parseServer.app);

    graphqlServer.applyGraphQL(app);

    await Func.init();
    await Jobs.init();
    await EventHook.init();
    await Webhooks.init(app);

    app.listen(config.app.port, displayEnvironment).on('error', handleErrors);
};

start();
