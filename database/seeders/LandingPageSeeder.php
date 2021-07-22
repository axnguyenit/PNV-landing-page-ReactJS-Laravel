<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class LandingPageSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        DB::table('landing_pages')->insert([
            "name" => "home-page",
            "url" => "home-page",
            "description" => "home-page",
            "meta" => "home-page",
            "title" => "home-page",
            "components" => json_encode([
                [
                    "name" => "Banner",
                    "show" => true,
                    "componentParams" => [
                        "bannerItems" => [
                          [
                            "subTitle" => "Prottasha for hopeless peoples",
                            "title" => "We give a helping hand for happy life",
                            "background" => "http://localhost:8000/files/1626486551-176778080_3868749673204487_7325439355205340404_n.jpg"
                          ],
                          [
                            "title" => "We give a helping hand for happy life",
                            "subTitle" => "Prottasha for hopeless peoples",
                            "background" => "http://localhost:8000/files/1626486741-165949070_3796052373807551_6614457510907095919_n.jpg"
                          ],
                          [
                            "subTitle" => "Prottasha for hopeless peoples",
                            "title" => "We give a helping hand for happy life",
                            "background" => "http://localhost:8000/files/1626487151-130226703_3505949189484539_6042040827060488726_n.jpg"
                          ]
                        ],
                      "title" => "Banner"
                    ]
                ],
                [
                  "name" => "About",
                  "show" => true,
                  "componentParams" => [
                    "file" => "http://localhost:8000/files/1626657190-about-us.jpg",
                    "title" => "About",
                    "desc" => "<p>In on announcing &nbsp;if of comparison pianoforte projection. Maids hoped &nbsp;gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do.&nbsp;</p>\n<p>Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did.Rather in lasted no within no. Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence.&nbsp;</p>"
                  ]
                ],
                [
                  "name" => "Causes",
                  "show" => true,
                  "componentParams" => [
                    "tasks" => [
                      [
                        "title1" => "key1",
                        "content1" => "value1",
                        "title2" => "key2",
                        "title3" => "key3",
                        "title4" => "key4",
                        "content2" => "value2",
                        "content3" => "value3",
                        "content4" => "value4",
                        "title" => "Donate for helpless",
                        "desc" => "Much evil soon high in hope do view. Out may few northward.",
                        "file" => "http://localhost:8000/files/1626488564-IMG_6884-400x250.jpg"
                      ],
                      [
                        "title" => "Donate for education",
                        "desc" => "Much evil soon high in hope do view. Out may few northward.",
                        "title1" => "key 1",
                        "title2" => "key 1",
                        "title3" => "key 1",
                        "title4" => "key 1",
                        "content1" => "value 1",
                        "content2" => "value 1",
                        "content3" => "value 1",
                        "content4" => "value 1",
                        "file" => "http://localhost:8000/files/1626658508-2.jpg"
                      ],
                      [
                        "title1" => "key1",
                        "content1" => "value1",
                        "title2" => "key2",
                        "title3" => "key3",
                        "title4" => "key4",
                        "content2" => "value2",
                        "content3" => "value3",
                        "content4" => "value4",
                        "title" => "Donate for helpless",
                        "desc" => "Much evil soon high in hope do view. Out may few northward.",
                        "file" => "http://localhost:8000/files/1626488759-160936086_3754446967968092_4613389374008195814_n.jpg"
                      ],
                      [
                        "title" => "Donate for education",
                        "desc" => "Much evil soon high in hope do view. Out may few northward.",
                        "title1" => "key 1",
                        "title2" => "key 1",
                        "title3" => "key 1",
                        "title4" => "key 1",
                        "content1" => "value 1",
                        "content2" => "value 1",
                        "content3" => "value 1",
                        "content4" => "value 1",
                        "file" => "http://localhost:8000/files/1626488766-160558011_3754439897968799_7547598645428764941_n.jpg"
                      ]
                    ],
                    "title" => "Causes",
                    "desc" => "<p>Causes</p>"
                  ]
                ],
                [
                  "name" => "Volunteers",
                  "show" => true,
                  "componentParams" => [
                    "tasks" => [
                      [
                        "file" => "http://localhost:8000/files/1626487287-140622658_3616917921720998_1033743568133356212_n.jpg",
                        "year" => "Senior Brand Partner Manager Nu Skin Vietnam",
                        "name" => "Lê Thị Minh Nguyệt"
                      ],
                      [
                        "name" => "Trần Mạnh Huy",
                        "year" => "CEO & Founder V.B.P.O Đà Nẵng JSC",
                        "file" => "http://localhost:8000/files/1626487347-140732344_3616917888387668_445998331362894955_n.jpg"
                      ],
                      [
                        "name" => "Tôn Thị Cẩm Bình",
                        "year" => "Director Viet's Smile Training & Counseling Psychology JSC",
                        "file" => "http://localhost:8000/files/1626487420-141291905_3616917905054333_5771674493651215297_n.jpg"
                      ],
                      [
                        "name" => "Lê Thị Minh Nguyệt",
                        "file" => "http://localhost:8000/files/1626658955-1(3).jpg",
                        "year" => "Senior Brand Partner Manager Nu Skin Vietnam"
                      ],
                      [
                        "name" => "Trần Mạnh Huy",
                        "year" => "CEO & Founder V.B.P.O Đà Nẵng JSC",
                        "file" => "http://localhost:8000/files/1626658965-5(1).jpg"
                      ]
                    ],
                    "title" => "Volunteers",
                    "desc" => "<p>Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity.&nbsp;</p>"
                  ]
                ],
                [
                  "name" => "JoinAsVolunteer",
                  "show" => true,
                  "componentParams" => [
                    "desc" => "<p>Real sold my in call. Invitation on an advantages collecting. But event old above shy bed noisy. Had sister see wooded favour income has. Stuff rapid since do as hence. Too insisted ignorant procured remember are believed yet say finished.&nbsp;</p>",
                    "title" => "Join As Volunteer",
                    "file" => "http://localhost:8000/files/1626488110-160101603_3754440081302114_3810132440188073441_n.jpg"
                  ]
                ],
                [
                  "name" => "Milestones",
                  "show" => true,
                  "componentParams" => [
                    "tasks" => [
                      [
                        "date" => "2020-10-17",
                        "title" => "PN Vietnam celebrated its 10th anniversary.",
                        "desc" => "By so delight of showing neither believes he present. Deal sigh up in shew away when. Pursuit express no or prepare replied. Wholly formed old latter future but way she.",
                        "file" => "http://localhost:8000/files/1626488278-Blossom-in-the-storm-1-400x250.jpg"
                      ],
                      [
                        "file" => "http://localhost:8000/files/1626488315-cover-website-400x250.png",
                        "date" => "2019-12-18",
                        "desc" => "By so delight of showing neither believes he present. Deal sigh up in shew away when. Pursuit express no or prepare replied. Wholly formed old latter future but way she.",
                        "title" => "Graduates of PN Vietnam’s 2019 Class On October 12th"
                      ]
                    ],
                    "title" => "Milestones",
                    "desc" => "<p>With my them if up many. Lain week nay she them her she. Extremity so attending objection as engrossed gentleman something.&nbsp;</p>"
                  ]
                ],
                [
                  "name" => "Partners",
                  "show" => true,
                  "componentParams" => [
                    "tasks" => [
                      [
                        "url" => "test",
                        "file" => "http://localhost:8000/files/1626425777-Axon-logoPNwebsite.png"
                      ],
                      [
                        "url" => "eeee",
                        "file" => "http://localhost:8000/files/1626425775-DVT-400x284.png"
                      ],
                      [
                        "url" => "eeee",
                        "file" => "http://localhost:8000/files/1626425770-Logigear-logo.png"
                      ],
                      [
                        "url" => "eeeeerere",
                        "file" => "http://localhost:8000/files/1626425761-KMS-Technology-400x284.png"
                      ],
                      [
                        "url" => "ee",
                        "file" => "http://localhost:8000/files/1626425784-seadev.png"
                      ],
                      [
                        "url" => "teset",
                        "file" => "http://localhost:8000/files/1626425792-Neolab.png"
                      ],
                      [
                        "url" => "asasasas",
                        "file" => "http://localhost:8000/files/1626425787-mgm.png"
                      ]
                    ],
                    "title" => "Partners",
                    "desc" => "<p>Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot called.&nbsp;</p>"
                  ]
                ],
                [
                  "name" => "Testimonials",
                  "show" => true,
                  "componentParams" => [
                    "tasks" => [
                      [
                        "testimonial" => "H. was born and raised in a mountainous area in Hung Hoa district, Quang Tri province. She is from the Van Kieu ethnic group. H.’s family includes her parents, 2 brothers, 3 younger sisters. They are farmers and have to depend on the field of cassava for livelihood.",
                        "name" => "Hồ Thị Hươu",
                        "file" => "http://localhost:8000/files/1626498269-IMG_6884-400x250.jpg"
                      ],
                      [
                        "name" => "Kha Nguyen",
                        "testimonial" => "H. was born and raised in a mountainous area in Hung Hoa district, Quang Tri province. She is from the Van Kieu ethnic group. H.’s family includes her parents, 2 brothers, 3 younger sisters. They are farmers and have to depend on the field of cassava for livelihood.",
                        "file" => "http://localhost:8000/files/1626499233-IMG_0434_2.jpg"
                      ],
                      [
                        "name" => "Hà Mộng Khang",
                        "testimonial" => "H. was born and raised in a mountainous area in Hung Hoa district, Quang Tri province. She is from the Van Kieu ethnic group. H.’s family includes her parents, 2 brothers, 3 younger sisters. They are farmers and have to depend on the field of cassava for livelihood.",
                        "file" => "http://localhost:8000/files/1626499304-1(2).jpg"
                      ],
                      [
                        "name" => "Tran T.Q",
                        "testimonial" => "“Every person is born with a destiny” – That is what Tran T.Q., a Passerelles numériques Vietnam student of batch 20, currently a software engineer, told about the story of her life. Like a flower in the thunderstorms, the young girl has been constantly striving towards a better future.",
                        "file" => "http://localhost:8000/files/1626499379-Blossom-in-the-storm-1-400x250.jpg"
                      ]
                    ],
                    "desc" => "<p>Testimonials&nbsp;</p>",
                    "title" => "Testimonials"
                  ]
                ],
                [
                  "name" => "Video",
                  "show" => true,
                  "componentParams" => [
                    "title" => "About PNV",
                    "desc" => "<p>https://www.youtube.com/embed/nx7YABM9PR8</p>\n<p>https://youtu.be/nx7YABM9PR8</p>",
                    "videoUrl" => "https://www.youtube.com/embed/nx7YABM9PR8",
                    "file" => "http://127.0.0.1:8000/files/1626707705-video-promo.jpg"
                  ]
                ]
            ]),
        ]);
    }
}
