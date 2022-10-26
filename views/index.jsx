const React = require('react')
const Default = require('./layouts/Default')

function Index ({players, courts, title})  {
  return (
    <Default title={title}>

      <h3>Players</h3>
      {console.log(players)}
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
      {console.log(courts)}
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
        
      {/*<div className="newButton">
          <a href="/breads/new"><button>Add a new bread</button></a>
      </div> */}

    </Default>
  )
}

module.exports = Index
