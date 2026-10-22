import { phases } from '../data'

export function Roadmap() {
  return (
    <section id="roadmap" className="wrap" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="kicker">Roadmap</div>
      <h2 className="h2" style={{ maxWidth: 720 }}>v0.17 and counting. v1.0 when it's earned.</h2>
      <p className="lead" style={{ maxWidth: 640 }}>
        The proof point holds in production: fleets of MCP copilots claiming concurrently with zero double-claims, humans steering mid-flight over the same event log, and execution specs that bind external agents to acceptance criteria. After the runner excision, Noriq is coordination-only — MCP + docs/Project Memory — while implementation and code indexing stay in the tools you already use.
      </p>

      <div style={{ marginTop: 46, display: 'flex', flexDirection: 'column' }}>
        {phases.map((p) => (
          <div key={p.phase + p.title} className="roadmap-row">
            <div className="mono" style={{ fontSize: 12, color: 'var(--dim)', letterSpacing: '.04em' }}>{p.phase}</div>
            <div>
              <div style={{ fontSize: 17.5, fontWeight: 600, letterSpacing: '-.01em', display: 'flex', alignItems: 'center', gap: 9 }}>
                {p.title}
                {p.star && <span style={{ color: 'var(--accent)' }}>★</span>}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--muted)', marginTop: 4 }}>{p.body}</div>
            </div>
            <div className="mono roadmap-status" style={{ fontSize: 10.5, fontWeight: 500, color: p.statusColor, background: p.statusBg, border: `1px solid ${p.statusBorder}`, padding: '5px 11px', borderRadius: 100, whiteSpace: 'nowrap', justifySelf: 'end' }}>
              {p.status}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
