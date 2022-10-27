const React = require('react')
const Default = require('./layouts/Default')

function Edit({ courts, players }) {

  return (
    <Default>
      <h2>Edit</h2>
      <form action={`/courts/${courts.id}?_method=PUT`} method="POST">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          defaultValue={courts.name}
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
          defaultValue={bread.image}
        />
        <label htmlFor="player">Player</label>
        <select name="player" id="player" defaultValue={courts.players}>
          {players.map((player) => {
            return (
              <option value={player.id} key={player.id}>{player.name}</option>
            )
          })}
        </select>

        <br />
        <input type="submit" />
      </form>
    </Default>
  )
}

module.exports = Edit
