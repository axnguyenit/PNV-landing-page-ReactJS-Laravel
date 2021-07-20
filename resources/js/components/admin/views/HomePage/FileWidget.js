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
        return `${window.location.origin}/${result.data}`;
    } catch( $e ) {

    }
    

    return Date.now().toString()+'.png';
}

const FileWidget = (props) => {
    const selectFileEl = useRef(null);
    const onSelectFile = () => {
        selectFileEl.current.click();
    }

    const onChange = async (event) => {
        let path = await selectFile(event.target.files[0], props.value);
        props.onChange(path);
    }

    const style = props.value ? {
        previewImg: {
            backgroundImage: `url(${props.value})`,
            height: 'fit-content',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        imgTag: {
            width: '100%',
        }
    } : {}

    return (
        <div>
            <Button onClick={onSelectFile}>Upload Image</Button>
                <img className={style.imgTag} src={ props.value ? props.value : ''} alt="" />
            <input 
                ref={selectFileEl} 
                type="file"
                style={{display: 'none'}}
                required={props.required}
                onChange={onChange} 
            />
        </div>
    )
  };

export {
    selectFile,
    FileWidget
};
