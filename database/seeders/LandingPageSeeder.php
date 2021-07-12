<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class LandingPageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('landing_pages')->insert([
            'name' => 'home-page',
            'url' => 'home-page',
            'description' => 'home-page',
            'meta' => 'home-page',
            'title' => 'home-page',
            'components' => '{
                "banner": {
                    "background": "abc.png",
                    "title": "this is title"
                }
            }',
        ]);
    }
}
