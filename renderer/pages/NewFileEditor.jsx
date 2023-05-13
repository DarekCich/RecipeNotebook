import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Head from "next/head";
import { saveValue, loadFiles } from "../../main/helpers/posts"
import Link from "next/link";
const modules = {
    toolbar:[
        [{header: [1, 2, 3, 4, 5, 6, false]}],
        [{font: []}],
        [{size: []}],
        ["bold", "italic", "underline", "strike", "blockqoute"],
        [
            {list: "ordered"},
            {list: "bullet"},
            {indent: "-1"},
            {indent: "+1"},
        ],
        ["link", "image", "video"]
    ]
}

const MyComponent = (props) => {
    const [value, setValue] = useState('');
    const [valueOfInput, setValueOfInput] = useState('');

    return (<React.Fragment>
        <Head>
            <title></title>
        </Head>
        <div className={"FileEditor"}>
            <div className={"navbar"}>
                <a href="/home">{"⇦"}</a>
                <input value={valueOfInput} className={"nameInput"}  onChange={(e) => setValueOfInput(e.target.value)}/>
                <button className={"SaveButton"} onClick={async () => {
                    await saveValue(value, valueOfInput)
                }}> 💾 </button>
            </div>
            <ReactQuill
                className={"Test"}
                value={value}
                onChange={setValue}
                modules={modules}
            />
        </div>
    </React.Fragment>       );
}
export default MyComponent