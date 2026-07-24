# GPS API - Cerere Whitelist IP-uri

**Data**: 2026-07-24  
**API Key (pending activation)**: `833da4fa73ec523a68134e895621f681`  
**Access Network (existent)**: 5.2.247.120

---

## IP-uri pentru Whitelist

### Opțiune 1: GitHub Pages (RECOMANDAT - hosting gratuit)
**Deployment**: https://willhurtlots.github.io/rotakt-harta/

**IP-uri GitHub Pages** (4 IP-uri statice):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Sursa**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain

---

### Opțiune 2: Vercel (alternativă dacă GitHub Pages eșuează)
**Deployment**: https://rotakt-harta.vercel.app (pending creation)

**IP-uri Vercel** (IP-ul EXACT se obține după deploy):
- Vercel folosește **IP-uri dinamice** (load balancing)
- **Soluție**: Vercel oferă **static outbound IP** DOAR pe plan Pro ($20/lună)
- **Alternative FREE**:
  1. Deploy pe GitHub Pages (IP-uri statice de mai sus)
  2. Deploy pe NAS ROTAKT intern (IP fix existent: `5.2.247.120`?)

---

### Opțiune 3: NAS ROTAKT (IP fix existent?)
**Deployment**: http://nas.rotakt.ro/harta/ (sau IP public direct)

**IP fix ROTAKT**:
- Dacă aveți IP public static existent → folosiți-l
- Verificare IP curent: https://api.ipify.org
- **Avantaj**: Zero cost hosting, full control
- **Dezavantaj**: Trebuie web server configurat pe NAS (Nginx/Apache)

---

## Recomandare FINALĂ

**Pentru PRODUCTION imediat**:
1. **GitHub Pages** cu IP-urile statice enumerate mai sus (4 IP-uri)
2. Hosting 100% gratuit, SSL automat, uptime 99.9%
3. Zero configurare server

**Request către gpstracking.ro support**:
```
Vă rugăm să activați API key-ul nostru (833da4fa73ec523a68134e895621f681) pentru următoarele IP-uri GitHub Pages:

185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

Aplicația va fi hostată pe: https://willhurtlots.github.io/rotakt-harta/

Mulțumim!
Contact: office@rotakt.ro
```

---

## FALLBACK dacă GitHub Pages CORS fail

Dacă API-ul GPS blochează requesturi din browser (CORS policy), necesită:
1. **Backend proxy** pe Vercel Serverless Function:
   ```javascript
   // api/gps-proxy.js
   export default async function handler(req, res) {
     const gpsResponse = await fetch('https://gpstracking.ro/api/getVehicleStatus', {
       headers: { 'Authorization': 'Bearer 833da4fa73ec523a68134e895621f681' }
     });
     const data = await gpsResponse.json();
     res.json(data);
   }
   ```
2. **Vercel edge network IP** (dinamic) SAU
3. **Cloudflare Workers** (IP-uri statice: `173.245.48.0/20`, `103.21.244.0/22`, etc.)

**Preferat**: Test direct din browser FÖRST → dacă CORS OK, zero backend necesar.
