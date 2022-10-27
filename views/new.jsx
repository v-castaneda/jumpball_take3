const React = require('react')
const Default = require('./layouts/Default')

function New({ players }) {
  // confirm we are getting our court data in terminal
  console.log(players.name)
  return (
    <Default>
      <h2>Add a new court</h2>
      <form action="/courts" method="POST">

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          required
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          required
        />

        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
        />

        <br />

        <input type="submit" />

      </form>
    </Default>
  )
}

module.exports = New
