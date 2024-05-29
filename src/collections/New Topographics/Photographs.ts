import { dashboardGroups } from '@/payload-utils/dashboardGroups';
import { CollectionConfig } from 'payload/types';

export const Photographs: CollectionConfig = {
  slug: 'photographs',
  upload: true,
  admin: {
    group: dashboardGroups.newTopo,
  },
  fields: [
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'year',
      type: 'number',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'exhibition',
          type: 'relationship',
          relationTo: 'exhibitions',
          hasMany: false,
          admin: {
            allowCreate: false,
          },
        },
        {
          name: 'photographer',
          type: 'relationship',
          relationTo: 'photographers',
          hasMany: false,
          admin: {
            allowCreate: false,
          },
        },
      ],
    },
    {
      name: 'streetview',
      type: 'text',
    },
    {
      name: 'hero',
      type: 'checkbox',
    },
  ],
};
