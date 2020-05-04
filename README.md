### Client List

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

---

#### Notes

1. Still looking into how to put react projects on github page.

- Github page only works when `index.html` is at root
- React project's `index.html` is not at root

2. For CSS

- `npm install node-sass` (otherwise can't use scss)
- `npm install --save bootstrap`, doc[here](https://create-react-app.dev/docs/adding-bootstrap/)
- in `index.js`, `import "bootstrap/dist/css/bootstrap.css"`
- in CSS, do nothing
- in jsx, use `className` instead of `class`, and put exactly what one would put in `class` in `className`

3. For assets

- put `NODE_PATH='src/'` in `.env`
- then in any file, when importing any assets, use "absolute path" as of the node_path

4. Pass an object as component props (ex: `ClientListView.jsx` of this project)

- pass `{...theObject}` as a whole props, without props property. Can add other props property after this if needed. (ex:`ClientListView.jsx` )

5. Calling a dynamic image in component without prior `import`

- `` <img src={require(`path/${interpolation}.png`)}/> ``

6. Assigning to an object properties that use existing properties.

- should not do `` let machin = {name: "somename", id: `client_${name}`} ``, but rather `` let machin = {name: "somename}; machin.id=`client_${machin.name}`; ``
