import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function CreateForm(){

  async function submitTicket(formData){
    'use server'
    const rawFormData = {
      title: formData.get('title'),
      body: formData.get('body'),
      user_email: 'shashidonon@gmail.com',
      priority: formData.get('priority')
    };
    const res = await fetch('http://localhost:4000/tickets/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rawFormData),
    })

    if (res.status === 201) {
      const random = Math.random()
      redirect(`/tickets?${random}`)
    }
  }
  return (
    <main>
        <h2 className="text-primary text-center">Raise Ticket</h2>
        <Link href="/tickets">
          <button className='btn-primary'>Back</button>    
        </Link>
        <form action={submitTicket} method="post">
          <label for="title">Title</label>
            <input id="title" type="text" name="title"/>
          <label for="text">Body</label>
            <textarea id="body" name="body" className="border-2" />
          <label for="priority">Priority</label>
            <select style={{border:'solid'}} name="priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select> 
          <button type="submit" className='btn-primary'>Create Ticket</button>
        </form>
    </main>
  )
}

