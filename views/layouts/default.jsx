const React = require('react')

function Default(html) {
  return (
    <html>
    <head>
      <title>{html.title || 'Default'}</title>
      <link rel="stylesheet" href="/css/main.css" />
    </head>
    <body>
      <div className="wrapper">
        <header>
          <h1>JumpBall Meet Up</h1>
          <nav id="nav">
            <ul id="navUl">
                <li><a href='/courts'>Home</a></li>
                <li><a href='/courts/new'>Add Court</a></li>
                <li><a href='/players/new'>Add Player</a></li>
            </ul>
        </nav>
        </header>
        <div className="container">
          {html.children}
        </div>
      </div>
    </body>
    </html>
  )
}

module.exports = Default
