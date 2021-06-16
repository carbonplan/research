import { createContext, useContext } from 'react'

const References = createContext(null)

export const useReferences = () => {
  return useContext(References)
}

export const ReferencesProvider = ({ references, color, children }) => {
  return (
    <References.Provider value={{ references: references, color: color }}>
      {children}
    </References.Provider>
  )
}
