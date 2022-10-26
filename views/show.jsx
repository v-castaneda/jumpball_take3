const React = require('react')
const Default = require('./layouts/Default')

function Show ({court}) {
  // confirm we are getting our court data in terminal
  // console.log(court.name)
    return (
      <Default>
        <h3>{court.name}</h3>
        <p>
          Located at {`${court.address}, ${court.city}`}
        </p>
        {/* <img src={bread.image} alt={bread.name} />
        <p>{bread.getBakedBy()}</p>
        <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
        <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
          <input type='submit' value="DELETE"/>
        </form> */}

        <li className='nobull'><a href="/courts">Go home</a></li>
      </Default>
    )
}

module.exports = Show
