import { notFound } from "next/navigation"
import { Suspense } from "react"

export const dynamicParams = true // which is default value, trying to fetch data that has not been generated yet
// then after dynamic generation it can use static generation for that page
export async function generateStaticParams(){
    // fetch entire list of tickets 
    // and map through them
    const res = await fetch('http://localhost:4000/tickets')
    const tickets = await res.json()
    return(
        tickets.map((ticket)=>({
            id: ticket.id
        }))
    )

}

async function getTicket(id) {
    const res = await fetch('http://localhost:4000/tickets/'+id, {
      next: {
        revalidate: 60
      }
    })
    if(!res.ok){
        notFound()
    }
    return res.json()
  }

export default async function TicketDetails({params}) {
    const {id,title,body,priority}  = await getTicket(params.id)
  return (
    <Suspense>
    <div >
    <p>{title}</p>
    <p>{body}</p>
    <div className={`pill ${priority}`}>{priority} priority</div>
    </div>
    </Suspense>
    
  )
}
