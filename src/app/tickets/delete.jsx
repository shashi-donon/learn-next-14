'use client'
import {db} from '../../../_data/db'

function deleteTicket(id){  
  const index = db.indexOf(id);
  if (index > -1) { 
    db.splice(index, 1);
  }
  window.location.reload();
  console.log('####',id)

}

function DeleteTicket({id}) {
  return (
    <main>
        <button style={{display:'inline'}} className='btn-primary' onClick={()=>deleteTicket(id)}>delete</button>
    </main>
  )
}

export default DeleteTicket