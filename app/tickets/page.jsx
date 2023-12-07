
// page files are by default server components

import { Suspense } from "react";
import Navbar from "../components/Navbar";
import TicketList from "./TicketList";
import Loading from "../loading";

// 
export default function Tickets() {
  return (
    <main>
    <div className="flex flex-col justify-center align-center">
    <p>Tickets</p>
    </div>
    <Suspense fallback={Loading()}>
    <TicketList/>
    </Suspense>
    </main>

  )
}
