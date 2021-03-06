<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDonatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('donates', function (Blueprint $table) {
            $table->increments('id');
            // $table->string('transaction_code');
            $table->string('name');
            $table->string('email');
            // $table->string('phone');
            // $table->string('address');
            $table->string('amount');
            $table->string('donation_for');
            $table->string('donation_type');
            $table->string('currency_code');
            $table->string('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('donates');
    }
}
