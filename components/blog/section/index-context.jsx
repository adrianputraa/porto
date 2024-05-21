'use client'
import { createContext } from 'react'

export const IndexContext = createContext()

export default function IndexProvider({ value, children }) {
    return (
        <IndexContext.Provider value={value}>
            {children}
        </IndexContext.Provider>
    )
}