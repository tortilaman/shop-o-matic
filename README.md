# About

This application helps you keep track of the food you buy, and automatically generates shopping lists for each store you visit. The application should be useful for everyone, but some features should be of particular interest to individuals with food allergies or brand preferences.

> NOTE: To quickly build out this project, the backend has been included as part of the frontend application. This will be resolved in the future.

## To-Do

### Features

- Add Foods
  - [ ] Add food (such as baked beans) to your "inventory", so you can buy them later
    - [ ] For each food, add multiple products so that you can keep track of your preferences, or which brands are (or aren't) safe for you.
      - [ ] Add a photo of the item, so you (or someone else) can easily find it in the store later
      - [ ] Add the store this brand is purchased at
      - [ ] Add whether the item is safe for you to eat
    - [ ] Add a favourite brand of each food item
    - [ ] Add the section of the store this is in (i.e. produce)
- Add foods to your shopping List
  - [ ] Add a defined food to your shopping list
    - Unless otherwise specified, your favourite brand is used, which determines the store it's purchased at
  - [ ] Add an undefined food to your shopping list
    - This adds the food to your "inventory", where it can be expanded upon later.
- Stores
  - [ ] Show all items specific to this store
  - [ ] Show all items without a store

### Views

- [ ] Store
  - [ ] Sort list by Aisle / Section
  - [ ] Sort list alphabetically
  - [ ] Sort by store-specific vs. no-store items
- [ ] Foods
  - [ ] Sort by whether or not they're safe for you to eat: yes, no, unknown
- [ ] Master Shopping List

## User Stories

- Add Food to shopping list
  - [ ] Add a new product to the shopping list
  - [ ] Add an existing product to the shopping list
  - [ ] Add a store-specific food to the shopping list (i.e. watermelons from Clarks)
  - [ ] Add a generic food to the shopping list
- Add a product
  - [ ] **While shopping, add a product that you want to check if it's safe before buying it**
    - Photo\*
    - Brand\*
    - Food\*
    - Category
    - Store
      - Aisle
- Go shopping
  - [ ]

## Phases

1. Support a single household, build out features (MVP & dogfooding)
2. Support multiple users / households
3. Community functionality???

## Questions

- Does there need to be any distinction between online and B&M stores?

## Future

- Community contributed database of brands of food:
  - What store they're available at?
  - What allergies they're safe for (this could be backed up by the aggregate of individual's experiences and their overrides)
  - Pictures of the product (useful sooner rather than later)
- Fridge inventory
  - Expiration dates
  - Shelf life

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
