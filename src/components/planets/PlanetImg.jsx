import Earth from "./Earth"
import EarthInternal from "./EarthInternal"
import Jupiter from "./Jupiter"
import JupiterInternal from "./JupiterInternal"
import Mars from "./Mars"
import MarsInternal from "./MarsInternal"
import Mercury from "./Mercury"
import MercuryInternal from "./MercuryInternal"
import Neptune from "./Neptune"
import NeptuneInternal from "./NeptuneInternal"
import Saturn from "./Saturn"
import SaturnInternal from "./SaturnInternal"
import Uranus from "./Uranus"
import UranusInternal from "./UranusInternal"
import Venus from "./Venus"
import VenusInternal from "./VenusInternal"


const PlanetImg = ({name}) => {
    switch (name) {
        case 'mercury':
            return <Mercury/>
        case 'mercury-internal':
            return <MercuryInternal/>
        case 'venus':
            return <Venus/>
        case 'venus-internal':
            return <VenusInternal/>
        case 'earth':
            return <Earth/>
        case 'earth-internal':
            return <EarthInternal/>
        case 'mars':
            return <Mars/>
        case 'mars-internal':
            return <MarsInternal/>
        case 'jupiter':
            return <Jupiter/>
        case 'jupiter-internal':
            return <JupiterInternal/>
        case 'saturn':
            return <Saturn/>
        case 'saturn-internal':
            return <SaturnInternal/>
        case 'uranus':
            return <Uranus/>
        case 'uranus-internal':
            return <UranusInternal/>
        case 'neptune':
            return <Neptune/>
        case 'neptune-internal':
            return <NeptuneInternal/>
        default:
            return null
    }
}

export default PlanetImg