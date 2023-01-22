import { Link } from '@remix-run/react'

export default function Index() {
  return <main id="content">
    <h1>take notes</h1>
    <p>Guarde seus pensamentos</p>
    <p id="cta">
      <Link to="/notes">experimente</Link>
    </p>
  </main>
}
