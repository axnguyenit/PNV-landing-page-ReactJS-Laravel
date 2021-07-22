<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href={{ asset('./assets/images/pn-logo.png') }} type="image/x-icon">
    <title>Passerelles numériques | A Gateway for Life </title>
</head>

<body>
    <div id="app">  </div>
    <script src= {{ asset('js/app.js') }} ></script>

    <script src= {{ asset('./assets/js/jquery-3.2.1.min.js') }}></script>
    <script src= {{ asset('./assets/js/jquery-migrate-3.0.0.min.js') }}></script>
    <!-- Bootstrap JS -->
    <script src= {{ asset('./assets/js/bootstrap.min.js') }}></script>
    <!-- Animated text -->
    <script src= {{ asset('./assets/js/jquery.textillate.js') }}></script>
    <script src= {{ asset('./assets/js/jquery.lettering.js') }}></script>
    <script src= {{ asset('./assets/js/jquery.fittext.js') }}></script
    <!-- Waypoints JS -->
    <script src= {{ asset('./assets/js/waypoints.min.js') }}></script>
    <!-- CounterUp JS -->
    <script src= {{ asset('./assets/js/jquery.counterup.min.js') }}></script>
    <!-- Isotop JS -->
    <script src= {{ asset('./assets/js/isotope.pkgd.min.js') }}></script>
    <!-- AjaxChimp js -->
    <script src= {{ asset('./assets/js/jquery.ajaxchimp.min.js') }}></script>
    <!-- Swiper JS -->
    <script src= {{ asset('./assets/js/swiper.min.js') }}></script>
    {{-- PayPal --}}
    <script src="https://www.paypalobjects.com/api/checkout.js"></script>
    <!-- Custom -->
    <script src= {{ asset('./assets/js/custom.js') }}></script>
    <!-- ReactJS -->
</body>
</html>
