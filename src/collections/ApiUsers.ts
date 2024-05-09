import { CollectionConfig } from "payload/types";

export const ApiUsers: CollectionConfig = {
    slug: 'apiUsers',
    admin: {
        useAsTitle: 'name',
    },
    auth: {
        useAPIKey: true,
        disableLocalStrategy: true,
    },
    fields: [
        {
            type: 'text',
            name: 'name',
        }
    ]
}