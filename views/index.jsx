const React = require('react')
const Default = require('./layouts/Default')

function Index ({courts, players, title})  {
  // confirm we are getting our courts and players data in terminal
  // {console.log(players)}
  // {console.log(courts)}
  return (
    <Default title={title}>
      <h3>Players</h3>
        <ul>
          {
            players.map((player) => {
              return (
                <li className='nobull' key={player._id}>
                  <a href={`/players/${player._id}`}>{player.name}</a>
                </li>
              )
            })
          }
        </ul>

      <h3>Courts</h3>
        <ul>
          {
            courts.map((court) => {
              return (
                <li className='nobull' key={court._id}>
                  <a href={`/courts/${court._id}`}>{court.name}</a>
                </li>
              )
            })
          }
        </ul>

      {/* <div className="newButton">
          <a href="/courts/new"><button>Add a new court</button></a>
      </div> */}

    </Default>
  )
}

module.exports = Index
