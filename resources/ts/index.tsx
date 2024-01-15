import React from 'react';
import { createRoot } from 'react-dom/client';

// index.blade.phpのid="app"を読み込む
const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
    <div className="text-medium-bold">
        GitHub:<a href="https://github.com/nagatakodai/portfolio">https://github.com/nagatakodai/portfolio</a><br></br>
        <br></br>このプロジェクトで使用している開発環境<br></br>
        <br></br>バックエンド<br></br>
        ・PHP 8.x(Laravel 10.x)<br></br>
        ・MySQL 8.x<br></br>
        <br></br>フロントエンド<br></br>
        ・React 18.x+TypeScript 5.x<br></br>
        <br></br>デプロイ環境<br></br>
        <br></br>CI/CD<br></br>
        ・GitHub Actions<br></br>
        <br></br>サーバー<br></br>
        ・AWS EC2<br></br>
        <br></br>DB<br></br>
        ・AWS RDS
    </div>
);
