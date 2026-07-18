const RUNNER_URL = 'https://github.com/noriq-dev/runner'

const runnerPoints = [
  'One git worktree per run on a throwaway branch — agents never touch your checkout.',
  'A deterministic verify gate, plus an optional fresh-eyes reviewer — even from the other vendor, so claude’s work is judged by codex.',
  'Green runs rebase onto one integration branch and re-verify — you approve the merge, not the push.',
  'No push credentials for any agent, ever. Budgets are daemon-enforced; only your OAuth token crosses the wire.',
]

export function Runner() {
  return (
    <section id="runner" style={{ borderTop: '1px solid rgba(255,255,255,.06)', background: 'radial-gradient(900px 460px at 18% 0%,#101319 0%,var(--bg) 62%)' }}>
      <div className="wrap split split-os" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div>
          <div className="kicker">The execution plane</div>
          <h2 className="h2">Dispatch a plan. Watch it land.</h2>
          <p className="lead">
            The <a href={RUNNER_URL} target="_blank" rel="noopener"><span className="mono" style={{ color: 'var(--ink)' }}>noriq-runner</span></a> daemon runs on your machine: it discovers your repos, spawns <b>Claude or Codex</b> in isolated worktrees, and streams live transcripts and token/cost telemetry back — so you dispatch, watch, steer and approve entirely from the dashboard.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 26 }}>
            {runnerPoints.map((p) => (
              <div key={p} style={{ display: 'flex', gap: 11, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.5, color: 'var(--ink)' }}>
                <span style={{ flex: 'none', width: 20, height: 20, borderRadius: '50%', background: 'color-mix(in oklab,var(--accent) 15%,transparent)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, marginTop: 2 }}>✓</span>
                {p}
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderRadius: 14, border: '1px solid rgba(255,255,255,.1)', background: '#0c0d10', overflow: 'hidden', boxShadow: '0 30px 80px -30px rgba(0,0,0,.7)' }}>
          <div style={{ height: 40, display: 'flex', alignItems: 'center', gap: 8, padding: '0 15px', borderBottom: '1px solid rgba(255,255,255,.07)', background: '#08090b' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
            <div className="mono" style={{ flex: 1, textAlign: 'center', fontSize: 11, color: 'var(--dim)' }}>runner — bash</div>
          </div>
          <div className="mono" style={{ padding: 22, fontSize: 13, lineHeight: 2, color: '#c9ccd1' }}>
            <div><span style={{ color: 'var(--dim)' }}>$</span> npm install -g <span style={{ color: 'var(--accent)' }}>@noriq-dev/runner</span></div>
            <div><span style={{ color: 'var(--dim)' }}>$</span> noriq-runner init</div>
            <div style={{ color: '#3fd98b' }}>✓ authorized — you choose which projects it may reach</div>
            <div style={{ color: 'var(--dim)' }}>&nbsp;&nbsp;found 2 repos · drivers: claude, codex</div>
            <div><span style={{ color: 'var(--dim)' }}>$</span> noriq-runner start</div>
            <div style={{ color: '#3fd98b' }}>✓ connected — supervising dispatched runs</div>
            <div style={{ color: 'var(--dim)' }}># Linux · macOS · native Windows — no WSL required</div>
          </div>
        </div>
      </div>
    </section>
  )
}
