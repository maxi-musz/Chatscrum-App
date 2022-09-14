import React, { Component } from 'react'

export default class Devs extends Component {

  render() {

    // Destructuring
    const { name, age, skill } = props

    return (
      <div className='dev'>
        <div>Name: {name}</div>
        <div>age: {age}</div>
        <div>Skill: {skill}</div>
      </div>

    )
  }
}
