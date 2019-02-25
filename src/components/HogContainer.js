import React from 'react'
import hogs from '../porkers_data'
import HogTile from './HogTile'

class HogContainer extends React.Component {
  fixWeight = () => {
    return hogs.map(hog => {
      let weirdWeight = parseFloat(hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) * 309
      hog.weight = weirdWeight.toFixed(2)
      return hog
    })
  }

  state = {
    hogs: this.fixWeight(),
    searchTerm: '',
    filteredHogs: this.fixWeight(),
    checked: 'off'
  }

  handleChange = (e) => {
    if(e.target.value === 'original') {
      let newHogs = this.fixWeight()
      this.setState(
        {
          hogs: newHogs,
          filteredHogs: newHogs.filter(hog => hog.name.includes(this.state.searchTerm))
        })
    } else if(e.target.value === 'name') {
        let newHogs = this.state.hogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name))
        this.setState(
          {
            hogs: newHogs,
            filteredHogs: newHogs.filter(hog => hog.name.includes(this.state.searchTerm))
          })
    } else if(e.target.value === 'weight') {
        let newHogs = this.state.hogs.sort((hog1, hog2) => hog1.weight - hog2.weight)
        this.setState(
          {
            hogs: newHogs,
            filteredHogs: newHogs.filter(hog => hog.name.includes(this.state.searchTerm))
          }
        )
    }
  }

  handleCheck = (e) => {
    console.log(e.target)
    if(e.target.value === 'off') {
      this.setState(
        {
          checked: 'on',
          filteredHogs: this.state.hogs.filter(hog => hog.greased)
        })
    } else {
      this.setState(
        {
          checked: 'off',
          filteredHogs: this.state.hogs
        }
      )
    }
  }

  handleSearch = (e) => {
    let filteredHogs = this.state.hogs.filter(hog => hog.name.includes(e.target.value))
    this.setState({searchTerm: e.target.value, filteredHogs: filteredHogs})
  }

  render() {
    let hogTiles = this.state.filteredHogs.map((hog, index) => <HogTile key={index} hog={hog}/>)
    return (
      <div>
        <input type="text" value={this.state.searchTerm} onChange={this.handleSearch} placeholder="Search hogs..."/><br/>
        <label htmlFor='sortby'>Sort By:   </label>
        <select name='sortby' onChange={this.handleChange}>
          <option value='original'>---</option>
          <option value='name'>Name</option>
          <option value='weight'>Weight</option>
        </select><br/>
        <label htmlFor='greased'>Greased   </label>
        <input type='checkbox' name='greased' value={this.state.checked} onChange={this.handleCheck}/>
        {hogTiles}
      </div>
    )
  }
}

export default HogContainer;
