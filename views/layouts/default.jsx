const React = require('react')

function Default(html) {
  return (
    <html>
    <head>
      <title>{html.title || 'Default'}</title>
      <link rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" 
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" 
        crossOrigin="anonymous" 
      />
      <link rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" 
        integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" 
        crossOrigin="anonymous" 
      />
      <link rel="stylesheet" href="/main.css" />
    </head>
    <body>
      <div className="wrapper">
        <header>
          <h1>JumpBall Meet Up</h1>
          <nav id="sticky-nav">
            <ul>
                <li><a href='/courts'>Home</a></li>
                <li><a href='/courts/new'>Court+</a></li>
                <li><a href='/players'>Player+</a></li>
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
