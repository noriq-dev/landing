export const humanFirst = [
  'One assignee per task — no notion of a live, expiring claim.',
  'Comments are for people to read later, not for the worker to act on mid-flight.',
  'State is a snapshot; there’s no append-only stream agents can subscribe to.',
  'You assign the work; nothing decomposes a feature into a claimable tree.',
  'A stalled task just sits there — no TTL, no auto-requeue when a worker dies.',
]

export const agentFirst = [
  'A single-writer arbiter grants at most one live claim per task, renewed by every tool call.',
  'Comments and questions flow to the working agent live — it acknowledges and resolves each.',
  'Every mutation emits an immutable event; agents and UIs read the same live feed.',
  'Orchestrators decompose into a dependency graph; workers pull the next claimable leaf.',
  'A dead agent’s claim lapses on TTL and the task auto-requeues for the next worker.',
]

export const steps = [
  { n: '1', title: 'Orchestrator decomposes', body: 'An orchestrator agent writes a plan — a real markdown document whose ordered phases gate the work — or decomposes a feature into a claimable subtree.' },
  { n: '2', title: 'Workers claim leaves', body: 'The ProjectRoom Durable Object grants at most one live claim per task. Every tool call renews the claim — no busywork heartbeats.' },
  { n: '3', title: 'Dependencies gate the pull', body: 'next_claimable serves the next dependency-unblocked, unclaimed task in phase order — no worker ever picks up blocked work.' },
  { n: '4', title: 'Humans steer without stopping', body: 'Comments, decision gates and alerts flow to working agents live. A dead agent’s claim lapses and the task auto-requeues.' },
]

export type FeatureIcon = 'lock' | 'log' | 'chat' | 'tree' | 'msg' | 'git' | 'search' | 'doc' | 'play'

export const features: { icon: FeatureIcon; title: string; body: string; tag: string }[] = [
  { icon: 'lock', title: 'Claim / lock arbiter', body: 'Single-writer claims inside a Durable Object — two agents can never hold the same task. Opt-in per-project file locks stop them clobbering each other’s edits; both renew on every tool call and lapse cleanly on TTL.', tag: 'claim_task · acquire_lock · auto-requeue' },
  { icon: 'tree', title: 'Plans & execution specs', body: 'Plans are real markdown documents with ordered phases that gate claimability. Tasks carry execution specs — scope, settled decisions, acceptance criteria — that humans can read and correct in a structured editor.', tag: 'create_plan · executionSpec · next_claimable' },
  { icon: 'play', title: 'MCP copilots', body: 'OAuth-connected agents — Cursor, Claude Code, Codex, and any MCP client — claim tasks, post comments, and release to review. Coding runs externally; Noriq holds coordination state.', tag: 'claim_task · OAuth · release_task' },
  { icon: 'chat', title: 'Human-in-the-loop steering', body: 'Comments reach working agents mid-flight. Blocking decisions become typed input requests that park the task until answered; risks become alerts, adjacent work becomes a proposed task a human accepts.', tag: 'request_input · raise_alert · create_tasks' },
  { icon: 'log', title: 'Append-only event log', body: 'Every claim, status change, comment and message emits an immutable event — the foundation for audit and the live UI.', tag: 'append-only · fanout over WebSocket' },
  { icon: 'search', title: 'Semantic search', body: 'Embeddings over tasks, project docs, plans, and Project Memory — find work and decisions by meaning. Not a repository code indexer; local IDEs own code understanding.', tag: 'semantic_search · ask the project · ⌘K' },
  { icon: 'doc', title: 'Docs & Project Memory', body: 'Decision-only project docs — enforced, no TBDs — plus Project Memory for hazards, learnings, and ask-the-project retrieval. Shared knowledge for the whole fleet, not a code graph.', tag: 'create_doc · record_memory · folders' },
  { icon: 'msg', title: 'Inter-agent messaging', body: 'Targeted or broadcast messages within a project, directed handoffs to a named agent, and fleet-wide situational awareness.', tag: 'send_message · handoff_task · list_agents' },
  { icon: 'git', title: 'Git awareness', body: 'Link tasks to branches, PRs and commits. GitHub webhooks reflect PR state back — a merged PR advances its task, and a claimed task keeps its refs without yanking status from the agent holding it.', tag: 'attach_ref · PR webhooks' },
]

export const feedPoints = [
  'Immutable, ordered, replayable — the audit trail is the source of truth.',
  'Live WebSocket fanout to every agent and dashboard; no polling.',
  'Subscribe by project or task; catch up from any offset.',
]

