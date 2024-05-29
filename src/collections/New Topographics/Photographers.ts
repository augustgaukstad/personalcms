import { dashboardGroups } from "@/payload-utils/dashboardGroups";
import { CollectionConfig } from "payload/types";

export const Photographers: CollectionConfig = {
    slug: 'photographers',
    admin: {
        group: dashboardGroups.newTopo,
        useAsTitle: 'name',
        defaultColumns: ['name']
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'about',
            type: 'textarea',
        },
        {
            name: 'links',
            type: 'array',
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'linkTitle',
                            type: 'text'
                        },
                        {
                            name: 'link',
                            type: 'text'
                        }
                    ]
                }
                
            ],
            admin: {
                components: {
                    RowLabel: ({data, index, path}) => {
                        return data.linkTitle;
                    }
                }
            }
        }
    ]
}