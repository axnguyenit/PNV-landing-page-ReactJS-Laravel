const systemComponent = {
    // "Header": {
    //     title: "Menu Header",
    //     type: "object",
    //     properties: {
    //         title: { type: "string", title: "Title", },
    //         menuItems: { 
    //             type: "array", 
    //             title: "Menu items",
    //             items: {
    //                 properties: {
    //                     title: { 
    //                         type: "string", 
    //                         title: "Value item", 
    //                     },
    //                 },
    //             },

    //         },
    //         logo: { type: "string",  title: "Single file" },
    //     }
    // },
    "Banner": {
        title: "Banner",
        type: "object",
        properties: {
            title: { type: "string", title: "Title", },
            bannerItems: { 
                type: "array", 
                title: "Banner Item (Max 5)",
                maxItems: 5,
                items: {
                    properties: {
                        subTitle: { type: "string", title: "Sub title"},
                        title: { type: "string", title: "title"},
                        background: { type: "string",  title: "Single file" },
                        // buttonItems: {
                        //     type: "array", 
                        //     title: "buttons",
                        //     items: {
                        //         properties: {
                        //             buttonText: { type: "string", title: "text"},
                        //             buttonLink: { type: "string", title: "link"},
                        //             buttonClass: { type: "string", title: "classCss"},
                        //         }
                        //     }
                        // }
                    },
                },
            }
        }
    },
    "About": {
        title: "About",
        type: "object",
        required: [
            "title",
            "desc",
        ],
        properties: {
            title: { type: "string", title: "Title", },
            desc: { type: "string", title: "Description" },
            file: { type: "string", title: "Single file" },
        }
    },
    "Gallery": {
        title: 'Gallery',
        type: 'object',
        required: [
            "title",
            "slogan",
        ],
        properties: {
            title: { type: "string", title: "Title" },
            slogan: { type: "string", title: "Slogan" },
            tasks: { 
                type: "array", 
                title: "Gallery Filter (Max 5)",
                maxItems: 5,
                items: {
                    type: "object",
                    required: [
                        'filter',
                    ],
                    properties: {
                        filter: { type: "string", title: "Filter"},
                        images: {
                            type: "array", 
                            title: "Images (Max 12)",
                            maxItems: 12,
                            items: {
                                properties: {
                                    file: { type: "string",  title: "Single file" },
                                }
                            }
                        }
                    },
                },
            }
        }
    },
    "Causes": {
        title: "Causes",
        type: "object",
        required: [
            "title",
            "desc",
        ],
        properties: {
            title: { type: "string", title: "Title" },
            desc: { type: "string", title: "Description" },
            tasks: {
                type: "array",
                title: "Causes List (Max 10)",
                maxItems: 10,
                items: {
                    type: "object",
                    required: [
                        "title",
                        "desc",
                        "raised",
                        "goal",
                        "donors",
                        "timeLeft",
                    ],
                    properties: {
                        title: { type: "string", title: "Causes title", },
                        desc: { type: "string", title: "Description", },
                        raised: { type: "string", title: "Raised", },
                        goal: { type: "string", title: "Goal", },
                        donors: { type: "string", title: "Donors", },
                        timeLeft: { type: "string", title: "Time Left", },
                        file: { type: "string",  title: "Single file" },
                    }
                }
            },
        }
    },
    "Partners": {
        title: "Partners",
        type: "object",
        required: [
            "title",
            "desc",
        ],
        properties: {
            title: { type: "string", title: "Title" },
            desc: { type: "string", title: "Description" },
            tasks: {
                type: "array",
                title: "Partners List",
                items: {
                    type: "object",
                    required: [
                        "url",
                    ],
                    properties: {
                        url: { type: "string", title: "Website link", },
                        file: { type: "string",  title: "Single file" },
                    }
                }
            }
        }
    },
    "Volunteers": {
        title: "Volunteers",
        type: "object",
        required: [
            "title",
            "desc",
        ],
        properties: {
            title: { type: "string", title: "Title" },
            desc: { type: "string", title: "Description" },
            tasks: {
                type: "array",
                title: "Volunteers List",
                items: {
                    type: "object",
                    required: [
                        "name",
                        "year",
                    ],
                    properties: {
                        name: { type: "string", title: "Name", },
                        year: { type: "string", title: "Slogan", },
                        file: { type: "string",  title: "Single file" },
                    }
                }
            }
        }
    },
    "JoinAsVolunteer" : {
        title: "Join As Volunteer",
        type: "object",
        required: [
            "title",
            "desc"
        ],
        properties: {
            title: { type: "string", title: "Title" },
            desc: { type: "string", title: "Description" },
            file: { type: "string",  title: "Single file" },
        }
    },
    "Testimonials": {
        title: "Testimonials",
        type: "object",
        required: [
            "title",
            "desc"
        ],
        properties: {
            title: { type: "string", title: "Title" },
            desc: { type: "string", title: "Description" },
            tasks: {
                type: "array",
                title: "Testimonials",
                items: {
                    type: "object",
                    required: [
                        "name",
                        "testimonial"
                    ],
                    properties: {
                        name: { type: "string",  title: "Name" },
                        testimonial: { type: "string", title: "Testimonial" },
                        file: { type: "string", title: "Image",  description: "Image" },
                    }
                }
            }
        }
    },
    "Video" : {
        title: "Video",
        type: "object",
        required: [
            "title",
            "desc"
        ],
        properties: {
            title: { type: "string", title: "Title" },
            slogan: { type: "string", title: "Slogan" },
            videoUrl: { type: "string", title: "Video URL" },
            file: { type: "string",  title: "Background" },
        }
    },
    "Milestones": {
        title: "Milestones",
        type: "object",
        required: [
            "title",
            "desc",
        ],
        properties: {
            title: { type: "string", title: "Title" },
            desc: { type: "string", title: "Description" },
            tasks: {
                type: "array",
                title: "Milestones List",
                items: {
                    required: [
                        "title",
                        "desc",
                        "date",
                    ],
                    properties: {
                        title: { type: "string",  title: "Title" },
                        desc: { type: "string", title: "Description" },
                        date: { type: "string", title: "Date", format: "date" },
                        file: { type: "string",  title: "Single file" },
                    }
                }
            }
        }
    },
    "Contact": {
        title: "Contact Form",
        type: "object",
        required: [
            "title",
            "slogan",
            "address",
            "phone",
            "email",
            "facebook",
            "youtube",
        ],
        properties: {
            title: { type: "string", title: "Title" },
            slogan: { type: "string", title: "Slogan" },
            address: { type: "string", title: "Address" },
            phone: { type: "string", title: "Phone" },
            email: { type: "string", title: "Email" },
            facebook: { type: "string", title: "Facebook" },
            youtube: { type: "string", title: "YouTube" },
            twitter: { type: "string", title: "Twitter" },
            skype: { type: "string", title: "Skype" },
            linkedin: { type: "string", title: "LinkedIn" },
        }
    },
    "Footer": {
        title: "Footer",
        type: "object",
        required: [
            "copyright",
            "slogan",
        ],
        properties: {
            title: { type: "string", title: "Title" },
            copyright: { type: "string", title: "Copyright Text" },
            logo: { type: "string",  title: "Logo" },
            slogan: { type: "string", title: "Slogan" },
            links: {
                type: "array",
                title: "Quick Links (Max 10)",
                maxItems: 10,
                items: {
                    required: [
                        "name",
                        "link",
                    ],
                    properties: {
                        name: { type: "string",  title: "Name" },
                        link: { type: "string", title: "Link" },
                    }
                }
            },
            milestones: {
                type: "array",
                title: "Milestones (Max 5)",
                maxItems: 5,
                items: {
                    required: [
                        "milestone",
                    ],
                    properties: {
                        milestone: { type: "string",  title: "Milestone" },
                    }
                }
            },
            gallery: {
                type: "array",
                title: "Photo Gallery (Max 9)",
                maxItems: 9,
                items: {
                    properties: {
                        img: { type: "string",  title: "Image" },
                    }
                }
            },
        }
    },
}

export default systemComponent;