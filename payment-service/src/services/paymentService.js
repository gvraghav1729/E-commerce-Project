const { PaymentService } = require('../proto/payment.proto'); // Adjust path based on generated files

const paymentServiceImpl = {
    processPayment: (call, callback) => {
        const { orderId, amount, paymentMethod } = call.request.toObject();
        const transactionId = `TXN-${Date.now()}`;
        callback(null, { transactionId, status: 'Completed' });
    }
};

module.exports = paymentServiceImpl;