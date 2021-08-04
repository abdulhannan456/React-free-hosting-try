import React , {Component} from 'react' ;

class Highscore extends Component{

    render(){
        if (this.props.overTen){
            return(
                <h3>you beat the high score of ten
                    <button onClick= { this.props.onReset} > RESET</button>
                </h3>
            )
        }
        else{
            return null ;
        }
    }
}

export default Highscore ;