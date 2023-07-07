export class EventHook {
    static async init(): Promise<void> {
        Parse.Cloud.beforeSave("Test", () => {

        });
    }
}
