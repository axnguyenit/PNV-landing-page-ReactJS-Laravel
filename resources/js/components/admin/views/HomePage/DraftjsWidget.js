import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';

function DraftjsWidget(props) {
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createWithContent(props.value ? stateFromHTML(props.value) : stateFromHTML('')),
    );

    const onChange = (editorState) => {
        // console.log(editorState);
        const contentState = editorState.getCurrentContent();
        setEditorState(editorState);

        let html = stateToHTML(contentState);
        props.onChange(html);
    }

    return ( < Editor editorState = { editorState }
        onEditorStateChange = { onChange }
        toolbar = {
            {
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true }
            }
        }
        />);
    }


    export {
        DraftjsWidget
    };