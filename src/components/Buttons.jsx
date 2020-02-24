import React, { Component } from 'react';

class Buttons extends Component {

  handleChange = (e) => {
    this.props.handleFilterTerm(e.target.value);
  }

  render() {
    return (
      <div>
        <select value={this.props.filterTerm} onChange={this.handleChange}>
          <option value="All">All</option>
          <option value="Greased">Greased</option>
          <option value="Non Greased">Non Greased</option>
        </select>
      </div>
    );
  }

}

export default Buttons;
