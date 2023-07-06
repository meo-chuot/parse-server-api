export class Func {
    static async init(): Promise<void> {
        Parse.Cloud.define("threadTest", () => {
            return "test";
        });
    }
}
