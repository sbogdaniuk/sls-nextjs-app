import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About (static page)</a>
        </Link>
        <Link href="/some/not/existing">
          <a>Page 404 (client)</a>
        </Link>
      </nav>
    </header>
  )
}
