import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Nav from '../components/Nav'
import { mercury, venus, earth, mars, jupiter, saturn, uranus, neptune } from '../config'
import PlanetImg from '../components/planets/PlanetImg'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import theme from '../styles/theme'
import Icon from '../components/icons/Icon'

const Planet = () => {
  const planet = useParams().planet
  const [data, setData] = useState()
  const [content, setContent] = useState('overview')
  const [planets] = useState([mercury, venus, earth, mars, jupiter, saturn, uranus, neptune])


  useEffect(() => {
    let data = planets.find(p => p.name.toLowerCase() === planet)
    setData(data)
  }, [planet, planets])

  return (
    <ThemeProvider theme={theme} >
      <GlobalStyle/>
    <>
    <Nav planet={planet}/>
    <main>
      <div className="planet-image">
        <PlanetImg name={content === 'structure' ? `${planet}-internal` : planet}/>
        {content === 'geology' ? <img src={process.env.PUBLIC_URL + `/assets/geology-${planet}.png`}/> : ''}
      </div>
      <div className="content">
        <h1>{data?.name}</h1>
        <p>{data && data[`${content}`].content}</p>
        <span>Source: <a href={data && data[`${content}`].source} rel='noopener roreferrer' target='_blank'><span>Wikipedia</span><Icon name='source'/></a></span>
      </div>
      <ol>
        <li onClick={() => setContent('overview')} className={content === 'overview' ? 'active' : ''}><span>OVERVIEW</span></li>
        <li onClick={() => setContent('structure')} className={content === 'structure' ? 'active' : ''}><span>INTERNAL STRUCTURE</span></li>
        <li onClick={() => setContent('geology')} className={content === 'geology' ? 'active' : ''}><span>SURFACE GEOLOGY</span></li>
      </ol>
      <ul>
        <li><span>ROTATION TIME</span><span>{data?.rotation}</span></li>
        <li><span>REVOLUTION TIME</span><span>{data?.revolution}</span></li>
        <li><span>RADIUS</span><span>{data?.radius}</span></li>
        <li><span>AVERAGE TEMP</span><span>{data?.temperature}</span></li>
      </ul>
    </main>
    </>
    </ThemeProvider>
  )
}

export default Planet