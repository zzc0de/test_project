import { Component } from 'react';
import './App.css';
import Cars from './Cars/Cars';
import Counter from './Counter/Counter';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cars: [
        {brand: 'Dell', model: 'Latitude 5490', price: 75300},
        // {brand: 'Apple', model: 'MacPro', price: 185000},
        // {brand: 'Acer', model: 'Raize', price: 91700},
      ],
      titleDevice: 'Corporate device',
      showCars: false,
    }
  }

  changeHandlerContent = (title) => {
    this.setState({
      titleDevice: title,
    })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars,
    })
  }

  changeNameCars = (nameCar, indexCar) => {
    const car = this.state.cars[indexCar];
    car.brand = nameCar;
    const arrCar = [...this.state.cars];
    arrCar[indexCar] = car;
    this.setState({
      cars: arrCar
    })
  }

  changePriceInput = (newPrice, indexCar) => {
    const infoCars = this.state.cars[indexCar];
    infoCars.price = newPrice;
    const doubleCars = [...this.state.cars];
    doubleCars[indexCar] = infoCars;
    this.setState({
      cars: doubleCars,
    })
  }

  deleteCarsProcess = (indexCar) => {
    const preDelete = [...this.state.cars];
    preDelete.splice(indexCar, 1)
    this.setState({
      cars:preDelete,
    })
  }

  componentWillUnmount() {
    console.log('Will mount');
  }

  componentDidMount() {
    console.log('Did mount');
  }

  render() {

    console.log('App Render');

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((carInfo, indexCar) => {
        return (  
          <ErrorBoundary key={indexCar}>
            <Cars 
            brand={carInfo.brand}
            model={carInfo.model}
            price={carInfo.price}
            queryHandlerContect={() => this.changeHandlerContent(carInfo.brand)}
            changeNameCarsInput={(event) => this.changeNameCars(event.target.value, indexCar)}
            changePrice={(event) => this.changePriceInput(event.target.value, indexCar)}
            deleteCars={this.deleteCarsProcess.bind(indexCar)}
            />
            <Counter />
          </ErrorBoundary>
        )
      })
    };

    return (
      <div className="App">
        <div className="Laptops">
          {/* <h1>{this.state.titleDevice}</h1> */}
          <h1>{this.props.title}</h1>
          {cars}
          <div className="all-sale">
          <button 
            className="btn_saleall"
            onClick={this.toggleCarsHandler}>Hide</button> 
          </div>
        </div>
      </div>
    );
  };
}
 
export default App;