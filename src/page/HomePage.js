import React from "react";
import './HomePage.scss';
import TargetArea from "../component/TargetArea";
import ControlButtons from "../component/ControlButtons";

const HomePage = () => {
    return (
        <div className='wrapper'>
            <h1>测试改变区域颜色</h1>
            <TargetArea />
            <div className='buttonWrapper'>
            <ControlButtons caption='red'/>
            <ControlButtons caption='green'/>
            <ControlButtons caption='blue'/>
            </div>
        </div>
    )
};

export default HomePage;