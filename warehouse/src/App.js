import './App.css';
import { Component } from 'react';
import Laptops from './Laptops/Laptops';
import Desktops from './Desktops/Desktops';
import Monitors from './Monitors/Monitors';
import Printers from './Printers/Printers';

class App extends Component {

  constructor(props) {
    
    super(props);

    this.state = {
      laptops : [
        {brand: 'Dell', model: 'Latitude 5490', price: 68000},
        {brand: 'Apple', model: 'Mac Pro', price: 170500},
      ],
      desktops : [
        {brand: 'Dell', model: 'OptiPlex 3040', price: 49000},
        {brand: 'Hp', model: 'Pavilion Gaming', price: 57400},
      ],
      monitors : [
        {brand: 'LG', model: '29UM69G', price: 17675},
        {brand: 'DELL', model: 'S2421HN', price: 11130},
      ],
      printers: [
        {brand: 'Canon', model: 'i3533', price: 120200},
        {brand: 'HP', model: 'Pantum 2207', price: 6300},
    
      ],
      titleLaptops: 'Laptops',
      titleDesktops: 'Desktops',
      titleMonitors: 'Monitors',
      titlePrinters: 'Printers',
      blockLaptops: true,
      blockDesktops: true,
      blockMonitors: true,
      blockPrinters:true,
    
    }
  }

changeTitleLaptops = (title) => {
  this.setState({
    titleLaptops: title,
  })
}

changeTitleDesktops = (title) => {
  this.setState({
    titleDesktops: title,
  })
}

changeTitleMonitors = (title) => {
  this.setState({
    titleMonitors: title,
  })
}

changeTitlePrinters = (title) => {
  this.setState({
    titlePrinters: title,
  })
}

hideLaptops = () => {
  this.setState({
    blockLaptops: !this.state.blockLaptops,
  })
}

hideDesktops = () => {
  this.setState({
    blockDesktops: !this.state.blockDesktops,
  })
}

hideMonitors = () => {
  this.setState({
    blockMonitors: !this.state.blockMonitors,
  })
}

hidePrinters = () => {
  this.setState({
    blockPrinters: !this.state.blockPrinters,
  })
}

replaceBrandLaptops = (newBrand, index) => {
  const infoLaptops = this.state.laptops[index];
  infoLaptops.brand = newBrand;
  const doubleLaptops = [...this.state.laptops];
  doubleLaptops[index] = infoLaptops;
  this.setState({
    laptops: doubleLaptops,
  })

}

replaceModelDesktops = (newModel, index) => {
  const infoDesktops = this.state.desktops[index];
  infoDesktops.model = newModel;
  const doublDesktops = [...this.state.desktops];
  doublDesktops[index] = infoDesktops;
  this.setState({
    desktops: doublDesktops,
  })
}

replacPriceMonitor = (newPrice, index) => {
  const infoMonitor = this.state.monitors[index];
  infoMonitor.price = newPrice;
  const doublMonitors = [...this.state.monitors];
  doublMonitors[index] = infoMonitor;
  this.setState({
    monitors: doublMonitors,
  })
}

replaceBrandPrinter = (newBrand, index) => {
  const infoPrinters = this.state.printers[index];
  infoPrinters.brand = newBrand;
  const doublePrinters = [...this.state.printers];
  doublePrinters[index] = infoPrinters;
  this.setState({
    printers:doublePrinters,
  })
}

deleteLaptops = (index) => {
  const deleteLaptops = [...this.state.laptops];
  deleteLaptops.splice(index, 1);
  this.setState({
    laptops:deleteLaptops,
  })
}

deleteDesktops = (index) => {
  const deleteDesktops = [...this.state.desktops];
  deleteDesktops.splice(index, 1);
  this.setState({
    desktops: deleteDesktops,
  })

}

deleteMonitors = (index) => {
  const deleteMonitors = [...this.state.monitors];
  deleteMonitors.splice(index, 1);
  this.setState({
    monitors: deleteMonitors,
  })

}

deletePrinters = (index) => {
  const deletePrinters = this.state.printers.concat();
  deletePrinters.splice(index, 1);
  this.setState({
    printers: deletePrinters,
  })
}

componentWillMount() {
  console.log('Will');
}

componentDidMount() {
  console.log('Did mount');
}


render() {
  console.log('Render');

  return (
    <div className="devices">

      <div className="category" id="laptops-block">
        <h2>{this.state.titleLaptops}</h2>
        { this.state.blockLaptops ?
            this.state.laptops.map((laptopsInfo, index) => {
              return (
                <Laptops
                  key={index}
                  brand={laptopsInfo.brand}
                  model={laptopsInfo.model}
                  price={laptopsInfo.price}
                  btnTitleLaptops={() => this.changeTitleLaptops(laptopsInfo.model)}
                  changeBrandLaptops={(event) => this.replaceBrandLaptops(event.target.value, index)}
                  btnDeleteLaptops={this.deleteLaptops.bind(this, index)}
                />
              )
            }) : false 
        }
        <button 
          onClick={this.hideLaptops}
          className="btn_hide_devices">Hide</button>
      </div>

      <div className="category" id="desctops-block">
        <h2>{this.state.titleDesktops}</h2>
        { this.state.blockDesktops ?
            this.state.desktops.map((desktopInfo, index) => {
              return (
                <Desktops 
                  key={index}
                  brand={desktopInfo.brand}
                  model={desktopInfo.model}
                  price={desktopInfo.price}
                  btnTitleDesktops={() => this.changeTitleDesktops(desktopInfo.model)}
                  inputChangeModel={(event) => this.replaceModelDesktops(event.target.value, index)}
                  btnDeleteDesktops={this.deleteDesktops.bind(this, index)}
                />
              )
            }) : false
         }
        <button 
          onClick={this.hideDesktops}
          className="btn_hide_devices">Hide</button>
      </div>

      <div className="category" id="monitors-block">
        <h2>{this.state.titleMonitors}</h2>
        { this.state.blockMonitors ?
            this.state.monitors.map((monitorsInfo, index) => {
              return (
                <Monitors 
                  key={index}
                  brand={monitorsInfo.brand}
                  model={monitorsInfo.model}
                  price={monitorsInfo.price}
                  btnTitleMonitors={() => this.changeTitleMonitors(monitorsInfo.model)}
                  inputChangePrice={(event) => this.replacPriceMonitor(event.target.value, index)}
                  btnDeleteMonitors={this.deleteMonitors.bind(this, index)}
                />
              )
            }) : false 
        }
        <button 
          onClick={this.hideMonitors}
          className="btn_hide_devices">Hide</button>
      </div>
      <div className="category" id="printers-block">
        <h2>{this.state.titlePrinters}</h2>
        { this.state.blockPrinters ?
          this.state.printers.map((printersInfo, index) => {
            return (
              <Printers
                key={index}
                brand={printersInfo.brand}
                model={printersInfo.model}
                price={printersInfo.price}
                btnTitlePrinters={this.changeTitlePrinters.bind(this, printersInfo.brand)}
                changeBrandPrinters={(event) => this.replaceBrandPrinter(event.target.value, index)}
                btnDeletePrinters={this.deletePrinters.bind(this, index)}
              />
            );
          }) :false
      }
      <button 
        className="btn_hide_devices"
        onClick={this.hidePrinters}>Hide
        </button> 
      </div>
    </div>
  )
}


}

export default App;