import React from 'react';
import Button from '@mui/material/Button';

// コンポーネントを定義
const Index = () => {
    return (
        <div className="text-medium-bold">
            <h1>Index Page</h1>
            <Button onClick={() => alert('マテリアルUIのボタンだよ')}>Click me!</Button><br/><br/>
            GitHub:<a
            href="https://github.com/nagatakodai/portfolio">https://github.com/nagatakodai/portfolio</a><br/><br/>
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
            DB<br/>
            ・AWS RDS


        </div>
    );
}
export default Index;

