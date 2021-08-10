<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            "name" => "Nguyen Dinh Kha",
            "username" => "luly",
            "email" => "kha.nguyen01.it@gmail.com",
            "password" => md5(12345),
        ]);

        DB::table('users')->insert([
            "name" => "Admin",
            "username" => "admin",
            "email" => "admin@gmail.com",
            "password" => md5(12345),
        ]);
    }
}
