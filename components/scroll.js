import { useRef, createContext, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

const ScrollContext = createContext(null)

export const useCustomScroll = () => {
  return useContext(ScrollContext)
}

export const ScrollProvider = ({ children }) => {
  const router = useRouter()
  const ref = useRef(true)

  useEffect(() => {
    // Disallow custom scrolling on browser navigation to ensure
    // that automatic scroll restoration is used
    router.beforePopState(() => {
      ref.current = false
      return true
    })
  }, [])

  return <ScrollContext.Provider value={ref}>{children}</ScrollContext.Provider>
}
