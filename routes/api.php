<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\LandingPage;



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

Route::post('/landing-page', function (Request $request) {
    try {
        $data = $request->json()->all();
        
        $landingPage = new LandingPage();
        $landingPage->name = $data['name'];
        $landingPage->description = $data['description'];
        $landingPage->url = $data['url'];
        $landingPage->title = $data['title'];
        $landingPage->meta = $data['meta'];
        $landingPage->components = json_encode ($data['components']);
        $landingPage->save();


    } catch(Exception $e) {
        return 'fail';
    }
    return 'ok';
});

Route::get('/landing-page/{url}', function (Request $request) {
    $landingPage = LandingPage::where('url', $request->url)->get();
    
    $landingPage[0]->components = json_decode($landingPage[0]->components, FALSE);
    return $landingPage;
});

Route::post('/savefile', function (Request $request) {
    $fileInfo = $request->fileInfo;
    list($type, $name, $data) = explode(';', $fileInfo);

    list(, $type) =  explode(':', $type);
    list(, $name) = explode('=', $name);
    list(, $data)      = explode(',', $data);
    $data = base64_decode($data);

    $path = public_path(). DIRECTORY_SEPARATOR.'files'.DIRECTORY_SEPARATOR;
    $ok = file_put_contents($path.$name, $data);
    return $ok;
});

