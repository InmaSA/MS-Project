# MS-Project

## Overview

1. Install prerequisites

    Before installing project make sure the following prerequisites have been met.

2. Clone the project

    Download the code from this repository.

3. Add .env

    Add the necesary environment variables.    

4. Poblate your choosen DB

    Execute the seed file.   

5. Run the application

    How to run the local environment for Developers.

   


    

___

## 1.- Install prerequisites

You need to have redis and mongodb both installed and started.



## 2.- Clone the project

To install this [repo](https://github.com/InmaSA/MS-Project), download it and follow these instructions:

```sh
git clone https://github.com/InmaSA/MS-Project
```

Go to the project directory :

```sh
cd MS-Project
```


## 3.- Add .env

Go to client directory:

```sh
cd client
```

Create .env file with the following environment variables:

REACT_APP_URL=http://localhost:5000/api/


Open a different terminal window and go back to root MS-Project directory:

```sh
cd ..
```
Go to server directory:

```sh
cd server
```

Create .env file with the following environment variables:

PORT=5000

ENV=development

DB || this will be the name of the mongo dababase which you are to poblate later executing seed.js file

WHITE_URL=http://localhost:3000
REDIS_ID_KEY || choose a name for redis key
COMPANY_DB_ENDPOINT || endpoint given



## 4.- Poblate your choosen DB

To poblate the data base go to server terminal window and execute the following script inside server folder:

```sh
node bin/seed.js
```


## 5.- Run the application

To deploy the local environment for developers do you need execute these steps (be sure you are in the correct terminal window client/server side):

1.- Start running client with this command inside client folder, in client terminal window. This will open browser automatically:

```sh
npm start
```

2-. Start running server whith the following command inside server folder, in server terminal window:

```sh
npm start
```



