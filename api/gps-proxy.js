// Vercel Serverless Function - GPS API Proxy (bypass CORS)

export default async function handler(req, res) {
  // Enable CORS for GitHub Pages origin
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (sau specific GitHub Pages)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Nexus GPS API request
    const GPS_API_KEY = '833da4fa73ec523a68134e895621f681';
    const url = 'https://www.gpstracking.ro/api';

    const formData = new URLSearchParams();
    formData.append('getVehicleStatus', GPS_API_KEY);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error(`GPS API error: ${response.status}`);
    }

    const vehicles = await response.json();

    // Return data with CORS headers
    res.status(200).json({
      success: true,
      count: vehicles.length,
      vehicles: vehicles,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('GPS Proxy error:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
}
