import React from 'react';

class Cars extends React.Component {

    // componentWillReceiveProps(nextProps) {
    //     console.log('componentWillReceiveProps', nextProps)
    // }

    shouldComponentUpdate(nextProps, nexsState) {
       console.log('shouldComponentUpdate', nextProps, nexsState);
       return nextProps.brand.trim( ) === this.props.brand.trim();

    }

    // componentWillUpdate(nextProps, nexsState) {
    //     console.log('componentWillUpdate', nextProps, nexsState);
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('Cars getDerivedStateFromProps', nextProps, prevState);
    //     return prevState;
    // }

    
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
    }


    componentWillUnmount() {
        console.log('Unmaunted App');
    }


    render() {
        console.log('Cars App render');


        const classDinamic = ['input-area'];

        switch (this.props.price.length) {
            case 7:
            classDinamic.push('medium');
            break;
            case 10:
            classDinamic.push('bold');
            break;
        default:
            break;

    } 

    return (
        <div className="cars">
            <div className="price">
                <input 
                onChange={this.props.changePrice}
                value={this.props.price}
                className={classDinamic.join(' ')}/>
            </div>
            <h2>{this.props.brand}</h2>
            <p className="device-model">{this.props.model}</p>
            <p className="device-price">{this.props.price}</p>
            <input 
                onChange={this.props.changeNameCarsInput} 
                className="input-area" value={this.props.brand}
                />
            <div className="btn_arrea">
                <button 
                    onClick={this.props.queryHandlerContect} 
                    className="btn_change">Sale it!
                </button>
                <button 
                    onClick={this.props.deleteCars} 
                    className="btn_change">Delete!
                </button>
            </div>
        </div>
    );
    }
}

export default Cars;