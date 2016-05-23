
Start the server (using `npm start` to build assets), navigate to http://localhost:8080 and
tick the checkbox, and in any console:

```
curl -H "Content-Type: application/json" -X POST -d '{"name":"test 1"}' localhost:8080/events
curl -H "Content-Type: application/json" -X POST -d '{"name":"test 2"}' localhost:8080/events
```
