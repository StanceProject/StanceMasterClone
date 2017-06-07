const app = require('../.././index.js')
    , db = app.get('db');

module.exports = {

  getOrders: (req, res) => {
    let user = req.params.user_id;
    db.get_orders(user, (err, order) => {
      if (!err) {
        res.status(200).send(order);
      } else {
        res.send(err)
      }
    })
  },

  submitOrder: (req, res) => {
    let order = req.body
    console.log(req.body)
    db.submit_order([order.user_id, order.total_price, order.user_name, order.quantity, order.shipping_street_address, order.address_number, order.city, order.state, order.zip], (err, orders) => {
      if (!err) {
        res.status(200).send('Order Sent');
      } else {
        res.send(err)
      }
    })
  }

};
