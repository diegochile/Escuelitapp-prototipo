escuelitapp.controller( 'prueba' , function($scope){

<!DOCTYPE html>
<html ng-app="escuelitapp">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="assets/img/favicon.ico">

    <title>Escuelitapp</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">


    <!-- Custom styles for this template -->
    <link href="css/main.css" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
  </head>
    
    <!-- Static navbar -->
<body>
        

<!-- ng-include directive -->
<div ng-include="'partials/header.html'"></div>
    <div class="container">


        <div class="row">

            <div class="container" ng-view id="contenedorGeneral">

            </div>


        </div>

    </div>





  
<!-- ng-include directive -->
<div ng-include="'partials/footer.html'"></div>

})