import React from "react";
import './TargetArea.scss';
import store from "../store/Store";

class TargetArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            red: 128,
            green: 128,
            blue: 128
        }
    }

    // 给store订阅的回调函数, 一旦有变化, 就更新自己的state与Store一致
    subscribeToStore = () =>{
        this.setState(store.getState());
    }

    //组件挂载完成后就要订阅
    componentDidMount() {
        store.subscribe(this.subscribeToStore);
    }

    //组件生命周期结束的时候取消订阅
    componentWillUnmount() {
        store.unsubscribe(this.subscribeToStore)
    }


    render() {
        const style = {'backgroundColor': `rgb(${this.state.red},${this.state.green},${this.state.blue})`}

        return (
            <div style={style} className='target'/>
        );
    }
}

export default TargetArea;