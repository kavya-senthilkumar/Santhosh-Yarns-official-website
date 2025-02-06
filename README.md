# Santhosh Yarns Official Website

## Overview

The **Santhosh Yarns Official Website** is a platform designed for both customers and admins of Santhosh Yarns, a yarn company. Customers can browse the products, see company information, and place orders. Admins can manage products and view customer orders.

## Objective

The goal of this project is to create a website where:
- **Customers** can view products and place orders (after logging in).
- **Admins** can manage the product list and view orders.


## Project Workflow

### 1. **Frontend Development**
   - Create user interfaces for both customers and admins using React.js.
   - Implement login and registration forms for both customers and admins, using JWT authentication.
   - Design pages for the following sections:
     - **Home Page**: Includes a navigation menu with links for company information, available services, thread availability, placing orders, and contact information.
     - **Available Threads**: Display a list of all yarn threads with details like types, colors, and prices.
     - **Place Order**: Allows customers to place orders (requires login).
     - **Admin Dashboard**: Admin can view orders, add/edit/delete threads.

### 2. **Backend Development**
   - Implement RESTful APIs using Node.js and Express to handle:
     - **User Authentication**: JWT-based authentication for secure login.
     - **Threads Management**: APIs to add, update, or delete threads (admin only).
     - **Order Management**: APIs to place orders (customer) and view orders (admin).

### 3. **Database Configuration**
   - Set up MongoDB to store:
     - **User Data**: Including customer and admin credentials, roles, and session information.
     - **Thread Information**: Yarn thread details such as name, type, color, and price.
     - **Orders**: Details of orders placed by customers, including the thread chosen, quantity, and status.

### 4. **Integration**
   - Frontend interacts with the backend APIs to perform actions such as:
     - Registering a user or logging in.
     - Viewing threads and placing orders.
     - Admin managing thread details and viewing orders.

## Tech Stack

- **Frontend:**
  - **React.js**: For building a dynamic, responsive, and user-friendly interface.
  - **HTML**: For the basic structure of the web pages.
  - **CSS3**: For styling the website and ensuring responsive layouts.

- **Backend:**
  - **Node.js**: For handling server-side logic and building APIs.
  - **Express.js**: For managing HTTP requests and routing.

- **Database:**
  - **MongoDB**: A NoSQL database used to store user data, thread details, and orders.

