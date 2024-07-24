import React from "react"


class Tick extends React.Component {
    constructor(props) {
        super(props)
        this.state= {date:new Date()}

    }

    /**
     * On monte apres constructeur
     */
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),1000
        )
    }

    /**
     * Lorsque appel du à un evenement lorsque je demonte le composant
     * Appelé avant la méthode suivante :
     */
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        //IMPOSSIBLE : this.state={date:new Date()}
        this.setState(
            {date:new Date()}
        )
    }

    onStop = (e)=>{this.componentWillUnmount()}
    onStart= (e)=>{this.componentDidMount()}

    render()
    {
    return (
        <div>
            <h1>{this.props.message}</h1>
            <h2> il est
            {this.state.date.toLocaleTimeString()}.
            </h2>
            <button onClick={this.onStop}>Stop</button>
            <br/>
            <button onClick={this.onStart}>Start</button>
            <br/>
            <button onClick={this.props.cb}>App</button>        
    </div>
        )
    }       
  }

  export default Tick