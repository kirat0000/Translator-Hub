const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST;
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;


async function translateText({ text, sourceLang, targetLang }) {
  const response = await fetch(`https://${RAPIDAPI_HOST}/translate`, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Host': RAPIDAPI_HOST,
      'X-RapidAPI-Key': RAPIDAPI_KEY,
    },
    body: new URLSearchParams({
      q: text,
      source: sourceLang,
      target: targetLang,
    }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export { translateText };
