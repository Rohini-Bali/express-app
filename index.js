const express = require('express')
const app = express()
const port = 3000

/*Route definition takes the following structure: app.METHOD(PATH, HANDLER)
**app is an instance of express.
**METHOD is an HTTP request method, in lowercase.
**PATH is a path on the server.
**HANDLER is the function executed when the route is matched.
*/

//Respond with Hello World! on the homepage:
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Respond to POST request on the root route (/), the application’s home page:
app.post('/', (req, res) => {
    res.send('Got a POST request')
})

//Respond to a PUT request to the /user route:
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})

//Respond to a DELETE request to the /user route:
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})