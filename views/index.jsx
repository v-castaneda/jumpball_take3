const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, bakers, title})  {
  return (
    <Default title={title}>
      <h3>Bakers</h3>
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
      </ul>
  
      <h3>Breads</h3>
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
      </div>

      <h3>Players</h3>
      <ul className='nobull'>
        {
          
        }
      </ul>

    </Default>
  )
}

module.exports = Index
