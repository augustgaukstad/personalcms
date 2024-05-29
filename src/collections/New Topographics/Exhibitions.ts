import { dashboardGroups } from "@/payload-utils/dashboardGroups";
import { CollectionConfig, FieldHook } from "payload/types";
import slugify from "slugify";

const generateSlug: FieldHook = async ({value, data}) => {
    const slug = slugify(data?.title, {
        lower: true,
        
    }) ?? value;
    console.log(slug);
    return slug;
}

export const Exhibitions: CollectionConfig = {
    slug: 'exhibitions',
    admin: {
        group: dashboardGroups.newTopo,
        useAsTitle: 'title',
        defaultColumns: ['title']
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                },
                {
                    name: 'slug',
                    type: 'text',
                    hooks: {
                        beforeChange: [generateSlug]
                    },
                    admin: {
                        readOnly: true,
                    }
                }
            ]
        },
        {
            name: 'introText',
            type: 'textarea',
        },
        {
            name: 'thumbnail',
            type: 'upload',
            relationTo: 'photographs'
        },
        {
            name: 'photos',
            type: 'array',
            fields: [
                {
                    name: 'photo',
                    type: 'relationship',
                    relationTo: 'photographs',
                    hasMany: false,
                }
            ]
        }
        

    ]
}