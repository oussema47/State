import React from "react";

class Counter extends React.Component {
    constructor() {
        super();

    this.state = {
        count: 0,
    }
console.log("constructor");
}

    Increment = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    Decrement = () => {
        this.setState({
            count: 
            this.state.count > 0 ?
                this.state.count-1 :
                this.state.count,
        })
    }

    componentDidMount(){
        const inter = setInterval(()=>{
            this.setState({count: this.state.count+1})
        }, 1000)
        console.log("componentDidMount",inter);
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        if(this.state.count < 10){
            clearInterval(this.interval)
        }
        console.log("componentWillUnmount");
    }

    render() { 
        return ( 
        <div>
            <button onClick={()=>(this.Increment())}>+</button>
            <span>       COUNT: {this.state.count}       </span>
            <button onClick={()=>(this.Decrement())}>-</button>
        </div> );
    }
}
 
export default Counter;