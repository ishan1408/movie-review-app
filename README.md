# Guest Visit Scheduling – Backend (Node.js, Express, MongoDB)

A backend system for scheduling guest visits. Built with **Node.js**, **Express**, and **MongoDB (Mongoose)**. Includes validation, CRUD operations, and filtering.

---

## Features
- Create, update, delete, and fetch guest visits
- Validation using **express-validator**
- Stores combined visit date & time (`visitAt`) for better querying
- Filter visits by status, date range, and pagination
- Error handling & structured responses
- Secure setup with Helmet, CORS, and logging (Morgan)

---

## Tech Stack
- **Node.js** – Runtime
- **Express.js** – Web framework
- **MongoDB + Mongoose** – Database & ODM
- **express-validator** – Request validation
- **Helmet, CORS, Morgan** – Security & logging

---

## Installation
### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Setup
```bash
git clone <repo-url> guest-visit-scheduler
cd guest-visit-scheduler
npm install
cp .env.example .env
# Edit .env with your MongoDB connection string
npm run dev
```

Server will start at: `[http://localhost:4000](https://guest-visit-scheduler.onrender.com)`

---

## API Endpoints

### Health Check
```
GET /health
```
Response:
```json
{ "status": "ok" }
```

### Create a Visit
```
POST /api/visits
```
Body:
```json
{
  "guestName": "Ishan Jain",
  "visitDate": "2025-08-25",
  "visitTime": "15:30",
  "countryCode": "+91",
  "phoneNumber": "7728919575",
  "email": "ishan@example.com",
  "address": "Poornima College Road, Jaipur",
  "aadhaar": "123412341234",
  "notes": "Bring visitor badge"
}
```

### List Visits (with filters & pagination)
```
GET /api/visits?status=scheduled&from=2025-08-20&to=2025-08-31&page=1&limit=10
```

### Get Visit by ID
```
GET /api/visits/:id
```

### Update Visit
```
PUT /api/visits/:id
```
Body:
```json
{ "status": "completed" }
```

### Delete Visit
```
DELETE /api/visits/:id
```

---

## Validation Rules
- **Required**: `guestName`, `visitDate (YYYY-MM-DD)`, `visitTime (HH:mm 24h)`, `countryCode`, `phoneNumber (7-15 digits)`, `email`
- **Optional**: `address (max 200 chars)`, `aadhaar (12 digits)`, `notes (max 500 chars)`
- `visitAt` auto-calculated from `visitDate + visitTime`

---

## Project Structure
```
guest-visit-scheduler/
├─ .env.example
├─ package.json
├─ README.md
├─ src/
│  ├─ server.js       # Express app + server setup
│  ├─ config/
│  │  └─ db.js        # MongoDB connection
│  ├─ controllers/
│  │  └─ visitController.js
│  ├─ models/
│  │  └─ Visit.js
│  ├─ routes/
│  │  └─ visitRoutes.js
│  └─ validators/
│     ├─ visitValidators.js
│     └─ handleValidation.js
```

---

## Scripts
- `npm run dev` – Start with Nodemon (development)
- `npm start` – Start server (production)
- `npm run lint` – Run ESLint

---

## License
This project is licensed under the **MIT License**.
