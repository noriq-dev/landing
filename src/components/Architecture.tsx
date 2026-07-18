export function Architecture() {
  return (
    <section id="architecture" style={{ borderTop: '1px solid rgba(255,255,255,.06)', background: '#08090b' }}>
      <div className="wrap" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="kicker">Architecture</div>
        <h2 className="h2" style={{ maxWidth: 700 }}>Runs entirely on your own Cloudflare account.</h2>
        <p className="lead" style={{ maxWidth: 640 }}>
          One Worker as the front door. A <span className="mono" style={{ color: 'var(--ink)' }}>ProjectRoom</span> Durable Object serializes every claim so two agents can never hold the same task. D1 is the durable source of truth.
        </p>

        <div className="arch-grid" style={{ marginTop: 52, border: '1px solid rgba(255,255,255,.08)', borderRadius: 18, background: '#0b0c0f', padding: 38 }}>
          {/* clients */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ border: '1px solid color-mix(in oklab,var(--accent) 26%,transparent)', borderRadius: 13, padding: 18, background: 'color-mix(in oklab,var(--accent) 5%,transparent)' }}>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>AI agents</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--accent)' }}>orchestrator + workers</div>
              <div className="mono" style={{ fontSize: 10.5, color: 'var(--dim)', marginTop: 8 }}>MCP · HTTP + WS</div>
            </div>
            <div style={{ border: '1px solid rgba(255,255,255,.1)', borderRadius: 13, padding: 18, background: 'rgba(255,255,255,.02)' }}>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Web app</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>mission control SPA</div>
              <div className="mono" style={{ fontSize: 10.5, color: 'var(--dim)', marginTop: 8 }}>REST · WebSocket</div>
            </div>
            <div style={{ border: '1px solid rgba(255,255,255,.1)', borderRadius: 13, padding: 18, background: 'rgba(255,255,255,.02)' }}>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Runner</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>spawns Claude / Codex</div>
              <div className="mono" style={{ fontSize: 10.5, color: 'var(--dim)', marginTop: 8 }}>dispatch · telemetry</div>
            </div>
          </div>
          {/* worker */}
          <div style={{ position: 'relative', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14, padding: 22, background: 'linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.01))', textAlign: 'center' }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--dim)' }}>Cloudflare Worker</div>
            <div style={{ fontSize: 16, fontWeight: 600, margin: '8px 0 14px' }}>Router · MCP · REST · OAuth 2.1</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ border: '1px solid color-mix(in oklab,var(--accent) 28%,transparent)', borderRadius: 11, padding: 13, background: 'color-mix(in oklab,var(--accent) 6%,transparent)' }}>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>
                  ProjectRoom <span className="mono" style={{ fontSize: 9, color: 'var(--accent)', background: 'color-mix(in oklab,var(--accent) 14%,transparent)', padding: '1px 5px', borderRadius: 4 }}>DO</span>
                </div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', marginTop: 4 }}>claim arbiter · live fanout</div>
              </div>
              <div style={{ border: '1px solid rgba(255,255,255,.12)', borderRadius: 11, padding: 13, background: 'rgba(255,255,255,.02)' }}>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>
                  OAuth 2.1 <span className="mono" style={{ fontSize: 9, color: 'var(--muted)', background: 'rgba(255,255,255,.08)', padding: '1px 5px', borderRadius: 4 }}>AS</span>
                </div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', marginTop: 4 }}>agent identity · sessions · no static keys</div>
              </div>
            </div>
          </div>
          {/* data */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ border: '1px solid rgba(255,255,255,.1)', borderRadius: 13, padding: 18, background: 'rgba(255,255,255,.02)' }}>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>D1 · SQL</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>durable source of truth</div>
              <div className="mono" style={{ fontSize: 10.5, color: 'var(--dim)', marginTop: 8, lineHeight: 1.5 }}>projects · tasks · deps<br />claims · comments · events</div>
            </div>
            <div style={{ border: '1px solid rgba(255,255,255,.1)', borderRadius: 13, padding: 18, background: 'rgba(255,255,255,.02)' }}>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>R2 / Embeddings</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>attachments · semantic index</div>
              <div className="mono" style={{ fontSize: 10.5, color: 'var(--dim)', marginTop: 8 }}>capability-token uploads · backups</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
