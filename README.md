
### EcommerceStore – Angular, Node.js, TypeScript, Stripe**

This is a modern, full-stack eCommerce web application built with **Angular 18.20** ( with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3), **Node.js**, **TypeScript**, and **Stripe** (for payment processing) features a fully functional shopping cart, product browsing, and checkout experience.

This web app allows users to browse products across various categories, explore detailed item descriptions, and easily add items to their shopping cart. 
Users can manage their cart by adding, reducing, or deleting items, with the option to continue shopping or proceed to checkout. 
The checkout process is seamlessly integrated with the Stripe API, ensuring a secure and smooth payment experience. Store owners can also configure shipping and delivery services during checkout.

The UI is structured using **Angular Material** and **Tailwind CSS**to design a responsive, clean UI. 
This project integrates the **Fake Store API** (https://fakestoreapi.com/) as the data source for products, including categories, descriptions, prices, and images.

 ![sequence](https://github.com/user-attachments/assets/60a28b1f-02da-4b0f-b098-bb65b26e62d0)

 **Home Page**: 

Displays products with pagination options for 12, 24, or 36 items per page.
![home-category](https://github.com/user-attachments/assets/1cadde9f-27ac-4a07-9606-665febe26cb1)

![home1](https://github.com/user-attachments/assets/c991da36-d3d0-4333-8df7-63225b41d197)

Users can adjust the number of columns for product display.
![home-column](https://github.com/user-attachments/assets/ec3e1483-f8ec-4d40-8be4-661f94384282)
![home-column2](https://github.com/user-attachments/assets/68e55bae-dfeb-4dca-936c-807287df7715)
Product cards include an "Add to Cart" button with dynamic category, description, and price data.
![home-addtocartpng](https://github.com/user-attachments/assets/b9f73a5c-9680-48ce-b1b8-2b06c48c0a85)

 **Cart Page**: 
Shows all items added to the cart with options to change the quantity or remove items.
![cart](https://github.com/user-attachments/assets/11d003c4-8966-4c84-a07e-b576061bd1a8)
![cartpage](https://github.com/user-attachments/assets/bf80e00a-9e0b-4184-aabf-ab2c3090a519)

Automatically recalculates the total price as items are modified.
![cartpage2](https://github.com/user-attachments/assets/302d146b-caac-4881-9018-271cd95e8382)

Provides navigation back to the home page for continued shopping.

**Checkout Page with Stripe Integration**: 
   - Users can proceed to checkout, where they are redirected to the Stripe-hosted payment page.
   - The Stripe page displays the selected products and calculates the total price, including shipping fees.
   - After payment, Stripe returns a session ID to the backend, which is then handled by the server.
![checkout](https://github.com/user-attachments/assets/51966f75-5b5b-4e2b-9260-c152e20cccf3)

### Process Overview:
- **Home Page**: 
  - Users browse and filter products.
  - Add items to the cart and adjust the number of products displayed per page.
- **Cart Page**: 
  - View added items, update quantities, and remove items.
  - The total price is updated automatically based on the items in the cart.
- **Checkout**: 
  - When ready, users can proceed to the Stripe-powered checkout, where they enter payment details, and the cart total is processed securely.
 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
