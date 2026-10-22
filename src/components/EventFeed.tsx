import { useEffect, useRef, useState } from 'react'
import { feedPoints } from '../data'

type FeedEvent = {
  id: number
  t: number
  dot: string
  who: string
  whoColor: string
  verb: string
  obj: string
  meta: string
}

const AGENT_COLORS: Record<string, string> = {
  atlas: '#f5a623',
  nova: '#4c9dff',
  echo: '#b57bff',
  wren: '#e6e8ec',
}

const WORKERS = ['nova', 'echo', 'wren']

let seq = 900

function mkEvent(ageSec: number): FeedEvent {
  const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)]
  const key = 'NRQ-' + (120 + Math.floor(Math.random() * 80))
  const kinds = [
    () => ({ dot: '#4c9dff', who: pick(WORKERS), verb: 'claimed', obj: key, meta: 'ttl 30m' }),
    () => ({ dot: '#3fd98b', who: pick(WORKERS), verb: 'completed', obj: key, meta: '+event' }),
    () => ({ dot: '#c6f24e', who: 'you', verb: 'commented on', obj: key, meta: '→ addressed' }),
    () => ({ dot: '#f5a623', who: 'atlas', verb: 'decomposed', obj: key, meta: '4 subtasks' }),
    () => ({ dot: '#b57bff', who: pick(WORKERS), verb: 'messaged', obj: 'atlas', meta: 'blocked on dep' }),
    () => ({ dot: '#6b7280', who: pick(WORKERS), verb: 'renewed claim', obj: key, meta: 'tool call' }),
    () => ({ dot: '#ff8a5c', who: pick(WORKERS), verb: 'claim lapsed', obj: key, meta: 'auto-requeued' }),
    () => ({ dot: '#3fd98b', who: 'atlas', verb: 'unblocked', obj: key, meta: 'dep merged' }),
    () => ({ dot: '#c6f24e', who: 'you', verb: 'released', obj: key, meta: '→ review · PR linked' }),
    () => ({ dot: '#4c9dff', who: pick(WORKERS), verb: 'acquired lock', obj: key, meta: '2 paths' }),
    () => ({ dot: '#f5a623', who: pick(WORKERS), verb: 'proposed', obj: key, meta: 'awaiting accept' }),
  ]
  const e = pick(kinds)()
  return {
    ...e,
    id: ++seq,
    t: Date.now() + ageSec * 1000,
    whoColor: AGENT_COLORS[e.who] ?? '#c6f24e',
  }
}

function ago(t: number, now: number) {
  const s = Math.max(0, Math.round((now - t) / 1000))
  return s < 1 ? 'now' : s < 60 ? s + 's' : Math.floor(s / 60) + 'm'
}

function LiveFeed() {
  const [events, setEvents] = useState<FeedEvent[]>([])
  const timer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    setEvents([mkEvent(-14), mkEvent(-9), mkEvent(-5), mkEvent(-2)])
    const tick = () => {
      setEvents((s) => [mkEvent(0), ...s].slice(0, 8))
      timer.current = setTimeout(tick, 1400 + Math.random() * 1100)
    }
    timer.current = setTimeout(tick, 1200)
    return () => clearTimeout(timer.current)
  }, [])

  const now = Date.now()
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {events.map((e, i) => (
        <div key={e.id} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 16px', borderBottom: '1px solid rgba(255,255,255,.045)', animation: i === 0 ? 'nq-feedin .7s ease both' : undefined }}>
          <span style={{ flex: 'none', width: 7, height: 7, borderRadius: '50%', background: e.dot, boxShadow: '0 0 8px ' + e.dot }} />
          <span className="mono" style={{ flex: 1, fontSize: 12.5, color: '#c9ccd1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <span style={{ color: e.whoColor, fontWeight: 600 }}>{e.who}</span>
            {' ' + e.verb + ' '}
            <span style={{ color: '#e6e8ec', fontWeight: 600 }}>{e.obj}</span>
            <span style={{ color: '#6b7280' }}>{'  ' + e.meta}</span>
          </span>
          <span className="mono" style={{ flex: 'none', fontSize: 11, color: '#6b7280' }}>{ago(e.t, now)}</span>
        </div>
      ))}
    </div>
  )
}

export function EventFeed() {
  return (
    <section id="events" style={{ borderTop: '1px solid rgba(255,255,255,.06)', background: 'radial-gradient(900px 480px at 18% 0%,#101319 0%,var(--bg) 60%)' }}>
      <div className="wrap split split-feed" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div>
          <div className="kicker">Append-only event log</div>
          <h2 className="h2">Everything is an event.</h2>
          <p className="lead">
            Every claim, status change, comment, message and requeue emits an immutable event. Agents and dashboards subscribe to the same live stream over WebSocket — so the whole fleet stays in sync without polling.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 26 }}>
            {feedPoints.map((p) => (
              <div key={p} style={{ display: 'flex', gap: 11, alignItems: 'center', fontSize: 15, color: 'var(--ink)' }}>
                <span style={{ flex: 'none', width: 20, height: 20, borderRadius: '50%', background: 'color-mix(in oklab,var(--accent) 15%,transparent)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>✓</span>
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* live feed panel */}
        <div style={{ borderRadius: 14, border: '1px solid rgba(255,255,255,.1)', background: '#0b0c0f', overflow: 'hidden', boxShadow: '0 30px 80px -30px rgba(0,0,0,.7)' }}>
          <div style={{ height: 44, display: 'flex', alignItems: 'center', gap: 9, padding: '0 16px', borderBottom: '1px solid rgba(255,255,255,.07)', background: '#08090b' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
            <div className="mono" style={{ flex: 1, textAlign: 'center', fontSize: 11, color: 'var(--dim)' }}>event stream — project: coordination-mvp</div>
            <div className="mono" style={{ fontSize: 10.5, color: '#3fd98b', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3fd98b', animation: 'nq-blink 1.4s ease infinite' }} />
              live
            </div>
          </div>
          <div style={{ height: 412, overflow: 'hidden', padding: '8px 0', position: 'relative' }}>
            <LiveFeed />
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 56, background: 'linear-gradient(transparent,#0b0c0f)', pointerEvents: 'none' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
