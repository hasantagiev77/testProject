# TestProject

First fill ".env.template" file with values f.e:
```
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=postgres
POSTGRES_HOST=testProject_db #Do not edit!
POSTGRES_PORT=5432
```
and rename file from ".env.template" to ".env"
## To start the project(build version):
```
docker-compose up
```
## Run project on local (development version):
To run database:
```
docker-compose run -d database
```
Installation of the packages:
```
npm install
```
Running app with hot reload
```
nodemon src/app.ts
```

## Database physical model
![Screen Shot 2021-07-23 at 14 50 57](https://user-images.githubusercontent.com/31539254/126772068-27ff7f07-943c-495f-a4e4-58c58a637ee1.png)

## 1. Tables

### 1.1. Table cashier

#### 1.1.1. Columns

|Column name|Type|Properties|Description|
|:----------|:---|:---------|:----------|
|id|serial|PK||
|store\_id|int||Id of the store where cashier is working|
|name|text||Name of the cashier|
|surname|text||Surname of the cashier|
|age|int|null|Age of the cashier|
|sex|bit(1)|null|Sex of the cashier(0 for male, 1 for female)|
|yearsOfExperience|int||How much years of experience does cashier has|
|worksInShifts|jsonb||Shift of the cashier f.e {begin:"23:00", end:"07:00"}|
|previousWorkCompany|text||Name of the store where did cashier worked before|
|cashMachineNo|int||Number of the cash machine where did cashier works|

### 1.2. Table store

#### 1.2.1. Columns

|Column name|Type|Properties|Description|
|:----------|:---|:---------|:----------|
|id|serial|PK||
|name|text||Name of the store f.e ATB|
|address|text||Address of the place where store is located|
|city|text||City where store is located|

## 2. Reference

### 2.1. Reference cashier\_store

#### 2.1.1. Columns

|[store]|1..\*|[cashier]|
|:------|:----|:--------|
|id|\<-\>|store\_id|


