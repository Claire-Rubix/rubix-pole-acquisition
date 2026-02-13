import { put } from '@vercel/blob';

const BLOB_KEY = 'rubix-acq-v18.json';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;

    if (!data || typeof data !== 'object') {
      return res.status(400).json({ error: 'Invalid data' });
    }

    await put(BLOB_KEY, JSON.stringify(data), {
      access: 'public',
      addRandomSuffix: false,
      contentType: 'application/json',
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Cloud save error:', e);
    return res.status(500).json({ error: 'Save failed' });
  }
}
