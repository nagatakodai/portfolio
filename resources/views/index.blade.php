<!-- resources/views/index.blade.php -->
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Portfolio</title>

    {{--    @viteReactRefresh は @vite() より先に読み込む必要がある--}}
    @viteReactRefresh

    {{--    @vite() でエントリポイントとなるファイルを指定--}}
    @vite([
    'resources/css/app.css',
    'resources/scss/app.scss',
    'resources/js/app.js',
    'resources/ts/app.tsx',
    ])

</head>
<body>
<!-- index.tsxの内容を追加する部分 -->
<div id="app"></div>
</body>
</html>
