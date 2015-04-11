Ketans-Air:~ ketanpatel$ cd ../../Applications
Ketans-Air:Applications ketanpatel$ cd MAMP/htdocs/simple-rest-server-no-db/
Ketans-Air:simple-rest-server-no-db ketanpatel$ npm start





simple rest server - No DB
=========

Simple Rest Server without any Database. Data stored to files. No database requried 

You must have nodejs install to run this 
```
  git clone https://github.com/gaurang171/simple-rest-server-no-db.git
```
or you can download and extract the zip file. 


Go to the directory
```
  cd simple-rest-server-no-db
```  

Install npm packages 
```  
  npm install
```


Start server
```
  npm start  
  
  OR
  
  node server.js
```


How it Works,

1. Creating new Item
POST request : Post data should not have Id
  ```
  POST /users 
  ```

2. Retrive item with id 1
  ```
  GET /users/1 
  ```

3. Modify Item  - Post/Put data must have matching ID
  ```
  PUT or POST  /users/1
  ```





