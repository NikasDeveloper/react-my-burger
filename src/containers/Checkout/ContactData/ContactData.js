import React, { Component } from 'react';

import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: '',
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail'
        },
        value: '',
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', display: 'Fastest' },
            { value: 'cheapest', display: 'Cheapest' }
          ]
        },
        value: 'fastest',
      },
    },
    loading: false
  }
  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let key in this.state.orderForm) formData[key] = this.state.orderForm[key].value;
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => { this.setState({ loading: false }); });
  }
  inputChangedHandler = (event, inputId) => {
    const form = { ...this.state.orderForm };
    const updatedInput = { ...form[inputId] };
    updatedInput.value = event.target.value;
    form[inputId] = updatedInput;
    this.setState({ orderForm: form });
  }
  render() {
    const formElements = [];
    for (let key in this.state.orderForm) formElements.push({
      id: key,
      config: this.state.orderForm[key]
    });
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElements.map(element => (
          <Input
            key={element.id}
            elementType={element.config.elementType}
            elementConfig={element.config.elementConfig}
            value={element.config.value}
            changed={(event) => { this.inputChangedHandler(event, element.id) }} />
        ))}
        <Button btnType="Success">ORDER</Button>
      </form>
    );
    if (this.state.loading) form = <Spinner />;
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;