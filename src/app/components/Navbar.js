"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()  
  return (
    <nav>
      <h1 className='text-2xl'>Simple Service Now Clone</h1>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Dashboard</Link>
      <Link className={`link ${pathname.match('/tickets') ? 'active' : ''}`} href="/tickets">Tickets</Link>
    </nav>
  )
}