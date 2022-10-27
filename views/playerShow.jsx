const React = require('react')
const Default = require('./layouts/Default')

function Show({ player }) {
  return (
    <Default>
      <h3>{player.name}</h3>
      <p>{player.name}, usually available to play {player.gameDays}. If only we didn't have to work.</p>
      <p>About {player.name}: {player.statistics}</p>
      <h3>Courts {player.name} has played at</h3>
      <ul>
        {
          player.courts.map((court) => {
            return (
              <li key={court.id}>
                {court.name}
              </li>
            )
          })
        }
      </ul>
      <form action={`/players/${player._id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
    </Default>
  )
}

module.exports = Show