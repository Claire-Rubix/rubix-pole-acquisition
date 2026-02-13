import { list } from '@vercel/blob';

const BLOB_KEY = 'rubix-acq-v18.json';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { blobs } = await list({ prefix: BLOB_KEY, limit: 1 });

    if (!blobs.length) {
      return res.status(200).json({ data: null });
    }

    const response = await fetch(blobs[0].url);
    if (!response.ok) {
      return res.status(200).json({ data: null });
    }

    const data = await response.json();
    return res.status(200).json({ data });
  } catch (e) {
    console.error('Cloud load error:', e);
    return res.status(200).json({ data: null });
  }
}
