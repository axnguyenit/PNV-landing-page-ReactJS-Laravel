import { selectFile, FileWidget } from './FileWidget';
import { DraftjsWidget } from './DraftjsWidget';

const uiSchema = {
    desc: {
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
    details: {
        items: {
            desc: {
                "ui:widget": "textarea"
            },
            file: {
                "ui:widget": FileWidget
            },
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
        }
    }
}

export default uiSchema;