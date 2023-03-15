import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './icons/Icon'
import styled from 'styled-components'

const Nav = () => {



    const planets = [
        'mercury',
        'venus',
        'earth',
        'mars',
        'jupiter',
        'saturn',
        'uranus',
        'neptune',
    ]

  return (
    <nav>
        <h1>THE PLANETS</h1>
        <div className="links">
            {planets.map((planet, i) => (
                <Link key={i} to={`/${planet}`}>{planet}</Link>
            ))}
        </div>
        <div className="hb">
            <Icon name='hb'/>
        </div>
    </nav>
  )
}

export default Nav