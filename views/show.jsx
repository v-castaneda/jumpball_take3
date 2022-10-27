const React = require('react')
const Default = require('./layouts/Default')

function Show({ court }) {
  // confirm we are getting our court data in terminal
  // console.log(court.name)
  return (
    <Default>
      <h3>{court.name}</h3>
      <p>
        Located at {`${court.address}, ${court.city}`}
      </p>
      <img src={court.image} alt={court.name} />
      {/* TODO: Need to fix the getBlessedBy() helper method in court.js */}
      {/* <p>{court.getBlessedBy()}</p> */}
      <a href={`/courts/${court.id}/edit`}><button>Edit</button></a>
      {/* Will leave bottom commented out. Don't think we want users deleting courts */}
      {/* <form action={`/court/${court.id}?_method=DELETE`} method="POST">
          <input type='submit' value="DELETE"/>
        </form> */}

    </Default>
  )
}

module.exports = Show
