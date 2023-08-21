# Shopping Cart React App

<h3>Visit: https://shopping-cart-apps-react.netlify.app/</h3>

<img alt="alt_text" src="./shopping.gif"/>

# Shopping Cart Application Project

This project is a web application built using React.js for managing a shopping cart. It allows users to add new products, view a list of products, and perform various actions like updating quantities and removing products. The application features several pages, including the main page, new product addition page, product list page, and an about page.

## Project Skeleton

```
Shopping Cart (folder)
|
|----readme.md         # Given to the students (Definition of the project)
SOLUTION
├── public
│     └── index.html
├── src
│   ├── App.js
│   ├── components
│   │    ├── CardTotal.jsx
│   │    ├── Navbar.jsx
│   │    ├── ProductCard.jsx
│   │    └── ProductForm.jsx
│   ├── index.css
│   ├── index.js
│   └── pages
│        ├── About.jsx
│        ├── Main.jsx
│        ├── NewProduct.jsx
│        ├── ProductList.jsx
│        └── UpdateProduct.jsx
├── package.json
└── yarn.lock

```
## Description:

### Key Features

- **Main Page:**
  - Welcomes users to the shopping cart application.
  - Provides buttons to navigate to different sections of the application.
  - Buttons include "Add New Product" and "See Products."

- **New Product Addition Page:**
  - Allows users to add a new product to the shopping cart.
  - Form fields for product name, price, quantity, and image URL.
  - Upon submission, the new product is added to the list.

- **Product List Page:**
  - Displays a list of products in a card format.
  - Each card includes the product name, image, price, quantity, and total price.
  - Users can increase or decrease the quantity of products and remove them.
  - Provides a total price calculation including taxes and shipping.

- **About Page:**
  - Presents information about the developer.
  - Includes a profile image, name, role, and brief introduction.
  - Social media icons are linked to the developer's profiles.
  - Offers buttons to navigate back to the main page or return to the previous page.

## Components

- `Navbar`: Navigation bar at the top of the application with links to different pages.
- `Main`: The main landing page with buttons to navigate to other sections.
- `NewProduct`: Page for adding new products with form fields.
- `ProductList`: Page displaying the list of products and their details.
- `ProductCard`: Component rendering individual product cards.
- `CardTotal`: Component displaying the total amount and prices.
- `About`: Page with information about the developer and links to social media.
- `NotFound`: Page displayed for invalid routes with a home button.

## Styling

- Styling is done using CSS classes and Bootstrap.
- Each page has its specific layout and design.
- The application has a responsive design that adjusts for different screen sizes.

## Data Management

- Data is fetched from a mock API using Axios.
- State management is handled using React's useState and useEffect hooks.
- Products are displayed dynamically based on the data fetched from the API.

## Routing

- Navigation between pages is managed using React Router.
- Routes are defined for each page and are nested within the `Routes` component.

## Conclusion

This project demonstrates the use of React.js in building a functional shopping cart application. It covers various aspects of web development, including component-based architecture, state management, routing, API integration, and responsive design. By following the project's structure and coding practices, developers can create similar applications for managing shopping carts and other e-commerce-related functionalities.
