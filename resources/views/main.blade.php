<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Vuex Test Development</title>

        <link href="/css/app.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="main-app">
            <div class="container">
                <nav class="navbar navbar-default">
                  <div class="container-fluid">
                    <div class="navbar-header">
                      <router-link class="navbar-brand" exact to="/">VueX Test</router-link>
                    </div>

                    <div id="bs-example-navbar-collapse-1">
                      <ul class="nav navbar-nav">
                        <router-link tag="li" to="/students"><a>Students</a></router-link>
                        <router-link tag="li" to="/subjects"><a>Subjects</a></router-link>
                      </ul>
                    </div><!-- /.navbar-collapse -->
                  </div><!-- /.container-fluid -->
                </nav>
                <router-view></router-view>
            </div>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
