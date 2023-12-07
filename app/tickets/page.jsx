
// page files are by default server components

import Navbar from "../components/Navbar";
import TicketList from "./TicketList";

// 
export default function Tickets() {
  return (
    <div className="flex flex-col justify-center align-center">
    <p>Tickets</p>
    <TicketList/>
    </div>
  )
}
