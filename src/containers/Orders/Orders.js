import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }
  componentDidMount() {
    axios.get('/orders.json')
      .then(response => {
        const orders = [];
        Object.entries(response.data).forEach(([id, order]) => {
          orders.push({ ...order, id: id });
        });
        this.setState({ loading: false, orders: orders });
      })
      .catch(error => { this.setState({ loading: false }); });
  }
  render() {
    const orders = this.state.loading
      ? <Spinner />
      : this.state.orders.map(order => {
        return (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price} />);
      });
    return (
      <div>
        {orders}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);