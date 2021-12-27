# Project Setup

Download this repository and in your terminal

```
npm install
npm run start
```
With yarn:

```
yarn install
yarn start

```

# Used Tech and Libraries and Notes

- Node.js is used with express.js.
- Mongoose is used to create a schema and connect to database.
- Joi is used for validation.
- Jest is used for testing.
- .env file includes mongoDB URI and port number.
- Heroku to deploy app.


# POST Request

To make a post request, go to this endpoint:

    localhost:6100/api

include these fields to body:

    { 
	    "startDate": "2016-01-26",
	    "endDate": "2018-02-02", 
	    "minCount": 2700, 
	    "maxCount": 3000 
    }
    
* All fields are required. 
* Dates should be iso formatted just like in the example.

You can send a request with curl such as: 

`curl -X POST 'localhost:6100/api' -H 'Content-Type: application/json' -d '{"startDate": "2016-01-26", "endDate": "2018-01-01", "minCount": 2700, "maxCount": 3000}'`

A successful request should return a response such as: 

      {
    	"code": 0,
    	"msg": "Success",
    	"records": [
   			{
   				"key": "wtSjVcpg",
   				"createdAt": "2016-02-22T11:13:43.165Z",
   				"totalCount": 2888
   			},
   			{
   				"key": "kkxEdhft",
   				"createdAt": "2016-02-19T06:35:39.409Z",
   				"totalCount": 2980
   			}
    }

Any missing parameter will return a response such as:

    {
	    "error": "\"<missingParameter>\" is required"
    }



# About Project

In this section I sum up the whole project.

In my **app.js** I basically require express, do mongoDB connection, import my route and listen the server. `Routes` only includes one route which is the `/api` route. This route takes two functions in it. One is valitadion and other is controller. Before we can call controller validate function should validate the schema. This function uses **Joi** to validate the schema and if so `postMethod` is called. If not we see a 400 BAD REQUEST and an error message as stated above.

`postMethod` is going to make the query with using model schema and `recordService`. In `recordService` we basically matches the body parameters with the data in records collection and shows the result with the fields that we want to see. If everything works without an error we see a respond. (A respond payload can be seen above).

For other endpoints there is a little code which handles errors and logs it to a log file. There are a few examples in that folder already. 

Jest is used to code test for 3 cases. One for successful post request, one for unsuccessful post request and one for unexisting endpoint.

To run test case you can simply open terminal and type:

```
npm run test

```

After test a warn is seen which says that use jest with --detectOpenHandles. For this it can be included in package.json or in terminal. 

This is because mongoose is still connected and jest actually wants it to be disconnected. (I have tried various methods but couldn't figure it out.)


