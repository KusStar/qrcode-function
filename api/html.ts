export const HTML = `
<!DOCTYPE html>
<html>

<head>
  <title>
    <%= title %>
  </title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #111;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #fff;
    }

    .qrcode {
      width: 20rem;
      border-radius: 1rem;
    }

    .info {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-left: 10rem;
      padding-right: 10rem;
    }

    .info h1 {
      font-size: 1.8rem;
      margin-top: -1rem;
      margin-bottom: 2rem;
    }

    .info p {
      margin-top: 2rem;
      color: gray;
    }
  </style>
</head>

<body>
  <div class="info">
    <h1>
      <%= title %>
    </h1>
    <img class="qrcode" src="<%= qrcode %>" alt="<%= title %>" />
    <p><%= subtitle %></p>
  </div>
</body>

</html>
`

