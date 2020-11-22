import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card.js'

export default class App extends Component {
  state = {
    product: {
        id: 4568,
        title: 'Набор для путешествий «Baxter of California»',
        balance: 24,
        imgUrl: './assets/img/1.png',
        price: 2900,
        set: [ 'Средство для умывания (50 мл)', 'Увлажняющий крем (50 мл)', 'Крем для бритья (50 мл)', 'Крем после бритья, шампунь (50 мл)', 'Удобная кожаная косметичка' ],
        desc: 'Travel Kit – необходимый аксессуар во время любого путешествия. В аккуратной кожаной сумке находится все, что нужно для бритья и ухода за кожей во время рабочей поездки или отдыха: средство для умывания, увлажняющий крем, крем для бритья, крем после бритья, шампунь. Набор также может стать отличным подарком.'
      },
  };

  render() {
    return (
      <div className="container">
        <Card product={ this.state.product } />
      </div>
    );
  }
}
