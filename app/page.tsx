'use client';
import dynamic from 'next/dynamic'

const CreditCardForm = dynamic(() => import('@/components/CreditCardForm'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <CreditCardForm />
    </main>
  )
}