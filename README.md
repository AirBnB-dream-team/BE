# AIR BNB CLONE Backend

#### Backend for AIR BNB build week project

# Deployed Backend

[--->Deployed Site <---](https://airbnbclonedevin.herokuapp.com)
https://airbnbclonedevin.herokuapp.com

# Technologies

#### production

- Express: fast, unopinonated, minimalist web framework for Node.js
- Bcrypt: Hashes passwords and adds securtity to the database and user information
- JSON Web Tokens: Generate and verify web tokens to maintain and add securtiy to database
- Postgres: is a relational database that uses tables to store data
- Knex: SQL query builder for various relational databases, like MYSQL, Postgres, etc...
- Cors: is a package for providing middleware that can be used to enable CORS
- Helmet: is a package for security hiding your headers

#### Developer

- Nodemon: is a tool used by developers...it helps with restarting the server when the file changes. Nodemon watches the file ex. nodemon index.js
- pg: is a non-blocking PostgresSQL client for Node.js
- sqlite3: a perfect lite DB for development

# Table of Contents

- [Auth Routes](#AuthRoutes)

  - Register User
  - Login User

- [Rental Routes](#RentalRoutes)

  - Get Events
  - Get Events by Planner ID
  - Get Event By Reserved ID
  - Post Events By Planner ID
  - Update Events By Event ID
  - Delete Events Event ID

# Auth Routes

### /auth/

## Register

---

#### Register a user

##### _Method Url_: `/auth/register`

##### HTTP method: [POST]

### Headers

| Name           |  Type  | Required |       Description        |
| :------------- | :----: | :------: | :----------------------: |
| `Content-Type` | String |   Yes    | Must be application/json |

### Body

| Name       |  Type  | Required |  Description   |
| :--------- | :----: | :------: | :------------: |
| `username` | String |   Yes    | Must be unique |
| `password` | String |   Yes    |                |
| `email`    | String |   Yes    |                |

#### _example:_

```

{
  "username": "user1"
  "password": "password123",
  "email": "email@email.com",
}
```

#### Response

201 (Created)

If you successfully register a user the endpoint will return an HTTP response with a status code 201 message.

```
    "newUser": {
       "id": "1",
       "username": "user1",
       "email": "email@email.com",
   },


```

500 (Internal Server Error)

if any of the above data is missing the registration will not go through, it will produce a 500 error as show below

#### _example:_

```
{
    "error": "Server could not register user"
}
```

---

# Login

## Logs a user in

#### _Method Url:_ `/auth/login`

#### HTTP method [POST]

### Headers

| Name           |  Type  | Required |       Description        |
| :------------- | :----: | :------: | :----------------------: |
| `Content-Type` | String |   Yes    | Must be application/json |

### Body

| Name       |  Type  | Required |              Description              |
| :--------- | :----: | :------: | :-----------------------------------: |
| `username` | String |   Yes    | Must be the username in the database  |
| `password` | String |   Yes    | Must match a password in the database |

##### _example:_

```
{
"username":"username",
"password": "password123"
}
```

#### Response

200 (OK)

If you successfully login, the endpoint will return an HTTP response with a status code 200, message, and a token as below.

```
{
    "username": "username1",
    "id": 1,
    "email": "devin@hello.com",
    "message": "Welcome username1!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkVLbmFwbWFuMTAwIiwiaWQiOjMsImlhdCI6MTU2OTM1ODg2MiwiZXhwIjoxNTY5NDQ1MjYyfQ.sNDjccLyuHWhgkne5Ky0hR1-Pd7QNGr6TyKlJqTDHSk"
}

```

401 (UNAUTHORIZED)

If you fail to login, the endpoint will return an HTTP response with a status code 401 which indicates the username and/or password entered is not valid.

```
{
    "error": "Invalid Credentials"
}
```

500 (Bad Request)

If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below. However this error can also come from a user mistake too.

```
{
    "error": "Server could not log you in"
}
```

# Rental Routes

### /api/

## Get All Rentals

#### _Method Url:_ `/api/`

##### HTTP method: [GET]

## **Get list of all Rentals**

#### Headers

| Name            |  Type  | Required |       Description        |
| :-------------- | :----: | :------: | :----------------------: |
| `Content-Type`  | String |   Yes    | Must be application/json |
| `authorization` | String |   Yes    |      JSON Web Token      |

#### Response

200 (OK)

The endpoint will return a HTTP response with a status code and a body as below

```
 [
    {
        "id": 1,
        "planner_id": 1,
        "bath_number": "3",
        "bed_number": "3",
        "zip": "56487",
        "address": "33/44/2312",
        "city": "boston",
        "state": "ma",
        "email": "devin.gmail.com",
        "sqft": "4567",
        "date": "33/44/2312",
        "price": 800,
        "reserved": null
    },
    {
        "id": 2,
        "planner_id": 2,
        "bath_number": "8",
        "bed_number": "3",
        "zip": "56487",
        "address": "135 oswald ln",
        "city": "boston",
        "state": "ma",
        "email": "devin.gmail.com",
        "sqft": "4567",
        "date": "33/44/2312",
        "price": 800,
        "reserved": 1
    },
    {
        "id": 3,
        "planner_id": 3,
        "bath_number": "3",
        "bed_number": "3",
        "zip": "56487",
        "address": "33/44/2312",
        "city": "boston",
        "state": "ma",
        "email": "devin.gmail.com",
        "sqft": "4567",
        "date": "33/44/2312",
        "price": 800,
        "reserved": null
    }
]

```

500(SERVER ERROR)

If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below.

```
    {
        error: "Server could not get Rentals"
    }

```

## Get Rentals By USERS Id For All Posted Rentals By The User

#### _Method Url:_ `/api/:id`

##### HTTP method: [GET]

## **Get All Rentals By Poster**

#### Headers

| Name            |  Type  | Required |       Description        |
| :-------------- | :----: | :------: | :----------------------: |
| `Content-Type`  | String |   Yes    | Must be application/json |
| `authorization` | String |   Yes    |      JSON Web Token      |

#### Response

200 (OK)

The endpoint will return a HTTP response with a status code and a body as below

```
[
    {
        "id": 1,
        "planner_id": 2,
        "bath_number": "3",
        "zip": "56487",
        "address": "33/44/2312",
        "city": "boston",
        "state": "ma",
        "email": "devin.gmail.com",
        "sqft": "4567",
        "price": 800,
        "reserved": null,
        "date": "33/44/2312"
    },
    {
        "id": 2,
        "planner_id": 2,
        "bath_number": "8",
        "zip": "56487",
        "address": "135 oswald ln",
        "city": "boston",
        "state": "ma",
        "email": "devin.gmail.com",
        "sqft": "4567",
        "price": 800,
        "reserved": 1,
        "date": "33/44/2312"
    },
    {
        "id": 3,
        "planner_id": 2,
        "bath_number": "3",
        "zip": "56487",
        "address": "33/44/2312",
        "city": "boston",
        "state": "ma",
        "email": "devin.gmail.com",
        "sqft": "4567",
        "price": 800,
        "reserved": null,
        "date": "33/44/2312"
    }
]

```

400(CLIENT ERROR)

The endpoint will return a HTTP response with a status code and a body as below

```

{
    "error": "Can not find user with that id"
}
```

500(SERVER ERROR)

If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below.

```
    {
        error: "Server could not get Rentals"
    }

```

## Get Rentals By id of user who has reserved Rentals

#### _Method Url:_ `/api/reserved/:id`

##### HTTP method: [GET]

## **Need user ID to get events by the reserved column in DB**

#### Headers

| Name            |  Type  | Required |       Description        |
| :-------------- | :----: | :------: | :----------------------: |
| `Content-Type`  | String |   Yes    | Must be application/json |
| `authorization` | String |   Yes    |      JSON Web Token      |

#### Response

200 (OK)

The endpoint will return a HTTP response with a status code and a body as below

```
[
    {
        "id": 2,
        "planner_id": 2,
        "bath_number": "8",
        "zip": "56487",
        "address": "135 oswald ln",
        "city": "boston",
        "state": "ma",
        "email": "devin.gmail.com",
        "sqft": "4567",
        "price": 800,
        "reserved": 1,
        "date": "33/44/2312"
    }
]

```

400(CLIENT ERROR)

The endpoint will return a HTTP response with a status code and a body as below

```

{
    "error": "That user has no Rentals"
}
```

500(SERVER ERROR)

If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below.

```
    {
        error: "Server could not get Rentals"
    }

```

# Post Rental

#### _Method Url:_ `/api/:id`

##### HTTP method: [POSt]

## **Need Planner ID to post event**

#### Headers

| Name            |  Type  | Required |       Description        |
| :-------------- | :----: | :------: | :----------------------: |
| `Content-Type`  | String |   Yes    | Must be application/json |
| `authorization` | String |   Yes    |      JSON Web Token      |

#### Response

200 (OK)

The endpoint will return a HTTP response with the ID of the newly added rental

```
 [
     5
 ]

```

500(SERVER ERROR)

If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below.

```
    {
        error: "Server could not post Rental"
    }

```

# Update Events

#### _Method Url:_ `/api/:rental_id`

##### HTTP method: [PUT]

## **NeedRental ID to update Rental**

#### Headers

| Name            |  Type  | Required |       Description        |
| :-------------- | :----: | :------: | :----------------------: |
| `Content-Type`  | String |   Yes    | Must be application/json |
| `authorization` | String |   Yes    |      JSON Web Token      |

#### Response

200 (OK)

The endpoint will return a HTTP response with a status code of 200 and a response of 1

```
 1

```

500(SERVER ERROR)

If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below.

```
    {
        error: "Failed to update Rental"
    }

```

# Delete Events

#### _Method Url:_ `/api/Rental_id/

##### HTTP method: [DELETE]

## **Need Event ID to delete event**

#### Headers

| Name            |  Type  | Required |       Description        |
| :-------------- | :----: | :------: | :----------------------: |
| `Content-Type`  | String |   Yes    | Must be application/json |
| `authorization` | String |   Yes    |      JSON Web Token      |

#### Response

200 (OK)

The endpoint will return a HTTP response with a status code 200 and the ID of The Deleted Rental

```
{
    "removed": "deleted rental with id 5"
}
```

500(SERVER ERROR)

If there is a server or database error, the endpoint will return an HTTP response with a status code 500 and a body as below.

```
    {
        error: "Server could not delete event"
    }

```
