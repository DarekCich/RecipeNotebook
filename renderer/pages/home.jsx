import React, {useEffect, useRef, useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getFiles } from "../../main/helpers/posts"



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
              <div className={"fileTitle"}>Pliki: </div>
              <div className={"files"}>
                  {
                      value.map((x,index)=>(<li key={index}> <a href={`/editor/${x}`} className={"homeHref"}><div className={"temp"}>
                          {x}
                      </div> </a></li>))
                  }
                  <li  className={"NewFileFrame"}> <a href={`/NewFileEditor`} className={"NewFile"}> + Add New File </a></li>
              </div>
          </nav>
      </div>
    </React.Fragment>
  );
}

export default Home;
