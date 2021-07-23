<?php

use App\Models\LandingPage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\DonateController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\LandingPageController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/landing-page', LandingPageController::class);
Route::apiResource('/contact', ContactController::class);
Route::apiResource('/donate', DonateController::class);
Route::post('/login', [UsersController::class, 'onLogin'])->name('login');

Route::post('/savefile', function (Request $request) {
    $file = $request->file;
    $newImageName = time().'-'.$file->getClientOriginalName();
    $file->move($path = public_path(). DIRECTORY_SEPARATOR.'files'.DIRECTORY_SEPARATOR, $newImageName);
    return 'files/'.$newImageName;
});

// Route::post('/savefiles', function (Request $request) {
//     $fileInfo = $request->fileInfo;
//     list($type, $name, $data) = explode(';', $fileInfo);

//     list(, $type) = explode(':', $type);
//     list(, $name) = explode('=', $name);
//     list(, $data) = explode(',', $data);
//     $data = base64_decode($data);

//     $path = public_path(). DIRECTORY_SEPARATOR.'files'.DIRECTORY_SEPARATOR;
//     $ok = file_put_contents($path.$name, $data);
//     return $ok;
// });