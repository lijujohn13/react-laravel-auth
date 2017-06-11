<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csr-token" content="{{ csrf_token() }}">
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <title>React + Laravel</title>


        <style>
               .title{
                    margin-top: 230px;
                    color: cadetblue;
               } 
        </style>
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
