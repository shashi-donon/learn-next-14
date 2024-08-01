import Link from 'next/link'

function NotFound() {
  return (
    <main>
        <h1 className='text-center text-3xl'>Ticket Not Found</h1>
        <div className="flex justify-center my-8">        
            <Link href="/">
                <button className='btn-primary'>Go Back To Tickets Page
                </button>    
            </Link>
        </div>
    </main>
  )
}

export default NotFound