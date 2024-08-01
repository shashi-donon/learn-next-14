import React from 'react'
import Link from 'next/link'

export const revalidate = 60 // revalidate the data at most every hour
async function getTickets(){
    try{
        await new Promise(resolve => setTimeout(resolve, 4000))
        const res = await fetch(`http://localhost:4000/tickets/`,{
            next: {
                revalidate: 0 // use 0 to opt out of using cache
            }
        })
        const tickets = await res.json();
        return tickets
    }catch(error){
        return []
    }
}

async function TicketList() {
  const tickets = await getTickets()
  return (
    <main>
    <div className='buttons'>
        <Link href="/">
            <button className='btn-primary'>Back</button>    
        </Link>
        <Link href="/tickets/create">
            <button className='btn-secondary'>Create Ticket</button>    
        </Link>
    </div>
    {
    tickets.map(ticket=>(
        <div key={ticket.id} className='card my-5'>
            <Link href={`/tickets/${ticket.id}`}>
                <h2 className='text-1xl'>{ticket.title}</h2>
                <p>{ticket.body.slice(0,200)}...</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </Link>
        </div>
    ))
    }
    {tickets.length===0 && (
        <p className='text-center'> There are no open tickets</p>
    )}
    </main>
  )
}

export default TicketList