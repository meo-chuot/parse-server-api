export class Jobs {
    static async init(): Promise<void> {
        Parse.Cloud.job("test", async () => {
            return;
        });
    }
}
