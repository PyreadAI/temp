import * as React from 'react';
import * as ReactDOM from 'react-dom';
import info from './CoursesInfo.js';
// import { AppContainer } from 'react-hot-loader';

import { MainContainer } from "./components/MainContainer";
// interface CoursesInfo{
//     categories:ny
// }
ReactDOM.render(
    <MainContainer info={info} />,
    document.getElementById("example")
);