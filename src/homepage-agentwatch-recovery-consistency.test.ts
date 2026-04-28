import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

const repoRoot = fileURLToPath(new URL('..', import.meta.url));
const workspaceRoot = fileURLToPath(new URL('../..', import.meta.url));

function readRepoFile(relativePath: string) {
  return readFileSync(path.join(repoRoot, relativePath), 'utf8');
}

function readWorkspaceFile(relativePath: string) {
  return readFileSync(path.join(workspaceRoot, relativePath), 'utf8');
}

describe('homepage AgentWatch recovery consistency', () => {
  const homepage = readRepoFile('app/page.tsx');
  const recoveryOperatorStart = readWorkspaceFile('axiom-agentwatch/RECOVERY_OPERATOR_START.md');
  const launchReady = readWorkspaceFile('axiom-agentwatch/LAUNCH_READY.md');
  const productionGuide = readWorkspaceFile('axiom-agentwatch/PRODUCTION.md');
  const testersWanted = readWorkspaceFile('axiom-agentwatch/TESTERS_WANTED.md');

  it('stays aligned with the recovery source-of-truth docs', () => {
    expect(recoveryOperatorStart).toMatch(/authenticated Vercel operator session/i);
    expect(recoveryOperatorStart).toMatch(/Keep `AGENTWATCH_SELF_SERVE_BETA_OPEN` unset or `false`/i);

    expect(launchReady).toMatch(/a real x402 paid production proof artifact already exists/i);
    expect(launchReady).toMatch(/Production self-serve `POST \/api\/keys` is also intentionally paused/i);

    expect(productionGuide).toMatch(/it is not proof that the current public deployment is healthy yet/i);
    expect(productionGuide).toMatch(/Before you treat any live result as launch-ready/i);

    expect(testersWanted).toMatch(/broader onboarding resumes after the current redeploy and verification pass/i);
    expect(testersWanted).toMatch(/not proof that self-serve production access is already healthy and open/i);

    expect(homepage).toContain('Recovery-gated beta');
    expect(homepage).toContain('One real x402 paid proof exists already');
    expect(homepage).toContain('broader onboarding resumes only after the current redeploy + verification pass is green');
    expect(homepage).toContain('Self-serve onboarding and broad pricing claims stay paused until the redeploy + verification gate is green.');
  });

  it('does not drift back to broad live or self-serve pricing claims during recovery', () => {
    const forbiddenClaims = [
      '100 requests/mo free, then $29/mo for 10k requests. Simple, transparent pricing.',
      'Try free tier',
      'Simple, usage-based pricing.',
      'Start free, scale as you grow. No hidden fees, no surprises.',
      'Get started free',
      'Start Pro trial',
      'A live product surface with a free route and paid current-day access.',
      'Live API für AI-Agent-Signale.',
      'Live & Idempotent',
      'Produktionsreife Pipeline',
    ];

    for (const claim of forbiddenClaims) {
      expect(homepage).not.toContain(claim);
    }
  });
});
