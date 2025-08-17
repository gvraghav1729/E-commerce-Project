require('dotenv').config();
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const express = require('express');
const cors = require('cors');
const path = require('path');
const orderServiceImpl = require('./src/services/orderService');

const PROTO_PATH = path.resolve(__dirname, './src/proto/order.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { 
    keepCase: true, 
    longs: String, 
    enums: String, 
    defaults: true, 
    oneofs: true 
});
const orderProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();
server.addService(orderProto.order.OrderService.service, orderServiceImpl);
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('Order Service (gRPC) running on port 50051');
});

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/create-order', (req, res) => {
    const { userId, items } = req.body;
    const orderId = `ORD-${Date.now()}`;
    res.json({ orderId, status: 'Pending' });
});

app.listen(4000, () => {
    console.log('Order Service (REST) running on port 4000');
});