import { createContext, useContext } from 'react'

const References = createContext(null)

export const useReferences = () => {
  return useContext(References)
}

export const ReferencesProvider = ({ references, color, children }) => {
  if (references) {
    Object.keys(references).map((d, i) => {
      references[d] = { ...references[d], number: i + 1 }
    })
  }
  return (
    <References.Provider value={{ references: references, color: color }}>
      {children}
    </References.Provider>
  )
}
