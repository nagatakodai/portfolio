import React from 'react';
import Button from '@mui/material/Button';

// コンポーネントを定義
const Index = () => {
    return (
        <div className="text-medium-bold">
            GitHub:<a href="https://github.com/nagatakodai/portfolio">https://github.com/nagatakodai/portfolio</a><br/><br/>
            このプロジェクトで使用している開発環境<br/><br/>
            バックエンド<br/>
            ・PHP 8.x(Laravel 10.x)<br/>
            ・MySQL 8.x<br/><br/>
            フロントエンド<br/>
            ・React 18.x+TypeScript 5.x<br/><br/>
            デプロイ環境<br/><br/>
            CI/CD<br/>
            ・GitHub Actions<br/><br/>
            サーバー<br/>
            ・AWS EC2<br/><br/>
        </div>
    );
}
export default Index;

