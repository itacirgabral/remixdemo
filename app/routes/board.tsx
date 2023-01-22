import { Link, Outlet } from '@remix-run/react'

export default function Index() {
  return <main id="content">
    <h1>boards</h1>
    <p>
      <Link to="red">red</Link>
    </p>
    <p>
      <Link to="green">green</Link>
    </p>
    <p>
      <Link to="blue">blue</Link>
    </p>
    <Outlet />
  </main>
}
