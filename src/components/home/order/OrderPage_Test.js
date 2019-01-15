import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import OrderAction from '../../.././actions/orderAction';

class OrderPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [
                {desc : ""}
                ]
        };
    this.OnDescriptionChange = this.OnDescriptionChange.bind(this);
    this.OnClickSubmit = this.OnClickSubmit.bind(this);
    }

    OnDescriptionChange(event) {
        const order = this.state.order;
        order.desc = event.target.value;
        this.setState({order : order});
    }

    OnClickSubmit() {
      alert(`Saving ${this.state.order.desc}`);
     //  event.preventDefault();
     this.props.dispatch(OrderAction.createOrder(this.state.order));

    }
    orderRow(order,index){
      return  <div key={index}>{order.desc}</div>;
    }

    render () {
        return (
            <div>
            <h1>Orders</h1>
            <h2> Add Order description </h2>
                {this.state.order.desc}
                {this.state.order.map(show => <tr>
                    <td> {show.desc} </td> </tr>)}
            <form onSubmit={this.OnClickSubmit}>
            <label>
                Order:
                <input type="text" value={this.state.order.desc} onChange={this.OnDescriptionChange} />
             </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
   }
}

OrderPage.propTypes = {
    dispatch : PropTypes.func.isRequired,
    order : PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
   // debugger;
    return {
        order: state.order
    }
   }



export default connect(mapStateToProps)(OrderPage);