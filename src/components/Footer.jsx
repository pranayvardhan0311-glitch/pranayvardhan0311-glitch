import Socials from './Socials'
import { profile, socials } from '../data'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="name">{profile.name}</div>
        <p style={{ marginTop: 6 }}>{profile.tagline}</p>
        <div style={{ marginTop: 22, display: 'flex', justifyContent: 'center' }}>
          <Socials items={socials} />
        </div>
        <p style={{ marginTop: 24, fontSize: '0.85rem', opacity: 0.6 }}>
          © {new Date().getFullYear()} {profile.name}. Built from a GitHub profile README.
        </p>
      </div>
    </footer>
  )
}
