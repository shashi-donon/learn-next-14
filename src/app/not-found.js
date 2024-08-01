import { Button } from "@headlessui/react"
import Link from "next/link"
function NotFound() {
  return (
    <main className='text-center'>
       <Button className="btn-primary"><Link href="/">Go Back To Dashboard</Link></Button>
       <h1 className='text-3xl'>Oops You landed....in space, Go back to Earth</h1>
    </main>
  )
}

export default NotFound