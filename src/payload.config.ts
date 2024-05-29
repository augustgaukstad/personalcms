import { mongooseAdapter } from '@payloadcms/db-mongodb';
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { s3Storage } from '@payloadcms/storage-s3';
import path from 'path';
import { buildConfig } from 'payload/config';
import sharp from 'sharp'
import { fileURLToPath } from 'url';

import { Users } from './collections/Users';
import { ApiUsers } from './collections/ApiUsers';
import { Photographs } from './collections/New Topographics/Photographs';
import { Exhibitions } from './collections/New Topographics/Exhibitions';
import { Photographers } from './collections/New Topographics/Photographers';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, ApiUsers, Photographs, Exhibitions, Photographers],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  plugins: [
    s3Storage({
      collections: {
        photographs: true,
      },
      bucket: process.env.R2_NEWTOPO_BUCKET!,
      config: {
        endpoint: process.env.R2_ENDPOINT!,
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID!,
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
        },
        region: process.env.R2_REGION!,
      },
    }),
  ],
  sharp,
});
