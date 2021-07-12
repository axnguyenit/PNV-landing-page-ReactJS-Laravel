import axios from "axios";
import Button from "../../components/CustomButtons/Button.js";
import React, { useRef } from "react";

const selectFile = async (file, currentFileName = '') => {
    var bodyFormData = new FormData();
    bodyFormData.append('file', file);
    bodyFormData.append('currentPath', currentFileName)
    try {
        let result  = await axios({
            method: 'post',
            url: '/api/savefile',
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }
        });
        console.log(result.data);
        return result.data;
    } catch( $e ) {

    }
    

    return Date.now().toString()+'.png';
}

const FileWidget = (props) => {
    const selectFileEl = useRef(null);
    const previewEl = useRef(null);
    const onSelectFile = () => {
        selectFileEl.current.click();
    }

    const preview = (path) => {
       previewEl.current.style.backgroundImage = `url(${window.location.origin}/${path})`;
       previewEl.current.style.width="100px";
       previewEl.current.style.height="100px";
    }

    const onChange = async (event) => {
        let path = await selectFile(event.target.files[0], props.value);
        props.onChange(path) 
        preview(path);
    }

    const style = props.value ? {
        backgroundImage: `url(${window.location.origin}/${props.value})`,
        width: '100px',
        height: '100px'
    } : {}

    return (
        <div>
            <Button onClick={onSelectFile}>Select File</Button>
            <div ref={previewEl} style={style}></div>
            <input ref={selectFileEl} 
                type="file"
                style={{display: 'none'}}
                required={props.required}
                onChange={onChange} />
        </div>
    )
  };

export {
    selectFile,
    FileWidget
};
