# Lambda Functions with Serverless Framework 
![Logo](./logo.JPG)

## Scripts
* Deploy fucntions
```
serverless deploy
```
* Invoke functions
```
serverless invoke --function=<functionname> --log
```

## Function Names
* **Hello:** This function returns a JSON object containing the event details.
  
* **Mongo:** This function returns the result of querying the user object stored in Mongo Atlas.
  
* **Proxyweather:** This function redirects the user to a react weather application hosted on *Netlify*.

## Tips for use
* Environment variable for Mongo Connection stored in AWS Lambda console
