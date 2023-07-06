import config from "../config";
import ParseServer, { ParseGraphQLServer } from "parse-server";
import logger from "./logger";
import { schemas } from "@/schema";
import { EmailAdapter } from '@/parse/email-adapter'
import { FileAdapter } from '@/parse/file-adapter'

const parseServer = new ParseServer({
    ...config.app,
    cluster: config.app.worker,
    logLevel: (config.app.verbose || false) ? undefined : "error",
    loggerAdapter: logger,
    filesAdapter: FileAdapter,
    emailAdapter: EmailAdapter,
    schema: {
        strict: true,
        definitions: schemas
    }
});

const graphqlServer = new ParseGraphQLServer(parseServer, { graphQLPath: config.app.graphQLPath });
export { parseServer, graphqlServer };
