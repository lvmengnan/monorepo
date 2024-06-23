import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css/normalize.css';
import App from './App';
import '@/css/global.css';

const root = createRoot(document.getElementById('root')!);

root.render(<App></App>);
