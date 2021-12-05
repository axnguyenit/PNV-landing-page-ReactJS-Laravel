<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href={{ asset('./assets/images/pn-logo.png') }} type="image/x-icon">
    <title>Passerelles numériques | A Gateway for Life </title>
</head>

<body data-spy="scroll" data-target="#navbarCodeply" data-offset="70" data-new-gr-c-s-check-loaded="14.1014.0" data-gr-ext-installed="" data-new-gr-c-s-loaded="14.1014.0">
    <div id="app"></div>
    <!-- ReactJS -->
    <script src= {{ asset('./js/app.js') }} defer></script>
    
    <script src= {{ asset('./assets/js/jquery-3.2.1.min.js') }} defer></script>
    <script src= {{ asset('./assets/js/jquery-migrate-3.0.0.min.js') }} defer></script>
    <!-- Bootstrap JS -->
    <script src= {{ asset('./assets/js/bootstrap.min.js') }} defer></script>
    <!-- Animated text -->
    <script src= {{ asset('./assets/js/jquery.textillate.js') }} defer></script>
    <script src= {{ asset('./assets/js/jquery.lettering.js') }} defer></script>
    <script src= {{ asset('./assets/js/jquery.fittext.js') }} defer></script>
    <!-- Waypoints JS -->
    <script src= {{ asset('./assets/js/waypoints.min.js') }} defer></script>
    <!-- CounterUp JS -->
    <script src= {{ asset('./assets/js/jquery.counterup.min.js') }} defer></script>
    <!-- Isotop JS -->
    <script src= {{ asset('./assets/js/isotope.pkgd.min.js') }} defer></script>
    <!-- AjaxChimp js -->
    <script src= {{ asset('./assets/js/jquery.ajaxchimp.min.js') }} defer></script>
    <!-- Swiper JS -->
    <script src= {{ asset('./assets/js/swiper.min.js') }} defer></script>
    <!-- Custom -->
    <script src= {{ asset('./assets/js/custom.js') }} defer></script>
</body>
</html>
