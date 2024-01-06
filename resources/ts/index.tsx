import React from 'react';
import { createRoot } from 'react-dom/client';

// index.blade.phpのid="app"を読み込む
const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
    <div className="text-red">
        このサイトで使用している開発言語
        <br></br>
        ・PHP 8.2(Laravel 10)
        <br></br>
        ・React 18.2+TypeScript 5.3
        <br></br>
    </div>
);
