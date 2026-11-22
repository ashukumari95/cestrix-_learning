import React, { createContext, useContext, useState, useEffect } from 'react'
import { BookDemoModal } from '../components/common/BookDemoModal'
import { CheckoutModal } from '../components/common/CheckoutModal'

interface DemoModalContextType {
  isOpen: boolean
  plan: string
  openDemoModal: (planName?: string) => void
  closeDemoModal: () => void
  isCheckoutOpen: boolean
  checkoutPlan: string
  openCheckoutModal: (planName?: string) => void
  closeCheckoutModal: () => void
}

const DemoModalContext = createContext<DemoModalContextType>({
  isOpen: false,
  plan: '',
  openDemoModal: () => {},
  closeDemoModal: () => {},
  isCheckoutOpen: false,
  checkoutPlan: '',
  openCheckoutModal: () => {},
  closeCheckoutModal: () => {}
})

export const DemoModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [plan, setPlan] = useState('')

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [checkoutPlan, setCheckoutPlan] = useState('')

  const openDemoModal = (planName: string = '') => {
    setPlan(planName)
    setIsOpen(true)
  }

  const closeDemoModal = () => {
    setIsOpen(false)
  }

  const openCheckoutModal = (planName: string = 'growth') => {
    setCheckoutPlan(planName)
    setIsCheckoutOpen(true)
  }

  const closeCheckoutModal = () => {
    setIsCheckoutOpen(false)
  }

  // Intercept any click on links pointing to /book-demo, plan buy, or checkout
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a, button')
      if (target) {
        const text = (target.textContent || '').trim().toLowerCase()
        const href = target.getAttribute('href')
        const to = target.getAttribute('to')
        const dataAction = target.getAttribute('data-action')
        const targetUrl = href || to

        // Buy Now triggers Checkout Modal
        if (dataAction === 'buy' || text === 'buy now' || (targetUrl && targetUrl.includes('action=buy'))) {
          e.preventDefault()
          e.stopPropagation()
          let requestedPlan = 'growth'
          if (targetUrl) {
            try {
              const url = new URL(targetUrl, window.location.origin)
              requestedPlan = url.searchParams.get('plan') || 'growth'
            } catch {}
          }
          openCheckoutModal(requestedPlan)
          return
        }

        // Demo / Trial triggers Book Demo Modal
        if (targetUrl && (targetUrl.startsWith('/book-demo') || targetUrl.includes('/book-demo?'))) {
          e.preventDefault()
          e.stopPropagation()
          let requestedPlan = ''
          try {
            const url = new URL(targetUrl, window.location.origin)
            requestedPlan = url.searchParams.get('plan') || ''
          } catch {}
          openDemoModal(requestedPlan)
        }
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return (
    <DemoModalContext.Provider
      value={{
        isOpen,
        plan,
        openDemoModal,
        closeDemoModal,
        isCheckoutOpen,
        checkoutPlan,
        openCheckoutModal,
        closeCheckoutModal
      }}
    >
      {children}
      <BookDemoModal isOpen={isOpen} onClose={closeDemoModal} initialPlan={plan} />
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={closeCheckoutModal}
        initialPlan={checkoutPlan}
      />
    </DemoModalContext.Provider>
  )
}

export const useDemoModal = () => useContext(DemoModalContext)
