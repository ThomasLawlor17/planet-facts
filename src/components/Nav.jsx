import React, { useState } from 'react'
import { NavLink as Link} from 'react-router-dom'
import Icon from './icons/Icon'
import styled from 'styled-components'

const StyledNav = styled.nav`
${({theme}) => theme.mixins.flexBetween};
border-bottom: 1px solid rgba(255,255,255,.2);
height: var(--nav-height);
width: 100%;
position: absolute;
top: 0;
left: 0;
span.logo {
    font-family: 'Antonio';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.05px;
    text-transform: uppercase;
    color: var(--white);
    user-select: none;
    margin-left: 2.22222222222%;
}
.hb {
    display: none;
    cursor: pointer;
}
.links {
    ${({theme}) => theme.mixins.flexCenter};
    gap: 33px;
    margin-right: 2.777777778%;
    a {
        position: relative;
        span {
            color: var(--white);
            font-family: 'Spartan', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 11px;
            line-height: 25px;
            letter-spacing: 1px; 
            text-transform: uppercase;
            opacity: 70%;
            user-select: none;
        }

        &::before {
            content: '';
            display: block;
            width: 100%;
            position: absolute;
            top: -29px;
        }
        &.mercury-link::before {
            background-color: var(--mercury);
        }
        &.venus-link::before {
            background-color: var(--venus);
        }
        &.earth-link::before {
            background-color: var(--earth);
        }
        &.mars-link::before {
            background-color: var(--mars);
        }
        &.jupiter-link::before {
            background-color: var(--jupiter);
        }
        &.saturn-link::before {
            background-color: var(--saturn);
        }
        &.uranus-link::before {
            background-color: var(--uranus);
        }
        &.neptune-link::before {
            background-color: var(--neptune);
        }

        svg {
            display: none;
        }

        &:hover, &[aria-current='page'] {
            span {
                opacity: 1;
            }
            @media (min-width: 770px) {
                &::before {
                    height: 4px;
                }
            }
        }
        &[aria-current='page'] {
            span {
                color: var(--${props => props.planet});
            }
        }
    }
}
@media (max-width: 850px) {
    .links {
        gap: 22px;
    }
}
@media (max-width: 769px) {
    height: var(--nav-height-tablet);
    flex-direction: column;
    justify-content: center;
    gap: 39px;
    span.logo {
        margin: 0;
    }
    .links {
        gap: 0;
        justify-content: space-evenly;
        width: 100%;
        margin: 0;
        a::before {
            width: 0;
        }
    }
}
@media (max-width: 550px) {
    height: var(--nav-height-mobile);
    flex-direction: row;
    justify-content: space-between;
    span.logo {
        margin-left: 24px;
    }
    .hb {
        display: inline;
        margin-right: 24px;
        width: 24px;
        height: 17px;
        &.active {
            svg {
                opacity: 24.87%;
            }
        }
    }
    .links {
        position: absolute;
        top: var(--nav-height-mobile);
        width: 100%;
        height: calc(100vh - var(--nav-height-mobile));
        padding: 24px;
        left: 0;
        flex-direction: column;
        justify-content: flex-start;
        visibility: hidden;
        transform: translateX(-100vw);
        z-index: -1;
        background-color: var(--navy);
        transition: all 0.4s ease-in-out;

        &.open {
            transform: translateX(0);
        }

        a {
            span {
                font-size: 15px;
                line-height: 25px;
                opacity: 1;
            }
            padding: 20px 0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 25px;
            border-bottom: 1px solid rgba(255,255,255,.1);

            &::before {
                position: relative;
                width: 20px;
                height: 20px;
                border-radius: 100%;
                top: auto;
            }
            svg {
                display: inline;
                margin-left: auto;
            }
        }

        &.open {
            visibility: visible;
            z-index: 3;
        }
    }
}
`

const Nav = ({planet}) => {
    const [navOpen, setNavOpen] = useState(false)


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
    <StyledNav planet={planet}>
        <span className='logo'>THE PLANETS</span>
        <div className={`links${navOpen ? ' open' : ''}`}>
            {planets.map((planet, i) => (
                <Link key={i} to={`/${planet}`} className={`${planet}-link`} onClick={() => setNavOpen(false)}><span>{planet}</span><Icon name='chevron'/></Link>
            ))}
        </div>
        <div className={`hb${navOpen ? ' active' : ''}`}onClick={() => setNavOpen(navOpen => !navOpen)}>
            <Icon name='hb'/>
        </div>
    </StyledNav>
  )
}

export default Nav