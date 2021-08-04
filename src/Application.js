import React , {Component} from 'react' ;
import Highscore from "./highscore";
import "./css/style.css" ;

class Application extends Component{

    constructor(props){
        super(props);

        this.state ={
            count :0 ,
            overTen : false
        };
    }

    handleClick = () => {
        this.setState({count : this.state.count +1 })
    }

    componentDidUpdate(props ,state){
        if (this.state.count > 10 && this.state.count !== state.count && !this.state.overTen){
            console.log("updating over ten")
            this.setState({overTen : true})

        }
        //console.log('updated from', state , 'to' ,this.state);
    }

    resetCount = (e) => {
        console.log("event is " , e)
        this.setState({
            count : 0 ,
            overTen : false 
        })
    }
    render(){
        let {count} = this.state ;
        return(
        <div>
           <h1>you clicked the button {count} times</h1> 
           <Highscore 
                overTen = {this.state.overTen}
                onReset = { this.resetCount}
           />
            {/* { (this.state.overTen) ?
                <h3>you beat the high score of ten</h3>
                : null
            } */}

           <span>
               <button onClick = { () => this.handleClick()}>Click me</button>
           </span>
        </div>
        );
    }
}

export default Application ;