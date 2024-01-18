// app.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App'; // App.tsx から App コンポーネントをインポート

const container = document.getElementById('app');
const root = createRoot(container); // createRoot を使用して root を作成

root.render(
    <React.StrictMode>
        <App /> // App コンポーネントをレンダリング
    </React.StrictMode>
);
