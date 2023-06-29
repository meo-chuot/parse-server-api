import express from 'express';
import { ParseServer } from 'parse-server';
import path from 'path';
import http from 'http';

import { emailAdapter } from './app/emails/adapter.js'
import { filesAdapter } from './app/files/adapter.js'
const __dirname = path.resolve();

export const config = {
  databaseURI:
    process.env.DATABASE_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/dev',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.cjs',
  appId: process.env.APP_ID || 'myAppId',
  masterKey: process.env.MASTER_KEY || '',
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',
  masterKeyIps: ['0.0.0.0/0', '::1'],
  restAPIKey: process.env.REST_API_KEY || "REST_API_KEY",
  webhookKey: process.env.WEB_HOOK_KEY || "WEB_HOOK_KEY",
  useMasterKey: true,
  allowClientClassCreation: true,
  allowExpiredAuthDataToken: true,
  mountGraphQL: true,
  graphQLPath: process.env.GRAPHQL_PATH || "/graphql",
  objectIdSize: 36,//uuid
  liveQuery: {
    classNames: ['Posts', 'Comments'],
  },
  filesAdapter: filesAdapter,
  emailAdapter: emailAdapter
};

export const app = express();

if (!process.env.TESTING) {
  const mountPath = process.env.PARSE_MOUNT || '/parse';
  const server = new ParseServer(config);
  await server.start();
  app.use(mountPath, server.app);
}

app.get('/', function (req, res) {
  res.status(200).send('Hello!^_^');
});

app.get('/health', function (req, res) {
  res.status(200).send('Hello!^_^');
});

if (!process.env.TESTING) {
  const port = process.env.PORT || 1337;
  const httpServer = http.createServer(app);
  httpServer.listen(port, function () {
    console.log('parse server running on port ' + port + '.');
  });

  await ParseServer.createLiveQueryServer(httpServer);
}
