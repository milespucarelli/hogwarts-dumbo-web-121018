import React from 'react'
import AugustusGloop from '../hog-imgs/augustus_gloop.jpg'
import BayOfPigs from '../hog-imgs/bay_of_pigs.jpg'
import Cherub from '../hog-imgs/cherub.jpg'
import GalaxyNote from '../hog-imgs/galaxy_note.jpg'
import LeggoMyEggo from '../hog-imgs/leggo_my_eggo.jpg'
import Mudblood from '../hog-imgs/mudblood.jpg'
import PiggySmalls from '../hog-imgs/piggy_smalls.jpg'
import PorkChop from '../hog-imgs/porkchop.jpg'
import RainbowDash from '../hog-imgs/rainbowdash.jpg'
import Sobriety from '../hog-imgs/sobriety.jpg'
import TheProsciuttoConcern from '../hog-imgs/the_prosciutto_concern.jpg'
import Trouble from '../hog-imgs/trouble.jpg'
import TruffleShuffle from '../hog-imgs/truffleshuffle.jpg'

class HogTile extends React.Component {
  state = {
    clicked: false,
    hidden: false
  }

  handleClick = () => this.setState({clicked: !this.state.clicked})

  handleHide = () => this.setState({hidden: !this.state.hidden})

  render() {
    let image = ''
    switch (this.props.hog.name) {
      case 'Augustus Gloop':
        image = AugustusGloop
        break
      case 'Bay of Pigs':
        image = BayOfPigs
        break
      case 'Cherub':
        image = Cherub
        break
      case 'Galaxy Note':
        image = GalaxyNote
        break
      case 'Leggo My Eggo':
        image = LeggoMyEggo
        break
      case 'Mudblood':
        image = Mudblood
        break
      case 'Piggy smalls':
        image = PiggySmalls
        break
      case 'Porkchop':
        image = PorkChop
        break
      case 'Rainbowdash':
        image = RainbowDash
        break
      case 'Sobriety':
        image = Sobriety
        break
      case 'The Prosciutto Concern':
        image = TheProsciuttoConcern
        break
      case 'Trouble':
        image = Trouble
        break
      case 'TruffleShuffle':
        image = TruffleShuffle
        break
    }
    return (
      <div>
        {this.state.hidden ?
          <div>
            <h1>{this.props.hog.name}   </h1>
            <i className='fas fa-caret-square-down' onClick={this.handleHide}></i>
          </div> :
          <div>
            <h1>{this.props.hog.name}   </h1>
            <i className='far fa-caret-square-up' onClick={this.handleHide}></i><br/>
            <img src={image} alt="" onClick={this.handleClick}/>
            {this.state.clicked &&
              <div>
                <h4>Details</h4>
                <p>Weight: {this.props.hog.weight}</p>
                <p>Specialty: {this.props.hog.specialty}</p>
                <p>Highest Medal: {this.props.hog['highest medal achieved']}</p>
                <p>{this.props.hog.greased ? 'Greased' : 'Not Greased'}</p>
                <br/>
                <br/>
              </div>}
            </div>
          }
        </div>
      )
  }
}

export default HogTile;
