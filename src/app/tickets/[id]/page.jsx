import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../../loading";
import {db} from '../../../../_data/db'

export async function generateStaticParams(){
  const res = await fetch('http://localhost:4000/tickets/');
  const tickets = await res.json()
  return tickets.map(ticket=>({ticket:ticket.id}))
}

async function getTicket(id){
  try{
    // await new Promise(resolve=>setTimeout(resolve,3000));
    // const res = await fetch(`http://localhost:4000/tickets/${id}`,{
    //     next:{
    //       revalidate:60
    //     }
    //   })
    //   if(!res.ok){
    //     notFound()
    //   }
    //   let body= await res.json()


      return db.find(elem =>elem['id']==id)
  }catch(error){
      notFound()
  }
}

async function TicketDetails({params}) {
  const {id} = params
  const ticket = await getTicket(id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <Link href="/tickets">
        <button className='btn-primary'>Back</button>    
      </Link>
      <Suspense fallback={<Loading/>}>
        <div className='card'>
            <h1>{ticket.title}</h1>
            <small>Created By {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority}priority
            </div>
        </div>
      </Suspense>
    </main>
  )
}

export default TicketDetails