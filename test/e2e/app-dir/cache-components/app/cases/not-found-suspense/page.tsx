import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { connection } from 'next/server'

// Async component that suspends, waits, then calls notFound()
async function AsyncNotFound(): Promise<React.ReactNode> {
  await connection()
  await new Promise((resolve) => setTimeout(resolve, 100))
  notFound()
}

export default function Page() {
  return (
    <div>
      <p id="before-suspense">Content before suspense</p>
      <Suspense fallback={<p id="fallback">Loading...</p>}>
        <AsyncNotFound />
      </Suspense>
    </div>
  )
}
