import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Restaurant extends Component {
  constructor(props){
    super(props)
    const{ match } = props

    this.state={
      restaurantID: match.params.id
    }
  }

  componentDidUpdate(prevProps){
    const prevMatch = prevProps.match
    const{ match } = this.props
    if(match.parms.id != prevMatch.params.id){
      this.setState({restaurantID: match.params.id})
    }
  }

  render() {
    const{ restaurantId } = this.state
    const restaurant = restaurant.find((r)=> r.id ==restaurantId)

    return(
      <div>
        {restaurant &&
          <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.instructions}</p>
          </div>
        }
      </div>
    )
  }
}

export default Restaurant
