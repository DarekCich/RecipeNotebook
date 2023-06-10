import React, {useEffect, useRef, useState} from 'react';
import Head from 'next/head';
import { getFiles } from "../../main/helpers/posts"
import Link from "next/link";
import styles from '../Style/home.module.css'
import Checkbox from '../components/Checkbox';

function  Home() {
    const [value, setValue] = useState([]);
    const [bool, setBool] = useState(true);
    const add = async () => {
        let x = getFiles();
        console.log(x);
        await setValue(x)
    }
    useEffect(() => {
        console.log(bool)
        if(bool){
            setBool(false)
            add();
        }
    });
    return (

        <React.Fragment>
            <Head>
                <title>DWR Notes Pro</title>
            </Head>
            <div>
                <nav >
                    <Checkbox/>
                    <div className={"fileTitle"}>Pliki: </div>
                    <div className={"files"}>
                        <ul>
                            {value.map((x,index)=>(
                                <li key={index}>
                                    <Link href={`editor/${x}`} className={"homeHref"}>
                                        <a className={"temp"}>
                                            <div>{x}</div>
                                        </a>
                                    </Link>
                                </li>))
                            }
                            <li  className={"NewFileFrame"}>
                                <Link href={`/NewFileEditor`} className={"NewFile"}>
                                    <a className={"temp"}>New file</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
}

export default Home;
