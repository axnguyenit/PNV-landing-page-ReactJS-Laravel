<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LandingPage;

class LandingPageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $landingPage = LandingPage::where('url', $request->url)->get();
        $landingPage = LandingPage::all();
        $landingPage[0]->components = json_decode($landingPage[0]->components, FALSE);
        return $landingPage[0];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
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
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        try {
            $data = $request->json()->all();
            
            $landingPage = LandingPage::where('url', $data['url'])->get();
            if (count($landingPage) < 1) {
                $landingPage = new LandingPage();
            } else {
                $landingPage = $landingPage[0];
            }
    
            $landingPage->name = $data['name'];
            $landingPage->description = $data['description'];
            $landingPage->url = $data['url'];
            $landingPage->title = $data['title'];
            $landingPage->meta = $data['meta'];
            $landingPage->components = json_encode ($data['components']);
            $landingPage->save();
        } catch(Exception $e) {
            echo $e->getMessage();
            return 'fail';
        }
        // return 'ok';
    }
}
