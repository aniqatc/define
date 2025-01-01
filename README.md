# define

📖 A modern dictionary app built with React that provides word definitions, usage examples, and related imagery, along with customizable themes and typography for a personalized experience.

<p float="left">
  <a href="https://define.aniqa.dev/"><img src="/public/themes/light.png" width="49%"></a>
  <a href="https://define.aniqa.dev/"><img src="/public/themes/dark.png" width="49%"></a>
</p>

<p float="left">
  <a href="https://define.aniqa.dev/"><img src="/public/themes/ocean.png" width="49%"></a>
  <a href="https://define.aniqa.dev/"><img src="/public/themes/forest.png" width="49%"></a>
</p>

## Tech
- React
- Tailwind CSS
- Framer Motion
- Radix UI (for custom select component)
- Lucide React (for icons)

## API Integrations
- Pexel API for imagery
- Free Dictionary API for definitions

## Features
- Word lookups with comprehensive definitions and examples
- Synonyms and antonyms
- Related images for visual context
- Multiple theme options (light, dark, ocean, forest)
- Customizable typography (sans-serif, serif, monospace)
- Smooth animations
- Error handling

## Project Structure
- `components/` - React components organized by feature (`header/`, `search/`, `grid/`, `footer/`, `error/`)
- `context/` - theme and font context providers
- `data/` - data fetching logic 

## Key Concepts

#### React:
- Hooks (`useState`, `useEffect`, `useContext`)
- Context API for theme and font settings
- Props for component communication
- Conditional rendering
- Event handling
- Error handling
- Async data fetching

#### Styling:
- Custom Tailwind variants for theme support (`dark:`, `forest:`, `ocean:`)
- Framer Motion used for sequential animations during component mounting
- Responsive design with Tailwind breakpoints

## Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and utilizes the following scripts:

- `npm start` - Runs the app in development mode at http://localhost:3000
- `npm run build` - Creates an optimized production build in the build folder