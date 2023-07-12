import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
const Home = lazy(() => import('../pages/Home/Home'));
// const Products = lazy(() => import('../pages/Products/Products'));
// const About = lazy(() => import('../pages/About/About'));
// const Technology = lazy(() => import('../pages/Technology/Technology'));

// const Bonel = lazy(() => import('./Bonel/Bonel'));
// const PocketSpring = lazy(() => import('./PocketSpring/PocketSpring'));
// const Springless = lazy(() => import('./Springless/Springless'));
// const Futon = lazy(() => import('./Futon/Futon'));

export const App = () => {
  const globalStyles = `
    :root {
  --main-color: #38c2c9;
  --focus-color: #1a1d1f;
  --bg-color-accent: #38c2c9;
  --background-color: #d9d9d9;

  --font-color: #353535;
  --white-element: #ffffff;
  --black-element: #000;
  --button-bg: #d9d9d9;
  --link-color: #afb1b8;
    }

    body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul {
  padding: 0;
  list-style: none;
}
input,
button,
textarea,
select {
  font: inherit;
}
  `;

  return (
    <>
      <Global styles={globalStyles} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/technology" element={<Technology />} />

        <Route path="/products" element={<Products />} /> */}

          <Route path="*" element={<Layout />} />
        </Route>
      </Routes>
    </>
  );
};
