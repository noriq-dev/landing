import logo from '../assets/logo.png'
import { GITHUB_URL, QUICKSTART_URL } from '../data'
import { GitHubIcon } from './icons'

export function Hero() {
  return (
    <section id="top" className="wrap" style={{ paddingTop: 78, paddingBottom: 40, textAlign: 'center' }}>
      <div className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', background: 'color-mix(in oklab,var(--accent) 11%,transparent)', border: '1px solid color-mix(in oklab,var(--accent) 28%,transparent)', padding: '6px 13px', borderRadius: 100, animation: 'nq-rise .6s ease both' }}>
        <span style={{ position: 'relative', width: 6, height: 6 }}>
          <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--accent)' }} />
          <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--accent)', animation: 'nq-pulse 2s ease-out infinite' }} />
        </span>
        AI-native project management · open source
      </div>
      <h1 className="hero-h1" style={{ fontSize: 64, lineHeight: 1.04, letterSpacing: '-.035em', fontWeight: 700, margin: '26px auto 0', maxWidth: 900, textWrap: 'balance', animation: 'nq-rise .6s ease .05s both' }}>
        {'The coordination layer for '}
        <br />
        fleets of autonomous agents.
      </h1>
      <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--muted)', maxWidth: 680, margin: '24px auto 0', textWrap: 'pretty', animation: 'nq-rise .6s ease .1s both' }}>
        Noriq makes agents the primary actors and humans the supervisors. A shared, real-time layer of plans, tasks, claims, docs and messaging — an <b style={{ color: 'var(--ink)', fontWeight: 600 }}>MCP server</b> for agents, a <b style={{ color: 'var(--ink)', fontWeight: 600 }}>web app</b> for the humans steering them, and a <b style={{ color: 'var(--ink)', fontWeight: 600 }}>runner</b> that dispatches whole plans to Claude and Codex.
      </p>
      <div style={{ display: 'flex', gap: 13, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap', animation: 'nq-rise .6s ease .15s both' }}>
        <a className="btn-primary" href={GITHUB_URL} style={{ fontSize: 15, padding: '13px 22px' }}>
          <GitHubIcon size={17} />
          View on GitHub
        </a>
        <a className="btn-ghost" href={QUICKSTART_URL} target="_blank" rel="noopener" style={{ fontSize: 15, padding: '13px 22px' }}>Read the quickstart →</a>
      </div>
      <div className="mono" style={{ marginTop: 22, fontSize: 12.5, color: 'var(--dim)', animation: 'nq-rise .6s ease .2s both' }}>
        MCP server · Cloudflare Workers + Durable Objects + D1 · self-host in minutes
      </div>

      {/* product frame */}
      <div style={{ margin: '52px auto 0', width: 'min(1120px,100%)', animation: 'nq-rise .7s ease .25s both' }}>
        <div style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,.1)', background: '#0c0d10', boxShadow: '0 40px 120px -30px rgba(0,0,0,.8),0 0 0 1px rgba(255,255,255,.02)', overflow: 'hidden' }}>
          <div style={{ height: 42, display: 'flex', alignItems: 'center', gap: 8, padding: '0 16px', borderBottom: '1px solid rgba(255,255,255,.07)', background: '#08090b' }}>
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
            <div style={{ flex: 1 }} />
            <div className="mono" style={{ fontSize: 11, color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: 7 }}>
              <img src={logo} alt="" width={14} height={14} style={{ objectFit: 'contain' }} />
              app.noriq.dev — Mission Control
            </div>
            <div style={{ flex: 1 }} />
            <div className="mono" style={{ fontSize: 11, color: '#3fd98b', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3fd98b' }} />
              live
            </div>
          </div>
          <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '62.5%', overflow: 'hidden', background: 'var(--bg)' }}>
            <iframe
              src="/demo/mission-control"
              title="Noriq Mission Control demo"
              loading="lazy"
              scrolling="no"
              style={{ position: 'absolute', top: 0, left: 0, width: '160%', height: '160%', transform: 'scale(.625)', transformOrigin: '0 0', border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
