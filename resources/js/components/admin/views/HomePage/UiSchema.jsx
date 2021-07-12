import { selectFile, FileWidget } from './FileWidget';

const uiSchema = {
    desc: {
        "ui:widget": "textarea" 
    },
    file: {
        "ui:widget": FileWidget
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
            file: {
                "ui:widget": FileWidget
            },
        }
    }
}

export default uiSchema;