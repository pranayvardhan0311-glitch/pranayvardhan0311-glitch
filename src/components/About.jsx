import { profile } from '../data'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="wrap">
        <div className="eyebrow">About</div>
        <h2>A bit about me</h2>
        <p style={{ marginTop: 18 }}>{profile.about}</p>
      </div>
    </section>
  )
}
