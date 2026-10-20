# CLAUDE.md

## Skills

When writing, reviewing, or refactoring React code (`apps/web`, `apps/mobile`, `packages/shared`), apply these skills from `.claude/skills/`:

- `vercel-react-best-practices`: performance (data fetching, bundle size, re-renders)
- `vercel-composition-patterns`: component architecture (compound components, context providers, avoiding boolean prop proliferation)

The skills are installed with the [`skills`](https://skills.sh) CLI and pinned in `skills-lock.json`. To update them:

```bash
npx skills update
```
