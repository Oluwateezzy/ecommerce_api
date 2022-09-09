const Order = require("../models/Order");
const Product = require("../models/Product");

const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { checkPermissions } = require("../utils");

const fakeStripeAPI = async({ amount, currency }) => {
    console.log();
};

const createOrder = async(req, res) => {
    console.log();
};

const getAllOrders = async(req, res) => {
    console.log();
};

const getSingleOrder = async(req, res) => {
    console.log();
};

const getCurrentUserOrders = async(req, res) => {
    console.log();
};

const updateOrder = async(req, res) => {
    console.log();
};

module.exports = {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder,
};