import { selectFile, FileWidget } from './FileWidget';
import { DraftjsWidget } from './DraftjsWidget';

const uiSchema = {
    desc: {
        "ui:widget": DraftjsWidget 
    },
    slogan: {
        "ui:widget": DraftjsWidget 
    },
    file: {
        "ui:widget": FileWidget
    },
    logo: {
        "ui:widget": FileWidget
    },
    bannerItems :{
        items: {
            background: {
                "ui:widget": FileWidget
            }
        }
    },
    tasks: {
        items: {
            desc: {
                "ui:widget": "textarea"
            },
            testimonial: {
                "ui:widget": "textarea"
            },
            file: {
                "ui:widget": FileWidget
            },
            images: {
                items: {
                    file: {
                        "ui:widget": FileWidget
                    }
                }
            }
        }
    },
    gallery: {
        items: {
            img: {
                "ui:widget": FileWidget
            }
        },
    }
}

export default uiSchema;