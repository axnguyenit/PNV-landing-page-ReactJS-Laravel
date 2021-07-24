<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Contact;
use App\Mail\SendMail;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Contact::all();
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
            $contact = new Contact();
            $contact->name = $data['name'];
            $contact->email = $data['email'];
            $contact->subject = $data['subject'];
            $contact->message = $data['message'];
            $contact->created_at = Carbon::now('Asia/Ho_Chi_Minh');
            $contact->updated_at = Carbon::now('Asia/Ho_Chi_Minh');
            $contact->save();

            $contactTerm = Contact::where("email", $data['email'])->first();

            // if(!is_null($contactTerm)) {
                $content = [
                    
                ];
                \Mail::to($data['email'])->send(new SendMail($content));
            // }
            return response()->json();
            
        } catch(Exception $e) {
            return 'fail';
        }
    }
}
