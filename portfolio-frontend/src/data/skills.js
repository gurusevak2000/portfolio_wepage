export const backendSkills = [
  {
    group: 'Backend',
    items: ['ASP.NET Core', 'C# / .NET', 'REST API Design', 'Middleware & Pipelines'],
  },
  {
    group: 'Database',
    items: ['SQL Server', 'Entity Framework Core', 'Schema Design', 'Query Optimization'],
  },
  {
    group: 'Tools',
    items: ['Git / GitHub', 'Docker (basics)', 'Postman', 'Visual Studio'],
  },
]

export const gameSkills = [
  {
    group: 'Game Engine',
    items: ['Unity 2D / 3D', 'C# Scripting', 'Physics Systems', 'Scene Management'],
  },
  {
    group: 'Networking',
    items: ['FishNet', 'Client Prediction', 'Lag Compensation', 'Authoritative Server'],
  },
  {
    group: 'Systems',
    items: ['Behaviour Trees', 'FSM (State Machines)', 'Scriptable Objects', 'Input System'],
  },
]

export const gameSystems = [
  {
    title: 'Movement Systems',
    description:
      'Character controllers with smooth interpolation, collision handling, and input buffering for responsive feel.',
    icon: 'movement',
  },
  {
    title: 'Networking (FishNet)',
    description:
      'Authoritative server architecture, client prediction, reconciliation and lag compensation pipelines.',
    icon: 'network',
  },
  {
    title: 'AI Behaviour',
    description:
      'Behaviour trees and FSMs for enemy logic — patrol, detection, pursuit, retreat, and group coordination.',
    icon: 'ai',
  },
  {
    title: 'Game Architecture',
    description:
      'Scene management, event systems, save/load pipelines, and scriptable object-driven game data.',
    icon: 'architecture',
  },
]

export const devLogs = [
  {
    date: 'Mar 2025',
    title: 'FishNet lag compensation',
    body: 'Implemented server-side rewind for projectile hit detection, reducing perceived latency by ~40ms at 120ms ping.',
  },
  {
    date: 'Jan 2025',
    title: 'Behaviour tree refactor',
    body: 'Moved from nested if-chains to a composable BT library. Enemy logic is now data-driven and testable in isolation.',
  },
  {
    date: 'Nov 2024',
    title: 'First multiplayer prototype',
    body: 'Two-player sync working over LAN with FishNet. Learned about ownership models and NetworkTransform limitations.',
  },
]
