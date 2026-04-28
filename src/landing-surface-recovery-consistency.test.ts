import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

function read(relativePath: string) {
  return readFileSync(new URL(relativePath, import.meta.url), 'utf8');
}

function normalize(text: string) {
  return text.replace(/\s+/g, ' ').trim();
}

const agentwatchRaw = read('../app/agentwatch/page.tsx');
const betaTestersRaw = read('../app/beta-testers/page.tsx');
const recoveryOperatorStart = read('../../axiom-agentwatch/RECOVERY_OPERATOR_START.md');
const launchReady = read('../../axiom-agentwatch/LAUNCH_READY.md');
const production = read('../../axiom-agentwatch/PRODUCTION.md');
const testersWanted = read('../../axiom-agentwatch/TESTERS_WANTED.md');

const agentwatch = normalize(agentwatchRaw);
const betaTesters = normalize(betaTestersRaw);
const recovery = normalize(recoveryOperatorStart);
const launch = normalize(launchReady);
const prod = normalize(production);
const testers = normalize(testersWanted);

describe('landing surface recovery consistency', () => {
  it('keeps the recovery-window source docs on the current truth', () => {
    expect(recovery).toContain('Keep `AGENTWATCH_SELF_SERVE_BETA_OPEN` unset or `false`');
    expect(launch).toContain('A real x402 paid production proof artifact already exists');
    expect(launch).toContain('public `/api/keys` onboarding resumes only after verification is green');
    expect(prod).toContain('402 Payment Required');
    expect(prod).toContain('x-payment-token');
    expect(testers).toContain('2-3 builders');
    expect(testers).toContain('broader onboarding resumes after the current redeploy and verification pass');
  });

  it('keeps both public landing pages aligned with the recovery window', () => {
    expect(agentwatch).toContain('Recovery-gated beta');
    expect(agentwatch).toContain('One real x402 paid production proof already exists');
    expect(agentwatch).toContain('broader onboarding resumes only after the current redeploy + verification pass');
    expect(agentwatch).toContain('next wave stays intentionally small');

    expect(betaTesters).toContain('recovery-gated API');
    expect(betaTesters).toContain('One real x402 paid production proof already exists');
    expect(betaTesters).toContain('broader onboarding resumes after the current redeploy and verification pass');
    expect(betaTesters).toMatch(/2-3 builders|next small onboarding wave/);
  });

  it('keeps the main paid-path example truthful during recovery', () => {
    expect(agentwatchRaw).not.toContain('Authorization: Bearer aw_live_xxx');
    expect(agentwatchRaw).not.toContain('Paid-route example (API key)');
    expect(agentwatch).not.toContain('API key or x402 access is part of the next small onboarding wave');
    expect(agentwatch).not.toContain('use CDP Server Wallet with API key auth once onboarding resumes');

    expect(agentwatch).toContain('/agent-watch/today');
    expect(agentwatch).toMatch(/402 response includes payment requirements|402 Payment Required|x-payment-token/);
  });
});
