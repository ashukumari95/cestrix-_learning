import React, { createContext, useContext, useState, useEffect } from 'react'
import { BookDemoModal } from '../components/common/BookDemoModal'

interface DemoModalContextType {
  isOpen: boolean
  plan: string
  openDemoModal: (planName?: string) => void
  closeDemoModal: () => void
}

const DemoModalContext = createContext<DemoModalContextType>({
  isOpen: false,
  plan: '',
  openDemoModal: () => {},
  closeDemoModal: () => {}
})

export const DemoModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [plan, setPlan] = useState('')

  const openDemoModal = (planName: string = '') => {
    setPlan(planName)
    setIsOpen(true)
  }

  const closeDemoModal = () => {
    setIsOpen(false)
  }

  // Intercept any click on links pointing to /book-demo or plan inquiry
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a, button')
      if (target) {
        const href = target.getAttribute('href')
        const to = target.getAttribute('to')
        const targetUrl = href || to
        if (targetUrl && (targetUrl.startsWith('/book-demo') || targetUrl.includes('/book-demo?'))) {
          e.preventDefault()
          e.stopPropagation()
          const url = new URL(targetUrl, window.location.origin)
          const requestedPlan = url.searchParams.get('plan') || ''
          openDemoModal(requestedPlan)
        }
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return (
    <DemoModalContext.Provider value={{ isOpen, plan, openDemoModal, closeDemoModal }}>
      {children}
      <BookDemoModal isOpen={isOpen} onClose={closeDemoModal} initialPlan={plan} />
    </DemoModalContext.Provider>
  )
}

export const useDemoModal = () => useContext(DemoModalContext)
