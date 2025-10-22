# Welcome to my SBA-319 MongoDB & Mongoose DataBase App

## Read Me

This is the documentation for my SBA-319 Mongoose DataBase, we'll be going throught the routes for the customer, inventory, and transaction database. There are routes set up for you to post, read, delete, & update information.

## Routes

### Customers URL: http://localhost:4444/customers
This is the customer route that displays all customer information and create new customers. There are certain requirments for the schema so please refer to customer schema in models folder. You can also get, delete, and update customer infomation via id, username, and email; 
http://localhost:4444/customers/:id
http://localhost:4444/customers/username/:username
http://localhost:4444/customers/email/:email

### Inventory URL: http://localhost:4444/inventory
The route to access all of the inventory. You also have the ability to create new inventory, check invetory schema for requirments. You can also get inventory information through the objectId.
 http://localhost:4444/inventory/:id

### Transactions URL: http://localhost:4444/transactions
The route for the transactions are access through this url which also have the ablity to create new transactions. There are requirments for transactions so refer to transaction schema for guidance. Search for transactions by id thourgh:
http://localhost:4444/transactions/:id

### Seed Data
There are seed routes set up for each models.
http://localhost:4444/customers/seed
http://localhost:4444/inventory/seed
http://localhost:4444/transactions/seed


## Contact 
If any questions, concerns, suggestions, or new ideas, please fell free to contact me through email.