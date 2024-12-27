export async function shortenUrl(longUrl) {
  const response = await fetch('https://api.tinyurl.com/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer zo5acULSVlOh992G6B1CSFj84UwmWXbPd47cBtr78icgBIGD5Mbj5WrxiMXZ', // Remplacez par votre clé API
    },
    body: JSON.stringify({ url: longUrl }),
  });

  if (!response.ok) {
    throw new Error('Failed to shorten URL');
  }

  const data = await response.json();

  console.log(data.data.tiny_url);
  return data.data.tiny_url; // Adaptez en fonction de l'API utilisée
}
