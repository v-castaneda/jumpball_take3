const React = require('react')
const Default = require('./layouts/Default')

function Index ({players, courts, title})  {
  return (
    <Default title={title}>
      {/* <h3>Bakers</h3>
      {console.log(bakers)}
      <ul>
        {
          bakers.map((baker)=> {
            return (
              <li className='nobull' key={baker._id}>
                <a href={`/bakers/${baker._id}`}>{baker.name}</a>
              </li>
            )
          })
        }
      </ul> */}

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
  
      {/* <h3>Breads</h3>
        {
          breads.map((bread, index)=> {
            return (
              <li className='nobull' key={bread._id}>
                <a href={`/breads/${bread._id}`}>
                  {bread.name}
                </a>
              </li>
            )
          })
        }        
      <div className="newButton">
          <a href="/breads/new"><button>Add a new bread</button></a>
      </div> */}

    </Default>
  )
}

module.exports = Index
