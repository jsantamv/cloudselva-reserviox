import Link from 'next/link'
import { Sidebar } from '@/components'

export default function NotFound() {
  return (

    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />
        <div className="p-2 w-full text-slate-900">
          <div>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
          </div>
        </div>
      </div>
    </div>



  )
}