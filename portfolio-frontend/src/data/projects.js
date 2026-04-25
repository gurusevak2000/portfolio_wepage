export const backendProjects = [
  {
    id: 'taskflow',
    title: 'TaskFlow API',
    description:
      'RESTful task management API with JWT authentication, role-based access control, and real-time webhook notifications.',
    stack: ['ASP.NET Core', 'SQL Server', 'JWT', 'EF Core'],
    codeUrl: 'https://github.com/yourusername/taskflow-api',
    detailsUrl: '#',
  },
  {
    id: 'inventory',
    title: 'Inventory Service',
    description:
      'Microservice for inventory management with event-driven stock updates, low-stock alerts, and reporting endpoints.',
    stack: ['ASP.NET Core', 'EF Core', 'REST', 'SQLite'],
    codeUrl: 'https://github.com/yourusername/inventory-service',
    detailsUrl: '#',
  },
  {
    id: 'authgateway',
    title: 'Auth Gateway',
    description:
      'Centralized authentication service with OAuth2 support, refresh token rotation, device sessions, and audit logging.',
    stack: ['OAuth2', 'SQL Server', 'Middleware', 'ASP.NET'],
    codeUrl: 'https://github.com/yourusername/auth-gateway',
    detailsUrl: '#',
  },
]

export const gameProjects = [
  {
    id: 'netarena',
    title: 'NetArena',
    description:
      'Real-time multiplayer top-down arena built with FishNet. Features custom lag compensation and authoritative server movement.',
    stack: ['Unity', 'FishNet', 'Multiplayer', 'C#'],
    demoUrl: '#',
    codeUrl: 'https://github.com/yourusername/netarena',
    placeholderColor: 'from-purple-950 to-indigo-950',
  },
  {
    id: 'dungeon-ai',
    title: 'Dungeon AI',
    description:
      'Procedural dungeon crawler with behaviour-tree enemy AI — patrol, chase, flee, and group coordination states.',
    stack: ['Unity', 'AI', 'Behaviour Trees', 'C#'],
    demoUrl: '#',
    codeUrl: 'https://github.com/yourusername/dungeon-ai',
    placeholderColor: 'from-emerald-950 to-teal-950',
  },
  {
    id: 'syncrun',
    title: 'SyncRun',
    description:
      '2-player co-op platformer with networked physics sync, shared checkpoints, and split-screen fallback mode.',
    stack: ['Unity', 'Multiplayer', 'Physics', 'FishNet'],
    demoUrl: '#',
    codeUrl: 'https://github.com/yourusername/syncrun',
    placeholderColor: 'from-violet-950 to-purple-950',
  },
]
