import React from 'react';

class Counter extends React.Component {

    state = {
        counter: 0,
    }

    delCounter = () => {
        const shadowChange = document.getElementById('laptops-block');
        const shadowEffectYellow = '20px 20px 35px rgba(182,64,0, 0.4)';
        const shadowEffectRed = '20px 20px 35px rgba(183,0,35, 0.4)';
        const shadowEffectBlack = '20px 20px 35px rgba(20, 14, 19, 0.7)';

        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1,
            }
        })

        if (this.state.counter >= 3 && this.state.counter <= 7) { 
            shadowChange.style.boxShadow = shadowEffectYellow;
        } else if (this.state.counter > 7) {
            shadowChange.style.boxShadow = shadowEffectRed;
        } else if (this.state.counter <= 0) {
            this.setState({
                counter: 0,
            })
        } else {
            shadowChange.style.boxShadow = shadowEffectBlack;
        }
    }

    addCounter = () => {
        const shadowChange = document.getElementById('laptops-block');
        const shadowEffectYellow = '20px 20px 35px rgba(182,64,0, 0.4)';
        const shadowEffectRed = '20px 20px 35px rgba(183,0,35, 0.4)';
        const shadowEffectBlack = '20px 20px 35px rgba(20, 14, 19, 0.7)';

        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1,
            }
        })

        if (this.state.counter >= 3 && this.state.counter <= 7) { 
            shadowChange.style.boxShadow = shadowEffectYellow;
        } else if (this.state.counter > 7) {
            shadowChange.style.boxShadow = shadowEffectRed;
        } else {
            shadowChange.style.boxShadow =shadowEffectBlack;
        }
    }

    render() {
        return (
            <div className="Counter">
                <span className="counter_text">Counter: {this.state.counter}</span>
                <button className="btn_counter" onClick={this.delCounter}>-</button>
                <button className="btn_counter" onClick={this.addCounter}>+</button>
            </div>
        )
    }
}

export default Counter;
