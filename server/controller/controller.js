const express = require("express");

const home = (req, res, next) => {
    try {
        res.send("Home page");
    } catch (error) {
        next(error);
    }
}

const service = (req, res, next) => {
    try {
        res.send("Service page");
    } catch (error) {
        next(error);
    }
}

const craftmen = (req, res, next) => {
    try {
        res.send("Craftmen page");
    } catch (error) {
        next(error);
    }
}

module.exports = {home, service, craftmen};