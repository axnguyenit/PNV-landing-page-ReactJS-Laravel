<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContainersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('containers', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('component_id');
            $table->integer('position');
            $table->string('name');
            $table->string('url');
            $table->string('desc');
            $table->json('params')->nullable();
            $table->timestamps();
            $table->foreign('component_id')
                ->references('id')
                ->on('components')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('containers');
    }
}
