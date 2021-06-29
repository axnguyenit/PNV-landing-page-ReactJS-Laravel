<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ComponentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // About Start
        DB::table('components')->insert([
            'name' => 'About us',
            'url' => 'about',
            'desc' => '',
            'params' => json_encode([
                'img' => './assets/images/about-us.jpg',
                'desc' => [
                    'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.',
                    'Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.',
                    'Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.'
                ]
            ]),
        ]);
        // Start End
        
        // Causes Start
        DB::table('components')->insert([
            'name' => 'Our recent causes',
            'url' => 'causes',
            'desc' => 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at.',
            'params' => json_encode([
                [
                    'img' => './assets/images/1.jpg',
                    'title' => 'Donate for helpless',
                    'desc' => 'Much evil soon high in hope do view. Out may few northward.',
                    'raised' => 1299,
                    'goal' => 1299,
                    'donors' => 1299,
                    'timeLeft' => 1299,
                ],
                [
                    'img' => './assets/images/1.jpg',
                    'title' => 'Donate for helpless',
                    'desc' => 'Much evil soon high in hope do view. Out may few northward.',
                    'raised' => 1299,
                    'goal' => 1299,
                    'donors' => 1299,
                    'timeLeft' => 1299,
                ],
                [
                    'img' => './assets/images/1.jpg',
                    'title' => 'Donate for helpless',
                    'desc' => 'Much evil soon high in hope do view. Out may few northward.',
                    'raised' => 1299,
                    'goal' => 1299,
                    'donors' => 1299,
                    'timeLeft' => 1299,
                ],
                [
                    'img' => './assets/images/1.jpg',
                    'title' => 'Donate for helpless',
                    'desc' => 'Much evil soon high in hope do view. Out may few northward.',
                    'raised' => 1299,
                    'goal' => 1299,
                    'donors' => 1299,
                    'timeLeft' => 1299,
                ],
            ]),
        ]);
        // Causes End


        // DB::table('components')->insert([
        //     'name' => 'About us',
        //     'url' => 'about',
        //     'desc' => '',
        //     'params' => json_encode([
        //         'img' => './assets/images/about-us.jpg',
        //         'desc' => [
        //             'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.',
        //             'Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.',
        //             'Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.'
        //         ]
        //     ]),
        // ]);
        // DB::table('components')->insert([
        //     'name' => 'About us',
        //     'url' => 'about',
        //     'desc' => '',
        //     'params' => json_encode([
        //         'img' => './assets/images/about-us.jpg',
        //         'desc' => [
        //             'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.',
        //             'Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.',
        //             'Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.'
        //         ]
        //     ]),
        // ]);
        // DB::table('components')->insert([
        //     'name' => 'About us',
        //     'url' => 'about',
        //     'desc' => '',
        //     'params' => json_encode([
        //         'img' => './assets/images/about-us.jpg',
        //         'desc' => [
        //             'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.',
        //             'Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.',
        //             'Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.'
        //         ]
        //     ]),
        // ]);
        // DB::table('components')->insert([
        //     'name' => 'About us',
        //     'url' => 'about',
        //     'desc' => '',
        //     'params' => json_encode([
        //         'img' => './assets/images/about-us.jpg',
        //         'desc' => [
        //             'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.',
        //             'Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.',
        //             'Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.'
        //         ]
        //     ]),
        // ]);
        // DB::table('components')->insert([
        //     'name' => 'About us',
        //     'url' => 'about',
        //     'desc' => '',
        //     'params' => json_encode([
        //         'img' => './assets/images/about-us.jpg',
        //         'desc' => [
        //             'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.',
        //             'Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.',
        //             'Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.'
        //         ]
        //     ]),
        // ]);
        // DB::table('components')->insert([
        //     'name' => 'About us',
        //     'url' => 'about',
        //     'desc' => '',
        //     'params' => json_encode([
        //         'img' => './assets/images/about-us.jpg',
        //         'desc' => [
        //             'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.',
        //             'Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.',
        //             'Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.'
        //         ]
        //     ]),
        // ]);
        // DB::table('components')->insert([
        //     'name' => 'About us',
        //     'url' => 'about',
        //     'desc' => '',
        //     'params' => json_encode([
        //         'img' => './assets/images/about-us.jpg',
        //         'desc' => [
        //             'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.',
        //             'Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.',
        //             'Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.'
        //         ]
        //     ]),
        // ]);
        // DB::table('components')->insert([
        //     'name' => 'About us',
        //     'url' => 'about',
        //     'desc' => '',
        //     'params' => json_encode([
        //         'img' => './assets/images/about-us.jpg',
        //         'desc' => [
        //             'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.',
        //             'Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.',
        //             'Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.'
        //         ]
        //     ]),
        // ]);
        // DB::table('components')->insert([
        //     'name' => 'About us',
        //     'url' => 'about',
        //     'desc' => '',
        //     'params' => json_encode([
        //         'img' => './assets/images/about-us.jpg',
        //         'desc' => [
        //             'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.',
        //             'Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.',
        //             'Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.'
        //         ]
        //     ]),
        // ]);
        // DB::table('components')->insert([
        //     'name' => 'About us',
        //     'url' => 'about',
        //     'desc' => '',
        //     'params' => json_encode([
        //         'img' => './assets/images/about-us.jpg',
        //         'desc' => [
        //             'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.',
        //             'Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.',
        //             'Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.'
        //         ]
        //     ]),
        // ]);
        // DB::table('components')->insert([
        //     'name' => 'About us',
        //     'url' => 'about',
        //     'desc' => '',
        //     'params' => json_encode([
        //         'img' => './assets/images/about-us.jpg',
        //         'desc' => [
        //             'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.',
        //             'Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.',
        //             'Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.'
        //         ]
        //     ]),
        // ]);
        // DB::table('components')->insert([
        //     'name' => 'About us',
        //     'url' => 'about',
        //     'desc' => '',
        //     'params' => json_encode([
        //         'img' => './assets/images/about-us.jpg',
        //         'desc' => [
        //             'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.',
        //             'Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.',
        //             'Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.'
        //         ]
        //     ]),
        // ]);
        // DB::table('components')->insert([
        //     'name' => 'About us',
        //     'url' => 'about',
        //     'desc' => '',
        //     'params' => json_encode([
        //         'img' => './assets/images/about-us.jpg',
        //         'desc' => [
        //             'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.',
        //             'Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.',
        //             'Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.'
        //         ]
        //     ]),
        // ]);
        // DB::table('components')->insert([
        //     'name' => 'About us',
        //     'url' => 'about',
        //     'desc' => '',
        //     'params' => json_encode([
        //         'img' => './assets/images/about-us.jpg',
        //         'desc' => [
        //             'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.',
        //             'Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.',
        //             'Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.'
        //         ]
        //     ]),
        // ]);

    }
}
