import Chevron from './Chevron'
import Hamburger from './Hamburger'
import Source from './Source'

const Icon = ({name}) => {
    switch (name) {
        case 'chevron':
            return <Chevron/>
        case 'hb':
            return <Hamburger/>
        case 'source':
            return <Source/>
        default:
            return null
    }
}

export default Icon