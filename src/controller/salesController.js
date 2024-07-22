const Order = require('../models/sales');

const orderController = {
  getAllsales: async (req, res) => {
    try {
      const orders = await Order.getAll();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getOrderById: async (req, res) => {
    try {
      const order = await Order.getById(req.params.id);
      if (order) {
        res.json(order);
      } else {
        res.status(404).json({ message: 'sale not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createOrder: async (req, res) => {
    try {
      const newOrder = await Order.create(req.body);
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateOrder: async (req, res) => {
    try {
      const updatedOrder = await Order.update(req.params.id, req.body);
      if (updatedOrder) {
        res.json(updatedOrder);
      } else {
        res.status(404).json({ message: 'sales not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteOrder: async (req, res) => {
    try {
      const deletedOrder = await Order.delete(req.params.id);
      if (deletedOrder) {
        res.json({ message: 'sales deleted successfully', order: deletedOrder });
      } else {
        res.status(404).json({ message: 'sales not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = salesController;