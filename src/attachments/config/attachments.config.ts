import { registerAs } from '@nestjs/config';

export default registerAs('attachment', () => ({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  bucket: process.env.AWS_BUCKET,
  expirationTime: +process.env.PRESIGNED_EXPIRES_IN,
}));