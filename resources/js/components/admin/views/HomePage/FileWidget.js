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
    const previewEl = useRef(null);
    const onSelectFile = () => {
        selectFileEl.current.click();
    }

    const preview = (path) => {
       previewEl.current.style.backgroundImage = `url(${path})`;
    //    previewEl.current.style.width='300px';
       previewEl.current.style.height='fit-content';
       previewEl.current.style.backgroundPosition='center';
       previewEl.current.style.backgroundRepeat='no-repeat';
       previewEl.current.style.backgroundSize='cover';
    }

    const onChange = async (event) => {
        let path = await selectFile(event.target.files[0], props.value);
        props.onChange(path) 
        preview(path);
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
            {/* <div ref={previewEl} className={style.previewImg}> */}
                <img className={style.imgTag} src={ props.value ? props.value : ''} alt="" />
            {/* </div> */}
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
