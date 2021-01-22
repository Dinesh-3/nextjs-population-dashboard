import Link from 'next/link'
import NotFoundComponent from "../components/NotFound"

export default function PageNotFound() {
  return <>
    <NotFoundComponent />
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}