# backend-bank-detail-fetching
Problem statement: To create a REST service that can fetch bank details, using the data given in the API’s query parameters. 
Using the data available in the repository in the backend DB.

******Case 1*******

==> Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.
Request URL  - /api/search?q=Mumbai&limit=2&offset=1 

*******Case 2********

==>Branch API to return possible matches based on the branch name ordered by IFSC code (descending order) with limit and offset
Request URL  - /api/branch?q=LONI&limit=1&offset=1 

Procedure:
Create a nodejs application by creating a folder and running the following commands.
-->npm init
-->npm install express --save
-->npm install pg --save
After this node_modules folder will be created.
Follow the procedure in index.js
1) Import express,pg and bodyparser. Express is for creating API. pg is for adding postgreSQL database.
2) Use get() function from express to get the API and create a query for CASE 1 (/search/API). Return the rows that responds to the query.
3) Use get() function from express to get the API and create a query for CASE 2 (/branch/API). Return the rows that responds to the query.
4) Run using node <filename> or npm start

Push the project into GITHUB to deploy.

Run the project:
**************************
![image](https://user-images.githubusercontent.com/106637847/221558752-bb9e2e30-f6f7-4cd2-9ae2-4285c6b6d63a.png)


Case 1 output:
***************************
http://localhost:3000/bankdetail/search?q=Mumbai&limit=2&offset=1
![image](https://user-images.githubusercontent.com/106637847/221558255-732253f9-b1be-4790-846a-2f15b20d9a83.png)

Case 2 output:
****************************
http://localhost:3000/bankdetail/branch?q=LONI&limit=1&offset=0
![image](https://user-images.githubusercontent.com/106637847/221558565-8c8288d7-139c-40ac-a6c8-91312c25b6d1.png)

http://localhost:3000/bankdetail/branch?q=LONI&limit=1&offset=1
![image](https://user-images.githubusercontent.com/106637847/221558664-370ca144-a04b-4494-b3e2-089c6d565b9d.png)


