# AIStandards.io

Source code for [aistandards.io](https://aistandards.io) — a comprehensive listing of AI standards, protocols, and their implementations.

## What This Repository Contains

| Directory | Purpose |
|-----------|---------|
| `apps/web/` | React SPA (main website) |
| `pkg/aistandards/` | Go types and validation |
| `cmd/aistandardsio/` | CLI tool for data management |
| `docs/` | GitHub Pages output (built assets) |

The `docs/` directory serves as the deployment target for:

- The main website (built from `apps/web/`)
- MkDocs documentation sites deployed to subdirectories
- Shared assets (`/js/`, `/css/`, `/languages/`)

## Tech Stack

- **React 19** + TypeScript — Main website SPA
- **Vite 6** — Build tooling
- **Tailwind CSS 4** — Styling with TRON-inspired theme
- **Go** — Data types, validation, and CLI tooling
- **GitHub Pages** — Hosting

## Standards Covered

| Category | Standards |
|----------|-----------|
| **Agent Protocols** | MCP, A2A, ID-JAG, AAuth |
| **Identity Standards** | SPIFFE, WIMSE, AIMS |
| **General AI** | OpenAI Function Calling |

## Theme

TRON-inspired dark theme with semantic identity colors:

| Color | Hex | Meaning |
|-------|-----|---------|
| Cyan | `#00d4ff` | Human users/principals |
| Orange | `#ff6b00` | Agents/LLM workloads |
| Purple | `#a855f7` | Deterministic workloads |

## Development

```bash
# Install dependencies
npm install

# Start dev server
cd apps/web
npm run dev
```

## Build

```bash
# Build the website
cd apps/web
npm run build  # Outputs to ../../docs/

# Build Go CLI
go build -o bin/aistandardsio ./cmd/aistandardsio
```

## CLI Tool

The `aistandardsio` CLI provides data management commands:

```bash
# Validate standards and implementations data
./bin/aistandardsio validate -data apps/web/src/data

# Generate JSON schemas from Go types
./bin/aistandardsio schema -output apps/web/src/data/schema

# Export to Awesome-list markdown format
./bin/aistandardsio awesome -data apps/web/src/data -output .
```

## Data Files

| File | Description |
|------|-------------|
| `apps/web/src/data/standards.json` | AI standards with spec URLs and SDK links |
| `apps/web/src/data/implementations.json` | Implementation projects (keyed by GitHub repo) |
| `apps/web/src/data/languages.json` | Programming language metadata and icons |

## Contributing

To add a new standard or implementation:

1. Edit the appropriate JSON file in `apps/web/src/data/`
2. Run validation: `./bin/aistandardsio validate -data apps/web/src/data`
3. Submit a pull request

## Deployment

The site deploys automatically via GitHub Pages on push to `main`. The `docs/` directory is served at aistandards.io.

## License

MIT
