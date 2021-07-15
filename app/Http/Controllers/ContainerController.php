<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Container;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContainerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Container::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store (Request $request)
    {
        $validator = Validator::make($request->all(), [
            'component_id' => 'required',
            'position' => 'required',
            'name' => 'required',
            'url' => 'required',
            'desc' => 'required',
            'params' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'failed', 'validation_error' => $validator->errors()]);     
        }
        // $container = new Container();

        // $container->component_id = $request->component_id;
        // $container->component_id = $request->position;
        // $container->component_id = $request->name;
        // $container->component_id = $request->url;
        // $container->component_id = $request->desc;
        // $container->component_id = json_encode($request->params);

        // $container->save();
          
        $postArray = [
            'component_id' => $request->component_id,
            'position' => $request->position,
            'name' => $request->name,
            'url' => $request->url,
            'desc' => $request->desc,
            'params' => json_encode($request->params),
            'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),
            'updated_at' => Carbon::now('Asia/Ho_Chi_Minh'),
        ];

        $container = Container::create($postArray);
        // return Response()->json(array("success"=> 1, "data" => $postArray));
        return response()->json([], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
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
        // position
        $validator = Validator::make($request->all(), [
            'position' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'failed', 'validation_error' => $validator->errors()]);     
        }

        $container = Container::find($request->id);
        $container->position = $request->position;
        $container->save();

        return response('', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
    }
}
