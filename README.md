# Portfolio — Dual Mode (Game Dev ↔ Backend Dev)

A full-stack portfolio with a React + Tailwind frontend and an ASP.NET Core Web API backend.

## Project Structure

```
portfolio/
├── portfolio-frontend/     # React + Tailwind + Vite
│   ├── src/
│   │   ├── components/     # Navbar, Hero, Projects, Sections, Contact, Footer
│   │   ├── context/        # ModeContext (Game / Backend state)
│   │   ├── data/           # projects.js, skills.js
│   │   ├── hooks/          # useContactForm.js
│   │   └── styles/         # index.css (Tailwind)
│   ├── index.html
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── portfolio-api/          # ASP.NET Core Web API (.NET 8)
    ├── Controllers/        # ContactController.cs
    ├── Models/             # ContactMessage.cs, ApiResponse.cs
    ├── Services/           # IContactService.cs, ContactService.cs
    ├── Data/               # AppDbContext.cs
    └── Program.cs
```

---

## Frontend Setup

```bash
cd portfolio-frontend
npm install

# Copy env file and set your API URL
cp .env.example .env.local

npm run dev        # starts on http://localhost:5173
npm run build      # production build → dist/
```

### Personalise it
- Replace **"Alex Mercer"** in `Navbar.jsx` and `Footer.jsx`
- Edit `src/data/projects.js` with your real projects and GitHub links
- Edit `src/data/skills.js` with your actual skills
- Add a real profile photo if desired

---

## Backend Setup

### Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/download)

```bash
cd portfolio-api
dotnet restore
dotnet run          # starts on http://localhost:5000
```

The database (`portfolio.db`) is created automatically on first run via `EnsureCreated()`.

### Swagger UI
Visit `http://localhost:5000/swagger` to explore and test the API.

### Switch to SQL Server (production)
1. Add `Microsoft.EntityFrameworkCore.SqlServer` package
2. In `Program.cs` swap `UseSqlite` → `UseSqlServer`
3. Update connection string in `appsettings.json`

---

## API Endpoints

| Method | Route            | Description              |
|--------|-----------------|--------------------------|
| POST   | /api/contact     | Submit a contact message |
| GET    | /api/contact     | List all messages (admin)|

### POST /api/contact — request body
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "message": "Hi, I'd love to work with you!"
}
```

---

## Deployment

### Frontend → Vercel
```bash
cd portfolio-frontend
npm run build
# Push to GitHub and connect repo to Vercel
# Set VITE_API_URL env var to your Render API URL
```

### Backend → Render
1. Push `portfolio-api/` to a GitHub repo
2. New Web Service → Docker or .NET build pack
3. Set environment: `ASPNETCORE_ENVIRONMENT=Production`
4. Update `appsettings.json` AllowedOrigins with your Vercel URL

---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React 18, Tailwind CSS 3, Vite 5    |
| Backend    | ASP.NET Core 8, EF Core 8, SQLite   |
| Deployment | Vercel (FE), Render or Azure (API)  |
| Dev DB     | SQLite (zero config)                |
| Prod DB    | SQL Server or PostgreSQL            |
