const { OrderService } = require('../proto/order_proto'); // Adjust path based on generated files

const orderServiceImpl = {
    createOrder: (call, callback) => {
        const { userId, items } = call.request.toObject();
        const orderId = `ORD-${Date.now()}`;
        callback(null, { orderId, status: 'Pending' });
    }
};

module.exports = orderServiceImpl;