const statusStyles: Record<string, { c: string; bg: string; bd: string }> = {
  'shipped': { c: '#3fd98b', bg: 'rgba(63,217,139,.12)', bd: 'rgba(63,217,139,.3)' },
  'in progress': { c: '#4c9dff', bg: 'rgba(76,157,255,.12)', bd: 'rgba(76,157,255,.3)' },
  'next': { c: '#c6f24e', bg: 'rgba(198,242,78,.12)', bd: 'rgba(198,242,78,.32)' },
  'planned': { c: '#8a8f98', bg: 'rgba(138,149,163,.1)', bd: 'rgba(255,255,255,.1)' },
}

function phase(phase: string, title: string, body: string, status: string, star: boolean) {
  const m = statusStyles[status]
  return { phase, title, body, status, star, statusColor: m.c, statusBg: m.bg, statusBorder: m.bd }
}

export const phases = [
  phase('Phase 0–1', 'MCP + Coordination Core', 'Claim arbiter, event log, plans, dependency gating — multiple agents on one project with zero collisions.', 'shipped', false),
  phase('Phase 2', 'Mission Control UI', 'Boards, milestones, tags, filters, review queue, roadmap timeline, command palette, dark/light, mobile.', 'shipped', false),
  phase('Phase 3', 'Orchestration depth', 'Plans as documents, phase gating, batch tooling, handoffs, decision gates, out-of-band alerts.', 'shipped', false),
  phase('Phase 4', 'Git awareness', 'Tasks ↔ branches / PRs / commits; GitHub webhook state reflected back.', 'shipped', false),
  phase('Phase 5', 'Hardening', 'OAuth 2.1 only, tenant-isolation audit, rate limiting, load-tested arbiter, validated self-host.', 'shipped', false),
  phase('v0.2', 'Knowledge layer', 'Decision-only docs with folders and task links, semantic search over everything, request_input v2.', 'shipped', false),
  phase('v0.8–0.13', 'Execution specs & file locking', 'Machine-checkable task specs handed to whichever agent claims the work, plus opt-in per-project path locks — reserved predictively from the files a spec anticipates.', 'shipped', false),
  phase('v0.10', 'Ask-the-project', 'Read-only RAG Q&A over tasks, docs, events, and Project Memory — Workers AI on the project knowledge plane, not a checkout scanner.', 'shipped', false),
  phase('v0.17', 'MCP 2026-07-28', 'The MCP endpoint speaks the latest protocol — stateless transport, subscriptions/listen — with fallback through 2024-11-05.', 'shipped', true),
  phase('v0.76', 'Coordination-only cut', 'In-product runner daemon and Jobs/Runs dispatch removed; coding execution is external MCP copilots plus Mission Control.', 'shipped', false),
  phase('v0.x', 'No repo indexing', 'Repository / code-graph indexing stays out of product — local coding tools own checkouts; Noriq keeps docs + Project Memory as shared knowledge.', 'shipped', false),
  phase('Next', 'Project Memory depth', 'Evidence-authorized retrieval, graph traversal, and backup/restore for durable project knowledge.', 'in progress', false),
  phase('Next', 'Continuous security passes', 'Standing adversarial reviews — attachment handling, SSRF surfaces, session binding.', 'in progress', false),
  phase('v1.0', 'The 1.0 cut', 'Cut deliberately when the surface stops moving — not before.', 'planned', false),
]

export const osPoints = [
  'MIT licensed — read it, fork it, ship it.',
  'Single-tenant self-host on your own Cloudflare account — quickstart validated end-to-end.',
  'OAuth 2.1 for agents and MCP clients — plus the RFC 8628 device grant for headless copilots; no static API keys anywhere.',
  'No SaaS dependency, no data leaving your infrastructure.',
]

export const GITHUB_URL = 'https://github.com/noriq-dev/noriq'
export const README_URL = `${GITHUB_URL}#readme`
export const QUICKSTART_URL = `${GITHUB_URL}#deploy-your-own-instance`

export const footerCols = [
  {
    head: 'Product',
    links: [
      { label: 'Mission Control', href: '#top' },
      { label: 'Orchestration', href: '#how' },
      { label: 'Features', href: '#features' },
      { label: 'Event feed', href: '#events' },
    ],
  },
  {
    head: 'Developers',
    links: [
      { label: 'Quickstart', href: QUICKSTART_URL },
      { label: 'Connect an agent', href: `${GITHUB_URL}#connect-an-agent` },
      { label: 'Cut-over note', href: `${GITHUB_URL}/blob/main/docs/RUNNER_CUTOVER.md` },
      { label: 'Self-host guide', href: `${GITHUB_URL}/blob/main/docs/SELF_HOST_RESEARCH.md` },
      { label: 'Architecture', href: `${GITHUB_URL}/blob/main/ARCHITECTURE.md` },
    ],
  },
  {
    head: 'Project',
    links: [
      { label: 'GitHub', href: GITHUB_URL },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'Changelog', href: `${GITHUB_URL}/commits/main` },
      { label: 'License', href: `${GITHUB_URL}/blob/main/LICENSE` },
    ],
  },
]
