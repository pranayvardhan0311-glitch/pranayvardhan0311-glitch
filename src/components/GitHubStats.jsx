import { stats } from '../data'

export default function GitHubStats() {
  return (
    <section id="stats">
      <div className="wrap">
        <div className="eyebrow">Activity</div>
        <h2>GitHub in numbers</h2>
        <div className="stats-grid" style={{ marginTop: 26 }}>
          {stats.cards.map((c) => (
            <div className="stat-card" key={c.label}>
              <img src={c.src} alt={`GitHub ${c.label} for ${stats.username}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
