"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.entities = void 0;
const db_config_1 = require("./db.config");
class Store {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.query;
                const store = yield db_config_1.db.query(`INSERT INTO public.store(
				name, address, city)
				VALUES ('${data.name}', '${data.address}', '${data.city}');`);
                res.send("Success");
            }
            catch (e) {
                res.send(e);
            }
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const stores = yield db_config_1.db.query('SELECT * FROM public.store');
                // success
                res.send(stores);
            }
            catch (e) {
                res.send(e);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.query;
                const store = yield db_config_1.db.query(`UPDATE public.store SET
			 name='${data.name}', address='${data.address}', city='${data.city}'
			 WHERE id=${data.id};`);
                res.send("Success");
            }
            catch (e) {
                res.send(e);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.query;
                const store = yield db_config_1.db.query(`DELETE FROM public.store WHERE id = ${data.id};`);
            }
            catch (e) {
                res.send(e);
            }
        });
    }
}
class Cashier {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.query;
                const cashier = yield db_config_1.db.query(`INSERT INTO public.cashier(
 						store_id, name, surname, age, sex, yearsofexperience, worksinshifts, previousworkcompany, cashmachineno)
 						VALUES(${data.storeId}, '${data.name}', '${data.surname}', ${data.age}, B'${data.sex}', ${data.yearsOfExperience}, '${data.worksInShifts}', '${data.previousWorkCompany}', ${data.cashMachineNo});`);
                res.send("Success");
            }
            catch (e) {
                res.send(e);
            }
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cashiers = yield db_config_1.db.query('SELECT * FROM public.cashier');
                // success
                res.send(cashiers);
            }
            catch (e) {
                res.send(e);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.query;
                yield db_config_1.db.query(`UPDATE public.cashier SET
					store_id=${data.storeId}, name='${data.name}', surname='${data.surname}', age=${data.age}, sex=B'${data.sex}', yearsofexperience=${data.yearsOfExperience}, worksinshifts='${data.worksInShifts}', previousworkcompany='${data.previousWorkCompany}', cashmachineno=${data.cashMachineNo}
					WHERE id=${data.id};
			`);
                res.send("Success");
            }
            catch (e) {
                res.send(e);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.query;
                yield db_config_1.db.query(`DELETE FROM public.cashier WHERE id=${data.id}`);
                res.send("success");
            }
            catch (e) {
                res.send(e);
            }
        });
    }
    getTargetCashiers1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cashiers = yield db_config_1.db.query(`SELECT c.id, c.store_id, c.name, c.surname, c.age, c.sex, c.yearsofexperience, c.worksinshifts, c.previousworkcompany, c.cashmachineno
			FROM public.cashier c
			LEFT JOIN public.store s on c.store_id = s.id
			WHERE s.name = 'ATB-Market' and s.city = 'Lviv' and c.yearsofexperience > 5 and c.previousworkcompany in ( 'Silpo', 'Arsen' )`);
            console.log(cashiers);
            res.send(cashiers);
        });
    }
    getTargetCashiers2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cashiers = yield db_config_1.db.query(`SELECT c.id, c.store_id, c.name, c.surname, c.age, c.sex, c.yearsofexperience, c.worksinshifts, c.previousworkcompany, c.cashmachineno
			FROM public.cashier c
			LEFT JOIN public.store s on c.store_id = s.id
			WHERE s.name = 'ATB-Market' and s.city = 'Lviv' and s.address = 'Shevchenka St, 100' and c.worksinshifts -> 'days' -> 0 ->> 'begin' = '23:00' and c.worksinshifts -> 'days' -> 0 ->> 'end' = '07:00'`);
            console.log(cashiers);
            res.send(cashiers);
        });
    }
}
exports.entities = {
    Store: new Store(),
    Cashier: new Cashier()
};
