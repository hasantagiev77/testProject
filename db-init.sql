-- tables
-- Table: cashier
CREATE TABLE cashier (
    id serial  NOT NULL,
    store_id int  NOT NULL,
    name text  NOT NULL,
    surname text  NOT NULL,
    age int  NULL,
    sex bit(1)  NULL,
    yearsOfExperience int  NOT NULL,
    worksInShifts jsonb  NOT NULL,
    previousWorkCompany text  NOT NULL,
    cashMachineNo int  NOT NULL,
    CONSTRAINT cashier_pk PRIMARY KEY (id)
);

-- Table: store
CREATE TABLE store (
    id serial  NOT NULL,
    name text  NOT NULL,
    address text  NOT NULL,
    city text  NOT NULL,
    CONSTRAINT store_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: cashier_store (table: cashier)
ALTER TABLE cashier ADD CONSTRAINT cashier_store
    FOREIGN KEY (store_id)
    REFERENCES store (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- inital insert to store table
INSERT INTO public.store(
	name, address, city)
	VALUES
	('ATB-Market', '№931, Nauky Ave, 9', 'Lviv'),
	('ATB-Market', 'Shevchenka St, 100', 'Lviv'),
	('ATB-Market', 'Politekhnichna St, 31', 'Lviv'),
	('ATB-Market', 'Mykoly Vasylenka St, 6', 'Kyiv'),
	('ATB-Market', 'Dekabrystiv St, 2', 'Lviv');

-- inital insert to cashier
INSERT INTO public.cashier(
	store_id, name, surname, age, sex, yearsofexperience, worksinshifts, previousworkcompany, cashmachineno)
	VALUES
	(1, 'Vitalij', 'Zynovijovych', 26, B'0', 4, '
                                                {"days":[
                                                    {"begin": "09:00", "end":"18:00"},
                                                    {"begin": "09:00", "end":"18:00"},
                                                    {"begin": "09:00", "end":"18:00"},
                                                    {"begin": "09:00", "end":"18:00"},
                                                    {"begin": "09:00", "end":"18:00"},
                                                    {"begin": "", "end":""},
                                                    {"begin": "", "end":""}
                                                ]}'
        , 'Silpo', 4 ),
	(2, 'Myroslav', 'Danylovych', 28, B'0', 6, '
                                                {"days":[
                                                    {"begin": "23:00", "end":"07:00"},
                                                    {"begin": "23:00", "end":"07:00"},
                                                    {"begin": "23:00", "end":"07:00"},
                                                    {"begin": "23:00", "end":"07:00"},
                                                    {"begin": "23:00", "end":"07:00"},
                                                    {"begin": "", "end":""},
                                                    {"begin": "", "end":""}
                                                ]}', 'Arsen', 7 ),
	(4, 'Vyacheslav', 'Ruslanovych', 22, B'0', 3, '
                                                {"days":[
                                                    {"begin": "11:00", "end":"20:00"},
                                                    {"begin": "11:00", "end":"20:00"},
                                                    {"begin": "11:00", "end":"20:00"},
                                                    {"begin": "11:00", "end":"20:00"},
                                                    {"begin": "11:00", "end":"20:00"},
                                                    {"begin": "", "end":""},
                                                    {"begin": "", "end":""}
                                                ]}'
        , 'Arsen', 12 ),
	(2, 'Larysa', 'Nazarivna', 45, B'1', 9, '
                                                {"days":[
                                                    {"begin": "23:00", "end":"07:00"},
                                                    {"begin": "23:00", "end":"07:00"},
                                                    {"begin": "23:00", "end":"07:00"},
                                                    {"begin": "23:00", "end":"07:00"},
                                                    {"begin": "23:00", "end":"07:00"},
                                                    {"begin": "", "end":""},
                                                    {"begin": "", "end":""}
                                                ]}', 'ABC', 9 ),
	(5, 'Larysa', 'Nazarivna', 45, B'1', 9, '
                                                {"days":[
                                                    {"begin": "12:00", "end":"21:00"},
                                                    {"begin": "12:00", "end":"21:00"},
                                                    {"begin": "12:00", "end":"21:00"},
                                                    {"begin": "12:00", "end":"21:00"},
                                                    {"begin": "12:00", "end":"21:00"},
                                                    {"begin": "", "end":""},
                                                    {"begin": "", "end":""}
                                                ]}'
        , 'Silpo', 11 ),
	(3, 'Eduard', 'Ostapovych', 34, B'0', 7, '
                                                {"days":[
                                                    {"begin": "23:00", "end":"07:00"},
                                                    {"begin": "23:00", "end":"07:00"},
                                                    {"begin": "23:00", "end":"07:00"},
                                                    {"begin": "23:00", "end":"07:00"},
                                                    {"begin": "23:00", "end":"07:00"},
                                                    {"begin": "", "end":""},
                                                    {"begin": "", "end":""}
                                                ]}'
        , 'Arsen', 15 );
	