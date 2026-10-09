# Controlled React Form

A simple and interactive **Controlled Form Application** developed using **React.js, HTML, CSS, and JavaScript**.

The application allows users to enter their personal information and displays the entered details in real time below the form. React state is used to control input values and dynamically update the user interface.

## Features

- Enter full name, email, and phone number
- Select a course from the dropdown menu
- Enter a short personal description
- Display entered information in real time
- Reset the form and clear all fields
- Dynamic UI updates without reloading the webpage
- Responsive design for mobile and desktop screens

## Technologies Used

- **React.js** – For building reusable UI components
- **HTML5** – For application structure
- **CSS3** – For styling and responsive design
- **JavaScript** – For handling user input and application logic
- **Vite** – For development and building the application
- **GitHub Pages** – For hosting the application

## Project Structure

```text
controlled-react-form/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## How to Run

1. Clone or download this repository.
2. Open the project folder in your code editor.
3. Open the terminal and install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal to use the application.

## Working

The application uses the React `useState` hook to store the values entered by the user. The `value` and `onChange` properties make each input a controlled component.

Whenever the user types or changes a field, the state is updated and the live preview automatically displays the latest information without refreshing the webpage.

The Reset Form button clears the form fields and resets the displayed information.

## Concepts Demonstrated

- React state management using `useState`
- Controlled components
- Event handling using `onChange`
- Dynamic rendering
- Handling form inputs
- Updating the user interface using React state

## Deployment

The project is hosted using GitHub Pages.

**Live Demo:** Add your deployed GitHub Pages URL here.

## Author

**Vedant Saparia**

## License

This project is created for educational and academic purposes.