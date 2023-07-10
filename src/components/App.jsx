import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { globalStyles } from '../components/Utilit/variables';
import { Layout } from './Layout/Layout';
const Home = lazy(() => import('../pages/Home/Home'));
const Products = lazy(() => import('../pages/Products/Products'));
const About = lazy(() => import('../pages/About/About'));
const Technology = lazy(() => import('../pages/Technology/Technology'));

const Bonel = lazy(() => import('./Bonel/Bonel'));
const PocketSpring = lazy(() => import('./PocketSpring/PocketSpring'));
const Springless = lazy(() => import('./Springless/Springless'));
const Futon = lazy(() => import('./Futon/Futon'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="bonel" element={<Bonel />} />
        <Route path="pocketSpring" element={<PocketSpring />} />
        <Route path="springless" element={<Springless />} />
        <Route path="futon" element={<Futon />} />
        <Route path="/about" element={<About />} />
        <Route path="/technology" element={<Technology />} />

        <Route path="/products" element={<Products />} />

        <Route path="*" element={<Layout />} />
      </Route>
    </Routes>
  );
};
