import { osPoints } from '../data'

export function OpenSource() {
  return (
    <section id="opensource" style={{ borderTop: '1px solid rgba(255,255,255,.06)', background: 'radial-gradient(900px 460px at 82% 0%,#101319 0%,var(--bg) 62%)' }}>
      <div className="wrap split split-os" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div>
          <div className="kicker">Open source</div>
          <h2 className="h2">Yours to run. Yours to change.</h2>
          <p className="lead">
            Single-tenant, self-hosted, no vendor lock-in. Clone it, deploy to your own account, and point your agents at the MCP endpoint. OAuth 2.1 for agents, passkeys for humans.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 26 }}>
            {osPoints.map((p) => (
              <div key={p} style={{ display: 'flex', gap: 11, alignItems: 'center', fontSize: 15, color: 'var(--ink)' }}>
                <span style={{ flex: 'none', width: 20, height: 20, borderRadius: '50%', background: 'color-mix(in oklab,var(--accent) 15%,transparent)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>✓</span>
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
            <div className="mono" style={{ flex: 1, textAlign: 'center', fontSize: 11, color: 'var(--dim)' }}>quickstart — bash</div>
          </div>
          <div className="mono" style={{ padding: 22, fontSize: 13, lineHeight: 2, color: '#c9ccd1' }}>
            <div><span style={{ color: 'var(--dim)' }}>$</span> git clone <span style={{ color: 'var(--accent)' }}>github.com/noriq-dev/noriq</span></div>
            <div><span style={{ color: 'var(--dim)' }}>$</span> cd noriq &amp;&amp; npm install</div>
            <div><span style={{ color: 'var(--dim)' }}>$</span> npx wrangler d1 create noriq</div>
            <div><span style={{ color: 'var(--dim)' }}>$</span> npm run deploy</div>
            <div style={{ color: '#3fd98b' }}>✓ migrated · built · deployed to your domain</div>
            <div style={{ color: 'var(--dim)' }}># connect agents via OAuth at /mcp — that's it</div>
          </div>
        </div>
      </div>
    </section>
  )
}
