# PETFUL API

#### GET People

Endpoint for getting the people in the queue

| Method | Endpoint | Usage      | Returns         |
| ------ | -------- | ---------- | --------------- |
| GET    | /people  | Get people | Array of people |

##### Responses

| Code | Description                 |
| ---- | --------------------------- |
| 200  | Returns the queue of people |
| 500  | Internal Error              |

#### POST

Endpoint for adding a name to the back of the queue

| Method | Endpoint | Usage        | Returns         |
| ------ | -------- | ------------ | --------------- |
| POST   | /people  | Add new name | Response Object |

##### Request Body

| Type | Fields | Description |
| ---- | ------ | ----------- |
| JSON | name   | A String    |

##### Responses

| Code | Description                              |
| ---- | ---------------------------------------- |
| 201  | Respond with object containing user data |
| 400  | Bad Request                              |

#### GET Cat

Returns an object containing the next cat in the queue

| Method | Endpoint | Usage    | Returns    |
| ------ | -------- | -------- | ---------- |
| GET    | /cats    | Get cats | Cat object |

##### Responses

| Code | Description             |
| ---- | ----------------------- |
| 200  | Respond with cat object |
| 404  | No cats                 |

#### GET Dog

Returns an object containing the next Dog in the queue

| Method | Endpoint | Usage    | Returns    |
| ------ | -------- | -------- | ---------- |
| GET    | /dogs    | Get dogs | Dog object |

##### Responses

| Code | Description             |
| ---- | ----------------------- |
| 200  | Respond with dog object |
| 404  | No dogs                 |

#### DELETE name

Delete a name from the queue

| Method | Endpoint | Usage        | Returns |
| ------ | -------- | ------------ | ------- |
| DELETE | /people  | Dequeue name | Nothing |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204  | No response |
| 404  | Error       |

#### DELETE Cat

Delete a Cat from the queue

| Method | Endpoint | Usage       | Returns |
| ------ | -------- | ----------- | ------- |
| DELETE | /cats    | Dequeue Cat | Nothing |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204  | No response |
| 404  | Error       |

#### DELETE Dog

Delete a Dog from the queue

| Method | Endpoint | Usage       | Returns |
| ------ | -------- | ----------- | ------- |
| DELETE | /dogs    | Dequeue Dog | Nothing |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204  | No response |
| 404  | Error       |
