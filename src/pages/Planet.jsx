import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Nav from '../components/Nav'
import { mercury, venus, earth, mars, jupiter, saturn, uranus, neptune } from '../config'
import PlanetImg from '../components/planets/PlanetImg'

const Planet = () => {
  const planet = useParams().planet
  const [data, setData] = useState()
  const [planets] = useState([mercury, venus, earth, mars, jupiter, saturn, uranus, neptune])


  useEffect(() => {
    let data = planets.find(p => p.name.toLowerCase() === planet)
    setData(data)
  }, [planet, planets])

  return (
    <>
    <Nav/>
    <div>
      {data?.name}
      {data?.overview.content}
      <PlanetImg name={planet}/>
    </div>
    </>
  )
}

export default Planet