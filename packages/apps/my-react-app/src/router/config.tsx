import React, { lazy, Suspense } from 'react';
import { RouteObject, redirect } from 'react-router-dom';
import Home from '@/pages/Home';
// import About from "@/pages/About";

const About = lazy(() => import('@/pages/About'));

const routes: RouteObject[] = [
  {
    path: '/',
    loader: () => {
      return redirect('/home');
    },
  },
  {
    path: '/home',
    index: true,
    element: <Home></Home>,
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <About></About>
      </Suspense>
    ),
  },
];

export default routes;
