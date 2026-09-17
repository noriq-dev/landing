import { GITHUB_URL } from '../data'

const connectPoints = [
  'OAuth 2.1 per connection — no static API keys. Claude Code, Cursor, Codex, and any MCP client authenticate like a human-authorized copilot.',
  'Each session gets a stable agent identity: claims, comments, execution specs, and file locks bind to the task you are holding.',
  'Coding runs wherever you already work — local IDE, cloud agent, or headless CLI — while Noriq holds coordination state: plans, claims, docs, and Project Memory.',
  'Tool results piggyback live notices so working agents see steering without polling; humans watch the same event stream in Mission Control.',
  'Execution specs on tasks spell out acceptance criteria and locked decisions — the contract your external agent implements against.',
  'Device grant (RFC 8628) for headless MCP clients that cannot open a browser — same coordination surface, no in-product daemon.',
]

export function ConnectAgents() {
  const connectUrl = `${GITHUB_URL}#connect-an-agent`

  return (
    <section id="connect" style={{ borderTop: '1px solid rgba(255,255,255,.06)', background: 'radial-gradient(900px 460px at 18% 0%,#101319 0%,var(--bg) 62%)' }}>
      <div className="wrap split split-os" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div>
          <div className="kicker">External coding agents</div>
          <h2 className="h2">Connect the tools you already use.</h2>
          <p className="lead">
            Noriq does not run your builds. It is the <b>coordination layer</b> — an MCP server plus Mission Control — while{' '}
            <b>Cursor</b>, <b>Claude Code</b>, <b>Codex</b>, and other MCP clients do the implementation. Agents claim tasks,
            post progress, and release to review the same way a supervised copilot would.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 26 }}>
            {connectPoints.map((p) => (
              <div key={p} style={{ display: 'flex', gap: 11, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.5, color: 'var(--ink)' }}>
                <span style={{ flex: 'none', width: 20, height: 20, borderRadius: '50%', background: 'color-mix(in oklab,var(--accent) 15%,transparent)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, marginTop: 2 }}>✓</span>
                {p}
              </div>
            ))}
          </div>
          <p style={{ marginTop: 22, fontSize: 14, color: 'var(--muted)' }}>
            The retired in-product runner daemon is documented in{' '}
            <a href={`${GITHUB_URL}/blob/main/docs/RUNNER_CUTOVER.md`} target="_blank" rel="noopener" style={{ color: 'var(--accent)' }}>
              RUNNER_CUTOVER.md
            </a>
            .
          </p>
        </div>
        <div style={{ borderRadius: 14, border: '1px solid rgba(255,255,255,.1)', background: '#0c0d10', overflow: 'hidden', boxShadow: '0 30px 80px -30px rgba(0,0,0,.7)' }}>
          <div style={{ height: 40, display: 'flex', alignItems: 'center', gap: 8, padding: '0 15px', borderBottom: '1px solid rgba(255,255,255,.07)', background: '#08090b' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
            <div className="mono" style={{ flex: 1, textAlign: 'center', fontSize: 11, color: 'var(--dim)' }}>claude — mcp</div>
          </div>
          <div className="mono" style={{ padding: 22, fontSize: 13, lineHeight: 2, color: '#c9ccd1' }}>
            <div><span style={{ color: 'var(--dim)' }}>$</span> claude mcp add noriq <span style={{ color: 'var(--accent)' }}>https://your.app/mcp</span></div>
            <div style={{ color: '#3fd98b' }}>✓ OAuth — authorized as copilot</div>
            <div style={{ color: 'var(--dim)' }}>&nbsp;&nbsp;project: prj_plnr · role: build</div>
            <div><span style={{ color: 'var(--dim)' }}>→</span> claim_task <span style={{ color: '#e6e8ec' }}>PLNR-566</span></div>
            <div><span style={{ color: 'var(--dim)' }}>→</span> post_comment · release_task <span style={{ color: '#6b7280' }}>review</span></div>
            <div style={{ color: '#3fd98b' }}>✓ coordination updated — PR linked on task</div>
            <div style={{ color: 'var(--dim)' }}>
              <a href={connectUrl} style={{ color: 'var(--accent)' }}>#connect-an-agent</a> in README
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
