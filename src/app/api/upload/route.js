//src/app/api/upload/route.js
import { NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import mime from 'mime-types';

const s3 = new S3Client({
  region: 'ap-southeast-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');
    const folder = formData.get('folder') || 'articles';

    const buffer = Buffer.from(await file.arrayBuffer());
    // Use original filename instead of UUID
    const originalFileName = file.name;
    // Sanitize filename to prevent issues (remove special characters except dots and dashes)
    const sanitizedFileName = originalFileName.replace(/[^a-zA-Z0-9.-]/g, '_');
    const fileName = `${folder}/${sanitizedFileName}`;

    await s3.send(new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileName,
        Body: buffer,
        ContentType: file.type,
      }));
      

      const url = `https://s3.ap-southeast-1.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${fileName}`;
    return NextResponse.json({ url }, { status: 200 });
  } catch (err) {
    console.error('Upload failed:', err);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
