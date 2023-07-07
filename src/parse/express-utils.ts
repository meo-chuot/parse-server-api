import config from "../config";
import logger from "./logger";

const handleErrors = (err: Error): void => {
    logger.error(`💥 ${err}`);
};

const displayEnvironment = (): void => {
    logger.info("📡 Started Parse Server at " + config.app.serverURL);
    logger.info("📡 Started Parse GraphQL at " + config.app.graphQLPath);
};

export { displayEnvironment, handleErrors };
