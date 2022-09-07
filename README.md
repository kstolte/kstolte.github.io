## 👉 Get Started

Install dependencies

```
npm install
```

Update your `.env` file with values for each environment variable

```
API_KEY=AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas
etc ...
```

Run the development server

```
npm run start
```

When the above command completes you'll be able to view your website at `http://localhost:3000`

## 🥞 Stack

This project uses the following libraries and services:

- Framework - [Create React App](https://create-react-app.dev) with React Router
- UI Kit - [Material UI](https://material-ui.com)
- Contact Form - [Google Sheets](https://www.google.com/sheets/about/)
- Analytics - [Google Analytics](https://googleanalytics.com)
- Hosting - TBD

## 📚 Guide

<details>
<summary><b>Routing</b></summary>
<p>
  This project uses <a target="_blank" href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a> and includes a convenient <code>useRouter</code> hook (located in <code><a href="src/util/router.js">src/util/router.js</a></code>) that wraps React Router and gives all the route methods and data you need.

```js
import { Link, useRouter } from "./../util/router.js";

function MyComponent() {
  // Get the router object
  const router = useRouter();

  // Get value from query string (?postId=123) or route param (/:postId)
  console.log(router.query.postId);

  // Get current pathname
  console.log(router.pathname);

  // Navigate with the <Link> component or with router.push()
  return (
    <div>
      <Link to="/about">About</Link>
      <button onClick={(e) => router.push("/about")}>About</button>
    </div>
  );
}
```

</p>
</details>

<details>
<summary><b>Deployment</b></summary>
<p>
Build your front-end for deployment

```
npm run build
```

Then upload or deploy to your host. Exact details depend on your chosen host.

Your host may automatically read your environment variables from your `.env` file. If not, be sure to add each variable from `.env` to your host through their own UI. You can skip the ones in the lower section of `.env` (prepended with "REACT_APP\_") because those were already bundled into your front-end when you ran `npm run build`.

Have your host run `node api` to serve your web app. This will run a Node server that handles both your API endpoints and front-end. By default your server will be listening on port `8080`, but if your host expects a different port then you can set that by specifying a `PORT` environment variable. Some hosts will automatically set this environment variable to their desired port.

You can find extended information and host-specific details in the Create React App <a href="https://create-react-app.dev/docs/deployment">deployment docs</a>.

</p>
</details>

<details>
<summary><b>Other</b></summary>
<p>
  This project was created using <a href="https://divjoy.com?ref=readme_other">Divjoy</a>, the React codebase generator. You can find more info in the <a href="https://docs.divjoy.com">Divjoy Docs</a>.
</p>
</details>
