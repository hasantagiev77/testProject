"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_entities_1 = require("./db/db.entities");
const app = express_1.default();
const port = 8080; // default port to listen
// define a route handler for the default home page
app.get('/storeCreate', db_entities_1.entities.Store.create);
app.get('/storeRead', db_entities_1.entities.Store.read);
app.get('/storeUpdate', db_entities_1.entities.Store.update);
app.get('/storeDelete', db_entities_1.entities.Store.delete);
app.get('/cashierCreate', db_entities_1.entities.Cashier.create);
app.get('/cashierRead', db_entities_1.entities.Cashier.read);
app.get('/cashierUpdate', db_entities_1.entities.Cashier.update);
app.get('/cashierDelete', db_entities_1.entities.Cashier.delete);
app.get('/getTargetCashiers1', db_entities_1.entities.Cashier.getTargetCashiers1);
app.get('/getTargetCashiers2', db_entities_1.entities.Cashier.getTargetCashiers2);
app.get('/getAllCashiers', db_entities_1.entities.Store.read);
app.get("/", (req, res) => {
    res.send("Hello world!");
});
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
