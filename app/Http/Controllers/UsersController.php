<?php
 
namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function index()
    // {
    //     return User::all();
    // }


    
 
    public function onLogin(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'username' => 'required',
                'password' => 'required'
            ]
        );

        if($validator->fails()) {
            return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
        }

        $email_status = User::where("username", $request->username)->first();

        if(!is_null($email_status)) {
            $encode_password = md5($request->password);
            $password_status = User::where("username", $request->username)->where("password", $encode_password)->first();

            if(!is_null($password_status)) {
                return response()->json(["status" => 200, "success" => true, "message" => "You have logged in successfully", "data" => $email_status]);
            }
            else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);
            }
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. User doesn't exist."]);
        }
    }



    // public function forgotPassword (Request $request) {
    //     $validator = Validator::make($request->all(), [
    //         'email' => 'required|email',
    //     ]);

    //     if($validator->fails()) {
    //         return response()->json(["success" => false, "validation_error" => $validator->errors()]);
    //     }

    //     $email_status = User::where("email", $request->email)->first();

    //     if(is_null($email_status)) {
    //         return response()->json(["status" => "failed", "success" => "failed", "validation_error" => "Email doesn't exist."]);
    //     }
    //     else {
    //         $code = rand(999999, 111111);
    //         $content = [
    //             'title' => 'Code Verification',
    //             'body' => $code,
    //         ];
    //         \Mail::to($request->email)->send(new SendMailUser($content, $code));
    //         $email_status->code = $code;
    //         $email_status->save();
    //         return response()->json(["status" => 200, "success" => true, "data" => $email_status, "code" => $code]);
    //     }
    // }

    // public function codeVerified (Request $request) {
    //     $validator = Validator::make($request->all(), [
    //         'code' => 'required'
    //     ]);

    //     if($validator->fails()) {
    //         return response()->json(["success" => false, "validation_error" => $validator->errors()]);
    //     }

    //     $user = User::where("id", $request->userID)->first();

    //     if(!is_null($user)) {
    //         if($request->code == $user->code) {
    //             $user->code = 0;
    //             $user->save();
    //             return response()->json(["status" => 200, "success" => true, "data" => $user]);
    //         }
    //         else {
    //             return response()->json(["status" => "failed", "success" => false, "validation_error" => "Code verification not match!"]);
    //         }
    //     }
    // }

    // public function resetPassword (Request $request) {
    //     $validator = Validator::make($request->all(), [
    //         'password' => 'required',
    //         'cfpassword' => 'required|same:password'
    //     ]);

    //     if($validator->fails()) {
    //         return response()->json(["success" => false, "validation_error" => $validator->errors()]);
    //     }

    //     $user = User::where("id", $request->userID)->first();

    //     if(!is_null($user)) {
    //         if($request->password == $request->cfpassword) {
    //             $user->password = md5($request->password);
    //             $user->save();
    //             return response()->json(["status" => 200, "success" => true, "data" => $user]);
    //         }
    //     }
    // }
}
