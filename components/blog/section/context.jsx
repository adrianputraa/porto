'use client'
import { createContext } from 'react'

export const ArticleContext = createContext()

export default function ArticleProvider({ value, children }) {
    return (
        <ArticleContext.Provider value={value}>
            {children}
        </ArticleContext.Provider>
    )
}