import config from "../../../src/config";
import Parse from "parse/node";

Parse.User.enableUnsafeCurrentUser();
Parse.initialize(config.app.appId, config.app.masterKey);
Parse.serverURL = config.app.serverURL;

export { Parse };
