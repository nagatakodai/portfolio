import React from 'react';
import { createRoot } from 'react-dom/client';

// index.blade.phpのid="app"を読み込む
const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
    <div className="text-medium-bold">
        GitHub:<a href="https://github.com/nagatakodai/portfolio">https://github.com/nagatakodai/portfolio</a><br></br>
        このサイトで使用している開発環境<br></br>
        バックエンド<br></br>
        ・PHP 8.2(Laravel 10)<br></br>
        ・MySQL 8.0<br></br>
        フロントエンド<br></br>
        ・React 18.2+TypeScript 5.3<br></br>
        インフラ<br></br>
        ・AWS EC2<br></br>
    </div>
);
