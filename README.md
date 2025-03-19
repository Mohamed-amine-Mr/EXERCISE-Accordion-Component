# Accordion Component

This project is a simple accordion component built with React (using Vite) and styled using CSS. It displays a list of questions and answers, where clicking on a title toggles the corresponding text.

## Features

- Uses React `useState` to manage the open/close state of each accordion item.
- Displays a list of FAQ-style questions and answers.
- Supports multiple accordion items with unique identifiers.
- Smooth and user-friendly UI using CSS styling.

## Installation & Usage

### Prerequisites

Make sure you have Node.js and npm installed.

### Setup

1. Clone the repository or copy the project files.
2. Navigate to the project directory.
3. Install dependencies using:
   ```sh
   npm install
   ```
4. Run the project with:
   ```sh
   npm run dev
   ```

### File Structure

```
📂 project-folder
 ├── 📄 src/
 │   ├── 📄 App.jsx  (Main Component)
 │   ├── 📄 styles.css (Styling)
 │   ├── 📄 main.jsx (Entry point for Vite)
 │   └── 📂 components/
 │       ├── 📄 Accordion.jsx
 │       └── 📄 AccordionItem.jsx
```

## Components

### `App.jsx`

- Imports the `Accordion` component.
- Passes an array of FAQ items as props.

### `Accordion.jsx`

- Manages the currently open item using `useState`.
- Iterates over the `data` prop and renders `AccordionItem` components.

### `AccordionItem.jsx`

- Renders an individual item with a title and text content.
- Handles click events to toggle its open/close state.

## How It Works

- When clicking on an accordion title, it toggles the associated content.
- The currently open item is controlled by state (`curOpen`).
- Clicking an open item will close it, and clicking a different item will switch to that one.
- The UI updates dynamically based on state changes.

## Styling

The component is styled using `styles.css`, ensuring a clean and responsive design.

### Key Styles:

- `.accordion`: Defines the main container.
- `.item`: Styles each accordion item with padding, border, and shadow.
- `.open`: Highlights the open item with a different border color.
- `.content-box`: Displays content only when the item is open.

## Customization

- You can modify the `faqs` array in `App.jsx` to include more questions.
- Adjust styles in `styles.css` to match your design preferences.

## License

This project is open-source and free to use.

## Author

Developed by Mohamed amine Mounir.
