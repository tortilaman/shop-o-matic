import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

/**
 * Navigation buttom
 * 
 * @param {String} label - The link text
 * @param {String} to - Where this link should go 
 */
const NavButton = ({label, to}) => {
    let match = useRouteMatch({
        path: to
    })

    return (
        <div className="pb-2">
            <Link to={to} className={`text-gray-600  ${match ? 'text-indigo-500' : ''}`}>{label}</Link>
        </div>
    )
}

/**
 * The navigation panel itself
 */
const NavigationPanel = () => {
    return (
        <nav className="w-1/4 max-w-xs bg-white shadow-xl h-screen p-8">
            <h1 className="text-2xl font-thin pb-8">Shop-o-Matic</h1>
            <NavButton label="Shopping List" to="/list" />
            <NavButton label="Food Library" to="/food" />
        </nav>
    )
}

export default NavigationPanel
