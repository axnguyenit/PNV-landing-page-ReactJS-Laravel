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
                title: "Banner Item",
                items: {
                    properties: {
                        subTitle: { type: "string", title: "Sub title"},
                        title: { type: "string", title: "title"},
                        background: { type: "string",  title: "Single file" },
                        buttonItems: {
                            type: "array", 
                            title: "buttons",
                            items: {
                                properties: {
                                    buttonText: { type: "string", title: "text"},
                                    buttonLink: { type: "string", title: "link"},
                                    buttonClass: { type: "string", title: "classCss"},
                                }
                            }
                        }
                    },
                },
            }
        }
    },
    "About": {
        title: "About",
        type: "object",
        properties: {
            title: { type: "string", title: "Title", },
            desc: { type: "string", title: "Description" },
            file: { type: "string", title: "Single file" },
        }
    },
    "Gallery": {
        title: 'Gallery',
        type: 'object',
        properties: {
            tasks: { 
                type: "array", 
                title: "Images",
                items: {
                    properties: {
                        filter: { type: "string", title: "Gallery Filter"},
                        images: {
                            type: "array", 
                            title: "Image",
                            items: {
                                properties: {
                                    file: { type: "string", title: "Single file"},
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
                title: "Causes List",
                items: {
                    type: "object",
                    required: [
                        "title",
                        "desc",
                        "title1",
                        "title2",
                        "title3",
                        "title4",
                        "content1",
                        "content2",
                        "content3",
                        "content4",
                    ],
                    properties: {
                        title: { type: "string", title: "Causes title", },
                        desc: { type: "string", title: "Description", },
                        file: { type: "string",  title: "Single file" },
                        title1: { type: "string", title: "Title 1", },
                        content1: { type: "string", title: "Content 1", },
                        title2: { type: "string", title: "Title 2", },
                        content2: { type: "string", title: "Content 2", },
                        title3: { type: "string", title: "Title 3", },
                        content3: { type: "string", title: "Content 3", },
                        title4: { type: "string", title: "Title 4", },
                        content4: { type: "string", title: "Content 4", },
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
                    properties: {
                        name: { type: "string", title: "Name", },
                        year: { type: "string", title: "Year", },
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
    "Milestones": {
        title: "Milestones",
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
                title: "Milestones List",
                items: {
                    type: "object",
                    required: [
                        "title",
                        "desc",
                        "date"
                    ],
                    properties: {
                        title: { type: "string",  title: "Title" },
                        desc: { type: "string", title: "Description" },
                        file: { type: "string", title: "Image",  description: "Image" },
                        date: { type: "string", title: "Date", format: "date" }
                    }
                }
            }
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
            desc: { type: "string", title: "Description" },
            videoUrl: { type: "string", title: "Video URL" },
            file: { type: "string",  title: "Background" },
        }
    },
}

export default systemComponent;