const systemComponent = {
    "About": {
        title: "About Sample",
        type: "object",
        properties: {
            title: { type: "string", title: "Title", },
            details: {
                type: "array",
                title: "Description List",
                items: {
                    type: "object",
                    required: [
                        "desc",
                    ],
                    properties: {
                        desc: { type: "string", title: "Description", },
                    }
                }
            },
            file: { type: "string", title: "Single file" },
        }
    },
    "Causes": {
        title: "Causes Sample",
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
                        "file",
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
        title: "Partners Sample",
        type: "object",
        required: [
            "title",
            "desc",
        ],
        properties: {
            title: { type: "string", title: "Title" },
            desc: { type: "string", title: "Description" },
            task: {
                type: "array",
                title: "Partners List",
                items: {
                    type: "object",
                    required: [
                        "url",
                        "file",
                    ],
                    properties: {
                        url: { type: "string", title: "Link Page", },
                        file: { type: "string",  title: "Single file" },
                    }
                }
            }
        }
    },
    "Volunteers": {
        title: "Volunteers Sample",
        type: "object",
        required: [
            "title",
            "desc",
        ],
        properties: {
            title: { type: "string", title: "Title" },
            desc: { type: "string", title: "Description" },
            task: {
                type: "array",
                title: "Volunteers List",
                items: {
                    type: "object",
                    required: [
                        "name",
                        "year",
                        "file",
                    ],
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
        title: "Join As Volunteer Sample",
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
        title: "Milestones Sample",
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
                        "file",
                        "date"
                    ],
                    "properties": {
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
        title: "Testimonials Sample",
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
                        "title",
                        "desc",
                        "file",
                        "date"
                    ],
                    "properties": {
                        name: { type: "string",  title: "Name" },
                        desc: { type: "string", title: "Description" },
                        file: { type: "string", title: "Image",  description: "Image" },
                    }
                }
            }
        }
    },
    "Video" : {
        title: "Video Sample",
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