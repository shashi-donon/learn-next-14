import { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading';
function Tickets() {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <TicketList/>
      </Suspense>
    </div>
  )
}

export default Tickets

