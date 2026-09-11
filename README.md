# React + Vite

## Backend API

The `backend/` folder contains a separately deployable Express + TypeScript REST API for managing the portfolio content dynamically. It uses Prisma with SQLite by default so it runs locally without requiring an external database; the Prisma datasource can be switched to PostgreSQL for production.

### Run locally

```bash
cd backend
npm install
copy .env.example .env
npx prisma migrate dev --name init
npm run db:seed
npm run dev
```

The API is available at `http://localhost:5000`.

### API resources

- `GET/PUT /api/v1/profile`
- `GET /api/v1/portfolio` returns the complete portfolio in one request
- `GET/POST/PATCH/DELETE /api/v1/bio`
- `GET/POST/PATCH/DELETE /api/v1/projects`
- `GET/POST/PATCH/DELETE /api/v1/skills`
- `GET/POST/PATCH/DELETE /api/v1/experiences`
- `GET/POST/PATCH/DELETE /api/v1/education`
- `GET/POST/PATCH/DELETE /api/v1/social-links`

All responses use a consistent `{ success, data }` or `{ success: false, error }` envelope. Write endpoints validate payloads with Zod and return structured HTTP errors.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
