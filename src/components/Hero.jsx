import Socials from './Socials'
import { profile, socials } from '../data'

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-inner">
        <div className="avatar">{profile.name.charAt(0)}</div>
        <div className="eyebrow">Portfolio</div>
        <h1>Hi, I'm <span className="grad">{profile.name}</span>.</h1>
        <p className="tag">{profile.tagline}. Turning ideas into practical, real-world solutions.</p>
        <div className="cta">
          <a className="btn primary" href="#stack">View tech stack</a>
          <a className="btn" href="#stats">GitHub stats</a>
        </div>
        <div style={{ marginTop: 40 }}>
          <Socials items={socials} />
        </div>
      </div>
    </header>
  )
}
