import React, {useContext, useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Head from "next/head";
import {saveValue, loadFiles, getFiles} from "../../../main/helpers/posts"
import Link from "next/link";
import {useRouter} from "next/router";
const modules = {
    toolbar:[
        [{header: [1, 2, 3, 4, 5, 6, false]}],
        [{font: []}],
        [{size: []}],
        ["bold", "italic", "underline"],
        [
            {list: "ordered"},
            {list: "bullet"},
            {indent: "-1"},
            {indent: "+1"},
        ],
        ["image", "video"]
    ]
}

const MyComponent = ({id}) => {
    const [value, setValue] = useState('');
    const [bool, setBool] = useState(true);
    const [filename, setFileName] = useState(" ");
    const router = useRouter();
    const name = router.query.id;
    const load = async () => {
        let x = await loadFiles(name);
        await setValue(x)
    }
    useEffect(() => {
        if (bool) {
            if(name !== undefined){
                setBool(false)
                setFileName(name)
                load().then()
            }
        }
    });
    return (<React.Fragment>
        <Head>
            <title>{id}</title>
        </Head>
        <div className={"FileEditor"}>
            <div className={"navbar"}>
                <Link href={"/home"} className={"homeHref"} as={"⇦"}>
                    <a >{"⇦"}</a>
                </Link>
                <div>{filename}</div>
                <button className={"SaveButton"} onClick={async () => {
                    await saveValue(value, name)
                }}> 💾 </button>
            </div>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                modules={modules}
            />
        </div>
    </React.Fragment>);
}
export default MyComponent