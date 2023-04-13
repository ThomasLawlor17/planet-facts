import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Nav from '../components/Nav'
import { mercury, venus, earth, mars, jupiter, saturn, uranus, neptune } from '../config'
import PlanetImg from '../components/planets/PlanetImg'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import theme from '../styles/theme'
import Icon from '../components/icons/Icon'


const StyledMain = styled.main`
display: grid;
grid-template-columns: auto 350px;
grid-template-rows: auto auto auto;
padding: var(--nav-height) 11.458333333% 0;

@media (max-width: 1200px) {
  padding: var(--nav-height) 5% 0;
}
@media (max-width: 900px) {
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  height: 100vh;
  padding: var(--nav-height) 5% 3.5% 5%;
}
@media (max-width: 769px) {
  padding: var(--nav-height-tablet) 5% 3.5% 5%;
}
@media (max-width: 550px) {
  padding: var(--nav-height-mobile) 5% 3.5% 5%;
}
@media (max-width: 414px) {
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;
  padding: var(--nav-height-mobile) 6.4% 40px 6.4%;
  height: auto;
}
`

const StyledImageDiv = styled.div`
grid-area: 1 / 1 / 3 / 2;
position: relative;
width: 100%;
height: 73.63328125vh;
text-align: center;
${({theme}) => theme.mixins.flexCenter};
padding-top: 20px;

img {
  position: absolute;
  width: 163px;
  height: 199px;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 87px;
}

svg {
  position: relative;
  width: fill-available;
  height: fill-available;
}

#mercury {
  max-width: 290px;
  max-height: 290px;
}
#venus {
  max-width: 400px;
  max-height: 400px;
}
#earth {
  max-width: 450px;
  max-height: 450px;
}
#mars {
  max-width: 336px;
  max-height: 336px;
}
#jupiter {
  max-width: 582px;
  max-height: 582px;
}
#saturn {
  max-width: 666.09px;
  max-height: 666.09px;
}
#uranus {
  max-width: 458px;
  max-height: 458px;
}
#neptune {
  max-width: 450px;
  max-height: 450px;
}
@media (max-width: 1100px) {
  #mercury {
    max-width: 184px;
    max-height: 184px;
  }
  #venus {
    max-width: 253px;
    max-height: 253px;
  }
  #earth {
    max-width: 285px;
    max-height: 285px;
  }
  #mars {
    max-width: 213px;
    max-height: 213px;
  }
  #jupiter {
    max-width: 369px;
    max-height: 369px;
  }
  #saturn {
    max-width: 422px;
    max-height: 422px;
  }
  #uranus {
    max-width: 290px;
    max-height: 290px;
  }
  #neptune {
    max-width: 285px;
    max-height: 285px;
  }
}
@media (max-width: 414px) {
  #mercury {
    max-width: 111px;
    max-height: 111px;
  }
  #venus {
    max-width: 154px;
    max-height: 154px;
  }
  #earth {
    max-width: 173px;
    max-height: 173px;
  }
  #mars {
    max-width: 129px;
    max-height: 129px;
  }
  #jupiter {
    max-width: 224px;
    max-height: 224px;
  }
  #saturn {
    max-width: 256px;
    max-height: 256px;
  }
  #uranus {
    max-width: 176px;
    max-height: 176px;
  }
  #neptune {
    max-width: 173px;
    max-height: 173px;
  }
}
@media (max-width: 900px) {
  grid-area: 1 / 1 / 2 / 3;
  height: 45vh;

  img {
    bottom: 10px;
  }
}
@media (max-width: 414px) {
  grid-area: 2 / 1 / 3 / 2;
  height: 304px;
  padding: 0;
}
`

const StyledContentDiv = styled.div`
grid-area: 1 / 2 / 2 / 3;
display: flex;
flex-direction: column;
gap: 23px;
padding-top: 126px;

h1, p {
  margin: 0;
}
span:not(a span) {
  margin: 0;
}

span {
  font-family: 'Spartan', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  mix-blend-mode: normal;
  opacity: 0.5;
}
a span {
  text-decoration: underline;
  font-weight: 700;
  color: var(--white);
  margin-right: 8px;
}
@media (max-width: 900px) {
  grid-area: 2 / 1 / 3 / 2;
  padding-top: 0;
  max-width: 44.1vw;

  span {
    font-size: 12px;
  }
}
@media (max-width: 414px) {
  grid-area: 3 / 1 / 4 / 2;
  max-width: 100%;
  align-items: center;
  text-align: center;
  gap: 16px;
}
`

const StyledOL = styled.ol`
grid-area: 2 / 2 / 3 / 3;
margin: auto 0 87px 0;
counter-reset: item;
list-style-type: none;
padding: 0;


li {
  ${({theme}) => theme.mixins.button};
  &:not(:first-of-type) {
    margin-top: 16px;
  }
}
@media (max-width: 900px) {
  margin: auto 0;
}
@media (max-width: 414px) {
  grid-area: 1 / 1 / 2 / 2;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  li:not(:first-of-type) {
    margin: 0;
  }
  li {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  &::after {
    content: '';
    position: absolute;
    left: -6.4%;
    bottom: 0;
    width: 100vw;
    height: 1px;
    background-color: var(--white);
    opacity: 20%;
  }
}
`
const StyledUL = styled.ul`
grid-area: 3 / 1 / 4 / 3;
margin: 0;
padding: 0;
list-style: none;
width: 100%;
${({theme}) => theme.mixins.flexCenter};
gap: 2.7027027027%;
li {
  ${({theme}) => theme.mixins.infoBox};
  width: 100%;
}
@media (max-width: 900px) {
  margin-top: auto;
}
@media (max-width: 414px) {
  grid-area: 4 / 1 / 5 / 2;
  flex-direction: column;
  gap: 8px;
  margin-top: 28px;
}
`

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
    <StyledMain>
      <StyledImageDiv className="planet-image">
        <PlanetImg name={content === 'structure' ? `${planet}-internal` : planet}/>
        {content === 'geology' ? <img src={process.env.PUBLIC_URL + `/assets/geology-${planet}.png`}/> : ''}
      </StyledImageDiv>
      <StyledContentDiv>
        <h1>{data?.name}</h1>
        <p>{data && data[`${content}`].content}</p>
        <span>Source : <a href={data && data[`${content}`].source} rel='noopener noreferrer' target='_blank'><span>Wikipedia</span><Icon name='source'/></a></span>
      </StyledContentDiv>
      <StyledOL planet={planet}>
        <li onClick={() => setContent('overview')} className={content === 'overview' ? 'active' : ''}><span>OVERVIEW</span></li>
        <li onClick={() => setContent('structure')} className={content === 'structure' ? 'active' : ''}><span className='first'>INTERNAL </span><span>STRUCTURE</span></li>
        <li onClick={() => setContent('geology')} className={content === 'geology' ? 'active' : ''}><span className='first'>SURFACE </span><span>GEOLOGY</span></li>
      </StyledOL>
      <StyledUL>
        <li><span>ROTATION TIME</span><span>{data?.rotation}</span></li>
        <li><span>REVOLUTION TIME</span><span>{data?.revolution}</span></li>
        <li><span>RADIUS</span><span>{data?.radius}</span></li>
        <li><span>AVERAGE TEMP</span><span>{data?.temperature}</span></li>
      </StyledUL>
    </StyledMain>
    </>
    </ThemeProvider>
  )
}

export default Planet