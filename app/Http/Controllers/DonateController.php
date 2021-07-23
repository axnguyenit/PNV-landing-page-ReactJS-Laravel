<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;
use App\Models\Donate;
use Carbon\Carbon;

class DonateController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Donate::all();
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
            // $data = $request;
            $transaction = file_get_contents('php://input');
            // $transaction = 'payment_cycle=Monthly&txn_type=recurring_payment_profile_created&last_name=Doe&next_payment_date=03%3A00%3A00+Jul+23%2C+2021+PDT&residence_country=US&initial_payment_amount=0.00&currency_code=USD&time_created=20%3A32%3A01+Jul+22%2C+2021+PDT&verify_sign=AfI2xQtjHViWY9Oo4afd-ayLf0vkAUzGj-AnQxUgDYpOWCOgNwuRYpqP&period_type=+Regular&payer_status=verified&test_ipn=1&tax=0.00&payer_email=sb-e0zak6703952%40personal.example.com&first_name=John&receiver_email=sb-5d8tz6703948%40business.example.com&payer_id=5KY5D7LAQEV8C&product_type=1&shipping=0.00&amount_per_cycle=15.00&profile_status=Active&charset=UTF-8&notify_version=3.9&amount=15.00&outstanding_balance=0.00&recurring_payment_id=I-LESH3HSUKH6J&product_name=ITnuoiIT&ipn_track_id=21b7ea59439b6';

            $transaction_details = [
                'payment_cycle',
                'first_name',
                'last_name',
                'payer_email',
                'amount',
                'product_name',
                'currency_code',
                'next_payment_date',
            ];

            $data = [];
                
            $collection = Str::of($transaction)->explode('&');
            
            foreach ($collection as $key => $value) {
                foreach ($transaction_details as $value1) {
                    if(strcmp(Str::of($value)->explode('=')[0], $value1) == 0) {
                        $valTerm = '';
                        if(strcmp('payer_email', $value1) == 0) {
                            $valTerm = Str::replace('%40', '@', Str::of($value)->explode('=')[1]);
                        }
                        else if(strcmp('next_payment_date', $value1) == 0) {
                            $valTerm = Str::replace('%3A', ':', Str::of($value)->explode('=')[1]);
                            $valTerm = Str::replace('%2C', ',', $valTerm);
                            $valTerm = Str::replace('+PDT', '', $valTerm);
                            $valTerm = Str::replace('+', ' ', $valTerm);
                        }
                        else {
                            $valTerm = Str::of($value)->explode('=')[1];
                        }
                        $data[$value1] = $valTerm;
                    }
                }
            }

            // $isValidDonate = Donate::where("email", $data['payer_email'])->first();

            // if(is_null($isValidDonate)) {
                $donate = new Donate();
                $donate->name = $data['first_name'].' '.$data['last_name'];
                $donate->email = $data['payer_email'];
                $donate->amount = $data['amount'];
                $donate->donation_for = $data['product_name'];
                if(strcmp($data['payment_cycle'], 'Monthly') == 0) {             
                    $donate->donation_type = $data['payment_cycle'];
                }
                else {
                    $donate->donation_type = 'Once time';
                }
                $donate->currency_code = $data['currency_code'];
                $donate->date = $data['next_payment_date'];
                $donate->created_at = Carbon::now('Asia/Ho_Chi_Minh');
                $donate->updated_at = Carbon::now('Asia/Ho_Chi_Minh');
                $donate->save();
            // }

            // $contactTerm = Contact::where("email", $data['email'])->first();

            // if(!is_null($contactTerm)) {
            //     $code = rand(999999, 111111);
            //     $content = [
            //         'title' => 'Code Verification',
            //         'body' => $code,
            //     ];
            //     \Mail::to($data['email'])->send(new SendMail($content));
            // }
            return response()->json();
            
        } catch(Exception $e) {
            return 'fail';
        }
    }
}
