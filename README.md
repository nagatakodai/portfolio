Windowsはいろいろやる必要がある

wsl2 + ubuntuをインストールし、 ターミナルはubuntuを使う

composerのインストール
````
docker run --rm \
-u "$(id -u):$(id -g)" \
-v $(pwd):/var/www/html \
-w /var/www/html \
laravelsail/php82-composer:latest \
composer install --ignore-platform-reqs
````
envファイル作成
``.env.example`` → ``.env``

エイリアスの設定
````
alias sail='bash vendor/bin/sail'
````

sail起動
````
sail up -d
````

APP_KEY更新
````
sail php artisan key:generate
````

ビルド
````
sail npm run dev
````

http://localhost/ (ローカル環境) にアクセス
