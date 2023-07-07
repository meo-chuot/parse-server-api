import "dotenv/config";
import { getPrivateKey } from "@/helper/helper";

const config = {
    app: {
        appId: process.env.APP_ID || "myAppId",
        appName: process.env.APP_NAME || "Parse Server",
        databaseURI: process.env.DATABASE_URI || process.env.MONGODB_URI || "mongodb://localhost:27017/dev",
        masterKey: process.env.MASTER_KEY || "",
        serverURL: process.env.SERVER_URL || "http://localhost:1337/parse",
        port: process.env.PORT || 4040,
        parseMount: process.env.PARSE_MOUNT || "/parse",
        masterKeyIps: ["0.0.0.0/0", "::1"],
        restAPIKey: process.env.REST_API_KEY || "REST_API_KEY",
        webhookKey: process.env.WEB_HOOK_KEY || "WEB_HOOK_KEY",
        useMasterKey: true,
        allowClientClassCreation: true,
        allowExpiredAuthDataToken: true,
        mountGraphQL: true,
        graphQLPath: process.env.GRAPHQL_PATH || "/graphql",
        objectIdSize: 36, //uuid
        verbose: process.env.PARSE_LOG_VERBOSE || false,
        silent: process.env.PARSE_SILENT || false,
        poolSize: process.env.POOL_SIZE || 5,
        //push: process.env.PUSH || false,
        worker: process.env.WORKERS || 1,
        liveQueryServerOptions: {
            appId: process.env.APP_ID || "myAppId",
            masterKey: process.env.MASTER_KEY || "",
        },
        liveQuery: {
            classNames: [].concat(( process.env.LIVE_QUERY_CLASSES || "").split(',').filter( (klass) => klass && klass.length )),
        },
    },
    smtp: {
        host: process.env.SMTP_HOST || "smtp.forwardemail.net",
        port: process.env.SMTP_PORT || 465,
        secure: process.env.SMTP_SSL || true,
        auth: {
            user: process.env.SMTP_USER || "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
            pass: process.env.SMTP_PASSWORD || "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
        },
        sender: process.env.SMTP_MAIL_FROM || "email@example.com"
    },
    gcp: {
        projectId: process.env.GCP_PROJECT_ID || "GCP_PROJECT_ID",
        credentials: getPrivateKey(process.env.GCP_CREDENTIALS || "GCP_CREDENTIALS"),
        bucket: process.env.GCS_BUCKET || "GCS_BUCKET",
    },
};

export default config;
