import React, { Component } from 'react';

export default class Card extends Component {
  render(props) {
    return (
      <div className="card">
        <div className="row mb-4">
          <h5 className="card-header">{ this.props.product.title }</h5>
        </div>

        <div className="row">
          <div className="col col-12 col-sm-6">
            <div class="row">
              <div class="col col-12 text-center">
                <img src={ this.props.product.imgUrl } className="shadow"/>
              </div>
            </div>

            <div className="row my-3">
              {
                [1, 2, 3].map((el, i) => {
                  return (
                    <div class="col col-4" key={ i }>
                      <a href=""><img src={ this.props.product.imgUrl } className="shadow"/></a>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className="col col-12 col-sm-6">
            <div className="d-flex">
              <span className="mr-auto">{ this.props.product.balance ? 'Есть в наличии' : 'Нет в наличии'}</span>
              <span>Артикул: { this.props.product.id }</span>
            </div>

            <p className="card-text mt-3">{ this.props.product.desc }</p>

            <div className="d-flex">
              <span className="btn disabled">{ this.props.product.price } грн</span>
              <button className="btn btn-primary">Купить</button>
            </div>

            <div className="d-flex features flex-column mt-3">
              <h6>В набор входят:</h6>
              <ul>
                {
                  this.props.product.set.map((el, i) => <li key={ i }>{ el }</li>)
                }
              </ul>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
