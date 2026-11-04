# Andrew AI

Andrew AI is a web-based assistant built with [eve](https://eve.dev) and Next.js. It can use the tools and services configured for its runtime; agent-to-agent collaboration depends on the connected integrations available to the deployment.

## Run locally

Requirements: Node.js 24 and pnpm.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Next.js. Development mode skips sign-in. Local runs need access to the selected `openai/gpt-5.1-codex` model through the configured provider.

For the eve interactive development session instead of the web app, run:

```bash
pnpm dev:eve
```

## Deploy to Vercel

1. Create a Vercel project and enable access to `openai/gpt-5.1-codex` through the Vercel AI Gateway. A string model ID uses the Gateway and project OIDC on Vercel; direct provider credentials are only needed if you configure a direct provider.
2. Configure a Vercel OAuth app for sign-in and add its client ID and secret to the production environment as `VERCEL_APP_CLIENT_ID` and `VERCEL_APP_CLIENT_SECRET`.
3. Set `BETTER_AUTH_SECRET` to a unique, random secret (for example, generate one with `openssl rand -base64 32`).
4. Deploy from the project root:

   ```bash
   pnpm deploy
   ```

The production app requires all three auth variables above and a Vercel deployment hostname. Sign-in is provided by Vercel; allow users with Vercel accounts to sign in as appropriate for your deployment. The 58 configured service connections use Vercel Connect and are scoped to the signed-in user; users must authorize the services they want to use. Review which connections to expose before opening access broadly. Do not commit secrets. Configure them in the Vercel project settings.

## Validate

```bash
pnpm typecheck
pnpm build:eve
pnpm build
pnpm start
```

For a local production smoke test, build eve before Next.js so the agent runtime output exists. The production build loads auth configuration, so set the production auth variables above and `VERCEL_URL` when building locally. Vercel supplies its deployment hostname automatically and `withEve` builds the agent service during deployment.

There is currently no automated test suite. Add focused agent evaluations as integrations and user workflows are introduced.

## Potential next steps

- Add representative evals for factuality, tool selection, and graceful handling of unavailable integrations.
- Configure and verify the agent integrations needed for real multi-agent collaboration.
- Define usage limits, data-retention expectations, and a privacy notice before opening access broadly.
- Add monitoring for model/provider failures and sign-in issues.

## Customize

- Edit `agent/instructions.md` to change Andrew AI's behavior and response guidelines.
- Edit `agent/agent.ts` to change its model or runtime behavior.
- Configure tools and connected services under `agent/`.
