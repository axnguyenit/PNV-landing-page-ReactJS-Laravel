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
                    "subTitle" => "PNV for hopeless peoples",
                    "title" => "We give a helping hand for happy life",
                    "background" => "http://localhost:8000/files/1626486551-176778080_3868749673204487_7325439355205340404_n.jpg"
                  ],
                  [
                    "title" => "We give a helping hand for happy life",
                    "subTitle" => "PNV for hopeless peoples",
                    "background" => "http://localhost:8000/files/1626486741-165949070_3796052373807551_6614457510907095919_n.jpg"
                  ],
                  [
                    "subTitle" => "PNV for hopeless peoples",
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
                "title" => "ITnuoiIT",
                "desc" => "<p>Bạn có biết, 50% quỹ hoạt động của PNV đến từ trợ cấp của &nbsp;các tập đoàn lớn. Với sự xuất hiện của COVID-19, 39.4% hộ nghèo tăng thêm so với trước khi đại dịch xảy ra, 85.7 % các doanh gnhieejp ở Việt Nam bị nahr hưởng và phải cắt giảm chi phí bao gồm các khoản tài trợ từ thiện. 61% quỹ hoạt động hàng năm của PNV THIẾU tính đến thắng 7 năm 2021.</p>\n<p>Chương trình IT nuôi IT là chương trình gây quỹ cộng đồng nhằm chung sức với PNV để xây dựng dự án \"xây cầu công nghệ\" cho các kỹ sư CNTT tương lai được tiếp tục trong giai đoạn đặc biệt khó khăn này.</p>\n<p>Hỗ trợ tài chính cho sinh viên PNV theo tháng với mức chỉ từ 50.000đ/tháng. PNV mong rằng các bạn tham gia nuôi các em IT theo tháng, đóng góp định kỳ để đồng hành lâu dài cùng các em.</p>",
                "file" => "http://localhost:8000/files/1628272231-126899959_3466409546771837_2977095222181321492_n.jpg"
              ]
            ],
            [
              "name" => "About",
              "show" => true,
              "componentParams" => [
                "file" => "http://localhost:8000/files/1628271058-126899959_3466409546771837_2977095222181321492_n.jpg",
                "title" => "About",
                "desc" => "<p>Passerelles numériques is a non-profit organization under French law, created in 2005, operating in three Asian countries: <a href=\"https://www.passerellesnumeriques.org/our-actions/cambodia/\" title=\"Cambodia\">Cambodia</a>, the <a href=\"https://www.passerellesnumeriques.org/our-actions/philippines/\" title=\"Philippines\">Philippines</a>, and <a href=\"https://www.passerellesnumeriques.org/our-actions/vietnam/\" title=\"Vietnam\">Vietnam</a>.&nbsp;</p>\n<p>Our mission is to provide education, technical and professional training in the digital sector to young underprivileged people by leveraging their potential and willpower. We endeavour to truly develop their employability which will allow them and their families to escape poverty in a sustainable way, and contribute to the social and economic development of their countries.&nbsp;</p>\n<p>Our beneficiaries are typically underprivileged or disadvantaged, in extremely precarious situations, according to the criteria PN has defined/specified for each of the countries in which it operates.&nbsp;</p>\n<p>PN’s objective is that at least 90% of the students enrolled in our programs can escape poverty, be professionally more successful relatively to the national average, and take advantage of a ‘Gateway for Life’.&nbsp;</p>\n<p>PN’s additional objective is to reduce inequality between genders. Therefore, PN strives to enrol a ratio of at least 50% girls (or a maximum of two thirds) at each of our centers.&nbsp;</p>"
              ]
            ],
            [
              "name" => "Causes",
              "show" => true,
              "componentParams" => [
                "tasks" => [
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
                    "file" => "http://127.0.0.1:8000/files/1628580634-IMG_6884.jpg",
                    "raised" => "$100",
                    "goal" => "$1000",
                    "donors" => "12",
                    "timeLeft" => "5 days"
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
                    "file" => "http://127.0.0.1:8000/files/1628580562-Featured-image-1-400x250.jpg",
                    "raised" => "$100",
                    "goal" => "$1000",
                    "donors" => "12",
                    "timeLeft" => "11 days"
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
                    "file" => "http://localhost:8000/files/1626488759-160936086_3754446967968092_4613389374008195814_n.jpg",
                    "timeLeft" => "5 days",
                    "donors" => "15",
                    "goal" => "$1000",
                    "raised" => "$99"
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
                    "file" => "http://localhost:8000/files/1626488766-160558011_3754439897968799_7547598645428764941_n.jpg",
                    "timeLeft" => "5 days",
                    "donors" => "13",
                    "goal" => "$1200",
                    "raised" => "$300"
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
                    "file" => "http://127.0.0.1:8000/files/1628577339-140622658_3616917921720998_1033743568133356212_n.jpg",
                    "year" => "Senior Brand Partner Manager Nu Skin Vietnam",
                    "name" => "Lê Thị Minh Nguyệt"
                  ],
                  [
                    "name" => "Trần Mạnh Huy",
                    "year" => "CEO & Founder V.B.P.O Đà Nẵng JSC",
                    "file" => "http://127.0.0.1:8000/files/1628577345-140732344_3616917888387668_445998331362894955_n.jpg"
                  ],
                  [
                    "name" => "Tôn Thị Cẩm Bình",
                    "year" => "Director Viet's Smile Training & Counseling Psychology JSC",
                    "file" => "http://127.0.0.1:8000/files/1628577351-141291905_3616917905054333_5771674493651215297_n.jpg"
                  ],
                  [
                    "name" => "Lê Thị Minh Nguyệt",
                    "year" => "Senior Brand Partner Manager Nu Skin Vietnam",
                    "file" => "http://127.0.0.1:8000/files/1628580817-140622658_3616917921720998_1033743568133356212_n.jpg"
                  ],
                  [
                    "file" => "http://127.0.0.1:8000/files/1628580826-140732344_3616917888387668_445998331362894955_n.jpg",
                    "year" => "CEO & Founder V.B.P.O Đà Nẵng JSC",
                    "name" => "Trần Mạnh Huy"
                  ]
                ],
                "title" => "Volunteers",
                "desc" => "<p>Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity.&nbsp;</p>"
              ]
            ],
            [
              "name" => "Partners",
              "show" => true,
              "componentParams" => [
                "tasks" => [
                  [
                    "url" => "https://www.axonactive.com/",
                    "file" => "http://localhost:8000/files/1626425777-Axon-logoPNwebsite.png"
                  ],
                  [
                    "url" => "http://danavtc.edu.vn/",
                    "file" => "http://localhost:8000/files/1626425775-DVT-400x284.png"
                  ],
                  [
                    "url" => "https://www.logigear.com/",
                    "file" => "http://localhost:8000/files/1626425770-Logigear-logo.png"
                  ],
                  [
                    "url" => "https://kms-technology.com/",
                    "file" => "http://localhost:8000/files/1626425761-KMS-Technology-400x284.png"
                  ],
                  [
                    "url" => "https://seadev.us/",
                    "file" => "http://localhost:8000/files/1626425784-seadev.png"
                  ],
                  [
                    "url" => "https://neo-lab.vn/",
                    "file" => "http://localhost:8000/files/1626425792-Neolab.png"
                  ]
                ],
                "title" => "Partners",
                "desc" => "<p>PN Vietnam values partnering in sharing knowledge and strength to give the best to our students. Partnerships are either financial through grants and in-kind donations, human with skills sponsorship programs, or pedagogical.&nbsp;</p>"
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
                    "file" => "http://127.0.0.1:8000/files/1628579472-IMG_6884-400x250.jpg"
                  ],
                  [
                    "name" => "Hoài NGÔ THỊ MỸ",
                    "testimonial" => "As a girl, many people once questioned my choice to pursue an IT major. They said I should choose other career paths, like becoming a teacher or a tour guide, that I would never be as good as boys in IT. At that time, I did not know how to answer. I just knew that I wanted to follow this dream no matter what. I believed that if I tried, I could do it. I chose PN as the place to nurture that dream.",
                    "file" => "http://127.0.0.1:8000/files/1628579779-Hoai-NGO-THI-MY-Student.jpg"
                  ],
                  [
                    "name" => "Lucas SINROD",
                    "testimonial" => "The IT world is full of machines and AI, and so can be characteristically cold. Through PN I have rediscovered the human side of technology. With every smiling face or curious question, PN students remind me why I learned to code. Computers are fascinating! Tech progress is exciting!",
                    "file" => "http://127.0.0.1:8000/files/1628579813-Lucas-SINROD-Staff.jpg"
                  ],
                  [
                    "testimonial" => "We were the first batch in the expansion to a full three-year training program. We had more time to learn the cutting-edge technologies that companies need. We developed the soft skills that helped us in our career paths. Moreover, the Specialization module and the final internship boosted my employability.",
                    "name" => "Cuong NGUYEN HUU",
                    "file" => "http://127.0.0.1:8000/files/1628579991-Cuong-NGUYEN-HUU-Alumni.jpg"
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
                "slogan" => "<p>PNV on VTV 4</p>",
                "videoUrl" => "https://www.youtube.com/embed/v6BAKdfRq6s",
                "file" => "http://127.0.0.1:8000/files/1627052903-176778080_3868749673204487_7325439355205340404_n.jpg"
              ]
            ],
            [
              "name" => "Gallery",
              "show" => true,
              "componentParams" => [
                "tasks" => [
                  [
                    "images" => [
                      [
                        "file" => "http://127.0.0.1:8000/files/1627050052-160998233_3760276224051833_8908666237433458936_n.jpg"
                      ],
                      [
                        "file" => "http://127.0.0.1:8000/files/1627049766-160558011_3754439897968799_7547598645428764941_n.jpg"
                      ],
                      [
                        "file" => "http://127.0.0.1:8000/files/1627050036-160936086_3754446967968092_4613389374008195814_n.jpg"
                      ]
                    ],
                    "filter" => "Activity"
                  ],
                  [
                    "images" => [
                      [
                        "file" => "http://127.0.0.1:8000/files/1627049749-Blossom-in-the-storm-1-400x250.jpg"
                      ],
                      [
                        "file" => "http://127.0.0.1:8000/files/1627050029-160101603_3754440081302114_3810132440188073441_n.jpg"
                      ]
                    ],
                    "filter" => "Children"
                  ],
                  [
                    "images" => [
                      [
                        "file" => "http://127.0.0.1:8000/files/1627049762-160936086_3754446967968092_4613389374008195814_n.jpg"
                      ],
                      [
                        "file" => "http://127.0.0.1:8000/files/1627049766-160558011_3754439897968799_7547598645428764941_n.jpg"
                      ],
                      [
                        "file" => "http://127.0.0.1:8000/files/1627050036-160936086_3754446967968092_4613389374008195814_n.jpg"
                      ]
                    ],
                    "filter" => "Activity"
                  ]
                ],
                "slogan" => "<p>Slogan Gallery</p>",
                "title" => "Gallery"
              ]
            ],
            [
              "name" => "Contact",
              "show" => true,
              "componentParams" => [
                "slogan" => "<p>Filling your information to contact with us and subscribe to our newsletter.</p>",
                "address" => "99 To Hien Thanh, Da Nang, Vietnam",
                "phone" => "+84 236 3888 503",
                "email" => "info.vietnam@passerellesnumeriques.org",
                "facebook" => "https://www.facebook.com/passerelles.numeriques",
                "linkedin" => "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQG_aNlIQNeipwAAAXrT2whosdtiX8lSfjoZ2gXpSpzG1Y1Qwpe8-QUc6APp3wyO3gCA-mIT7BqMky9lOxxxded1POOWDevU55UZEm7A90e2ZIJxyHIAsUPdYExZI_JAmhDHchE=&originalReferer=https://l.facebook.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fpasserellesnum-riques%2F%3Ffbclid%3DIwAR1Uc9Xb1n3yNJWxDT6bOrX14sSxSqvMUbwO9GVck2-F_YWY6slDRCpIIdQ",
                "youtube" => "https://www.youtube.com/user/PasserellesNumerique",
                "title" => "Contact Form",
                "twitter" => "https://twitter.com/passerellesNume?fbclid=IwAR1Uc9Xb1n3yNJWxDT6bOrX14sSxSqvMUbwO9GVck2-F_YWY6slDRCpIIdQ"
              ]
            ],
            [
              "name" => "Footer",
              "show" => true,
              "componentParams" => [
                "links" => [
                  [
                    "name" => "Home",
                    "link" => "#"
                  ],
                  [
                    "name" => "About",
                    "link" => "#"
                  ],
                  [
                    "name" => "Partners",
                    "link" => "#"
                  ],
                  [
                    "link" => "#",
                    "name" => "Volunteers"
                  ],
                  [
                    "link" => "#",
                    "name" => "Milestones"
                  ],
                  [
                    "link" => "#",
                    "name" => "Contact"
                  ]
                ],
                "milestones" => [
                  [
                    "milestone" => "10 years of clelbration for helping peoples"
                  ],
                  [
                    "milestone" => "Peoples in south asia is ingressing day by day"
                  ],
                  [
                    "milestone" => "We give a helping hand for happy life"
                  ],
                  [
                    "milestone" => "10 years of clelbration for helping peoples"
                  ]
                ],
                "gallery" => [
                  [
                    "img" => "http://127.0.0.1:8000/files/1627058801-164833846_3796050877141034_3848534070815939540_n.jpg"
                  ],
                  [
                    "img" => "http://127.0.0.1:8000/files/1627059067-164833846_3796050877141034_3848534070815939540_n.jpg"
                  ],
                  [
                    "img" => "http://127.0.0.1:8000/files/1627059042-164833846_3796050877141034_3848534070815939540_n.jpg"
                  ],
                  [
                    "img" => "http://127.0.0.1:8000/files/1627059046-164833846_3796050877141034_3848534070815939540_n.jpg"
                  ],
                  [
                    "img" => "http://127.0.0.1:8000/files/1627059050-164833846_3796050877141034_3848534070815939540_n.jpg"
                  ],
                  [
                    "img" => "http://127.0.0.1:8000/files/1627059054-164833846_3796050877141034_3848534070815939540_n.jpg"
                  ],
                  [
                    "img" => "http://127.0.0.1:8000/files/1627059058-164833846_3796050877141034_3848534070815939540_n.jpg"
                  ],
                  [
                    "img" => "http://127.0.0.1:8000/files/1627059061-164833846_3796050877141034_3848534070815939540_n.jpg"
                  ],
                  [
                    "img" => "http://127.0.0.1:8000/files/1627059032-164833846_3796050877141034_3848534070815939540_n.jpg"
                  ]
                ],
                "copyright" => "2021 PNV - Passerelles numériques Vietnam | Made with love by: Team Spirit",
                "slogan" => "<p>We enable young underprivileged people to build their employability through education in the digital industry</p>",
                "title" => "Kha",
                "logo" => "http://127.0.0.1:8000/files/1627058809-logo-pn.png"
              ]
            ]
          ]),
          "created_at" => now(),
          "updated_at" => now(),
        ]);
    }
}
