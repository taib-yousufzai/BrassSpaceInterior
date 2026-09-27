// Script to trigger IndexNow API for all BrassSpace URLs directly to Bing & Yandex

const HOST = 'brassspace.com';
const KEY = 'b8860b2026indexnowkeybrassspace';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/about`,
  `https://${HOST}/portfolio`,
  `https://${HOST}/blog`,
  `https://${HOST}/services/residential-interiors`,
  `https://${HOST}/services/commercial-interiors`,
  `https://${HOST}/services/modular-kitchens`,
  `https://${HOST}/services/wardrobes-storage`,
  `https://${HOST}/services/renovation-execution`,
  `https://${HOST}/html-sitemap`,
  `https://${HOST}/book-site-visit`,
  `https://${HOST}/get-quote`,
  `https://${HOST}/contact`,
  `https://${HOST}/faq`,
];

async function submitIndexNow() {
  console.log(`Submitting ${URLS.length} URLs to IndexNow (Bing/Yandex)...`);
  
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS,
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    console.log(`HTTP Status: ${res.status}`);
    const text = await res.text();
    console.log(`Response: ${text || (res.status === 200 || res.status === 202 ? 'Success (Accepted by Bing/IndexNow)' : 'No response text')}`);
  } catch (err) {
    console.error('IndexNow ping error:', err.message);
  }
}

submitIndexNow();
