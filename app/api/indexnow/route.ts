import { NextResponse } from 'next/server';
import { citySlugs } from '@/app/config/locations';

export async function POST() {
  const host = "www.reddoorpizza.com.au";
  const key = "43585896689a4413bd93ba9a75fba2a0";
  const keyLocation = `https://${host}/${key}.txt`;

  // Map the static routes
  const staticUrls = [
    `https://${host}/`,
    `https://${host}/menu`,
    `https://${host}/stockists`,
    `https://${host}/contact`,
  ];

  // Map the programmatic location routes
  const dynamicUrls = citySlugs.map(slug => `https://${host}/locations/${slug}`);

  const urlList = [...staticUrls, ...dynamicUrls];

  const payload = {
    host,
    key,
    keyLocation,
    urlList,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: "URLs submitted successfully to IndexNow.", urlList }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, message: `IndexNow API responded with status: ${response.status}` }, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to submit to IndexNow API", error }, { status: 500 });
  }
}
