# Snow Dashboard 🏷️
The project implements [Snow UI](https://snowui.framer.website/) in React Js, typescript, sass, Material UI, and context API only for learning purposes. All the rights to the design are reserved for the official Figma design Snow UI.

## Features ⭐⭐
- **Responsive:** The UI is responsive and goes well with all screen sizes.
- **Theme:** The project is configured in light and dark themes. Themes can be switched by clicking on a `theme(sun)` icon in the navbar
- **Modular Architecture:** Application is structured with reusable components, making it maintainable and scalable.
- **State Management**: States are managed to handle navigation and theme switching with context-API.
- **Navigation**: The Dashboard and Order list view can be navigated by the nested menu in the `Default` menu item in the Left Sidebar

## Technologies Used 💻
- **Frontend:** React JS, Typescript, Context API, Material UI, SCSS, HTML.
- **Build Tool:** Vite

## Project Structure 🏗️
- **/components:** Reusable UI Components.
- **/containers:** Components that handle logic and data flow
- **/views:** Main views of the application
- **/styles:** SCSS config files for styling
- **/data:** Provides JSON data
- **/types:** Defines typescript interfaces.

## Architecture and Best Practices Used 🏛️
- SCSS variables and mixins are used to avoid duplicate styling
- Pages are broken into smaller components for reusability
- Animations and micro-interactions are used for better user experience
- All the style values are in alignment with the Figma design
- Code is clean and follows the DRY principle

## Installation
To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ishika2021/snow-dashboard.git

2. **Navigate to the project directory**:

     ```bash
   cd snow-dashboard

3. **Install dependencies:**:

     ```bash
   npm install

3. **Start the development server::**:

     ```bash
   npm run dev

3. **Open your browser::**:

     ```bash
   http://localhost:5173


## Deployment 🚀
The project is deployed on Netlify. The live version is available at [Snow Dashboard](https://snow-dashboard.netlify.app/).
