<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DonateController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/testMail', function() {
//     return view('sendMail.mailToContact');
// });

Route::get('/{path?}', function () {
    return view('index');
})->where('path', '.*');

