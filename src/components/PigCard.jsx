import React, { Component } from 'react';

class PigCard extends Component {

  state = {
    clicked: false
  }


handleClick = () => {
  this.setState({
    clicked: !this.state.clicked
  })

  // this.setState((prevState) => {
  //   return {
  //     clicked: !prevState.clicked
  //   }
  // })


}



  render() {
    let {hog} = this.props
    let {name, specialty, greased, weight, 'highest medal achieved':medal} = hog
    // hog['highest medal achieved']
    let imageName = name.toLowerCase().split(" ").join("_")

    let theComponentToShow = this.state.clicked ?
      <div>
        <p>Specialty: {specialty}</p>
        <p>Greased: {greased ? "Greased" : "Not Greased"}</p>
        <p>Weight: {weight}</p>
      </div>
    :
      null

    return (
      <div className="pigTile" onClick={ this.handleClick }>
        <h3>{name}</h3>
        { theComponentToShow }
        <img src={ require(`../hog-imgs/${imageName}.jpg`) } />
        {/* <button onClick={ this.handleClick }>Toggle Info</button> */}
      </div>
    );
  }

}

export default PigCard;
