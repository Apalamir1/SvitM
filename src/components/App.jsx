import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
const Home = lazy(() => import('../pages/Home/Home'));
const Products = lazy(() => import('../pages/Products/Products'));

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

        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Layout />} />
      </Route>
    </Routes>
  );
};
