// app.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import Footer from "./components/Footer";
import Header from "./components/Header"; // Header コンポーネントをインポート

const container = document.getElementById('app');
const root = createRoot(container); // createRoot を使用して root を作成

root.render(
    <React.StrictMode>
        <Header />
        <App />
        <Footer />
    </React.StrictMode>
);
