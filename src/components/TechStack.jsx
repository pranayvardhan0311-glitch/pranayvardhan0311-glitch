import { techStack } from '../data'

export default function TechStack() {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="eyebrow">Tech stack</div>
        <h2>Tools I work with</h2>
        <div className="stack-grid" style={{ marginTop: 26 }}>
          {techStack.map((t) => (
            <span key={t.name} className="chip">
              <span className="dot" style={{ color: t.color, background: t.color }} />
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
