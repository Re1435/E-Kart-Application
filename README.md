# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm install react-router-dom`

The above command will install package called react-router-dom to set up single page application(SPA) & navigate between pages

### `npm install @emotion/react @emotion/styled @mui/icons-material @mui/material`

The above command install required packages to use materialUI icons

### `npm install react-loader-spinner`

The above command will install loader spinner to display loader

## Project Overview

The project is a React-based e-commerce application designed to showcase products, allow users to browse, add items to their cart, and view product details. It consists of multiple components such as Navbar, Home, Cart, ProductDetails, and FilterProducts.

- Navbar: Provides navigation links for users to move between different sections of the application, including the home page and the shopping cart.
- Home: Displays a list of products fetched from a dummy API endpoint. It includes a loading spinner while fetching data and a filter feature to narrow down products based on brand and category.

- Cart: Allows users to view items added to their shopping cart. It provides functionality to remove items, calculates the subtotal, applies discounts, and displays the total price for checkout.

- ProductDetails: Shows detailed information about a specific product selected by the user. It includes the product image, title, brand, description, price, and rating. Users can add the product to their cart from this page.

- FilterProducts: A reusable component used on the home page to filter products based on brand and category. It dynamically updates the product list based on user selections.

The application also utilizes React Router for navigation and manages cart state using a Context API. It incorporates Material-UI icons for visual elements and styling is done using CSS modules.

Overall, the project aims to provide a seamless shopping experience for users with intuitive navigation, detailed product information, and efficient cart management functionalities.

<!--

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
 -->
