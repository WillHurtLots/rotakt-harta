# GPS Tracking API - Cerere Documentație Completă

**Data**: 2026-07-24  
**API Key**: `833da4fa73ec523a68134e895621f681`  
**Access Network**: 5.2.247.120

---

## Cerere către gpstracking.ro Support

**Subject**: Documentație API completă pentru integrare hartă live tracking

**Body**:

Bună ziua,

Avem activ un cont Nexus GPS Tracking și dorim să integrăm poziția live a vehiculelor într-o hartă interactivă (Leaflet.js) pentru dispatch dinamic.

Am citit documentația de pe https://www.gpstracking.ro/api, DAR lipsesc detalii critice pentru implementare:

### 1. **Authentication**
- API Key-ul nostru (`833da4fa73ec523a68134e895621f681`) se trimite în:
  - Header `Authorization: Bearer KEY`?
  - Query param `?api_key=KEY`?
  - Header custom `X-API-Key: KEY`?

### 2. **Endpoint exact pentru poziții curente**
Documentația menționează `getVehicleStatus`, DAR:
- Care e URL-ul complet? (ex: `https://gpstracking.ro/api/v1/vehicles/status`)
- HTTP method? (GET/POST)
- Parametri necesari? (device IDs, format răspuns)

### 3. **Response structure**
Aveți un exemplu JSON response pentru `getVehicleStatus`? Avem nevoie de:
```json
{
  "vehicles": [
    {
      "id": 123,
      "name": "Dacia Duster VL-01-ABC",
      "lat": 45.1071,
      "lon": 24.3697,
      "speed": 45,
      "heading": 180,
      "timestamp": "2026-07-24T14:30:00Z",
      "status": "moving"
    }
  ]
}
```

### 4. **Rate limits**
Documentația zice "1 request/30s". Dacă avem 5 vehicule:
- Facem 1 request pentru toate 5 vehicule simultan?
- Sau 5 request-uri separate (= 5×30s = 2.5 min total)?

### 5. **Auto-refresh interval recomandat**
Pentru hartă live tracking cu refresh automat, ce interval recomandați?
- 30s (limită API)?
- 60s (conservare rate limit)?
- 2 min (battery-friendly)?

---

## Use Case
Integrare în dashboard intern ROTAKT pentru:
- Dispatch dinamic (agent vede care mașină e mai aproape de client)
- ETA real-time pentru clienți
- Optimizare rute pe baza poziției curente

**Deadline**: Preferabil 24-48h pentru a finaliza dezvoltarea.

Mulțumim!

**Contact**: office@rotakt.ro  
**Telefon**: 0350 226 000
