<!-- resources/views/index.blade.php -->
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Portfolio</title>

    {{--    @viteReactRefresh は @vite() より先に読み込む必要がある--}}
    @viteReactRefresh

    {{--    @vite() でエントリポイントとなるファイルを指定--}}
    @vite([
    'resources/css/app.css',
    'resources/scss/app.scss',
    'resources/ts/index.tsx',
    ])

</head>
<body>
<!-- index.tsxの内容を追加する部分 -->
<div id="app"></div>
</body>
</html>
