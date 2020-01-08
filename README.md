# BE-UI-Restuarant-Passport-4

_Delpoyed URL:_ https://restaurant-passport-4.herokuapp.com/

## Models

#### user

```
{
    id: integer, automatically generated
    username: string, required
    password: string, required
    name: string, required
    email: string, required
    city: string, required
}
```

#### restaurants

```
{
    restaurant_id: integer, automatically generated
    name: string, required
    city: string, required
    address: string, required
    description: string, required
}
```

#### passport

<!--
```
{
    passport_id: integer, automatically generated
    user_id: integer, required, references id of user
    zipcode: string, optional
    phone_number: string, optional
    websiteURL: string, optional
    my_rating: integer(1-5), optional
    notes: string, optional
    stamped: boolean default(false)
}
``` -->

## End Points

### Auth Routes

| Method | Endpoint             | Token Required | Description                                                                                                                 |
| ------ | -------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| POST   | `/api/auth/register` | no             | Registers a new user <br> Required: username, password, name, city, and email. <br>Returns id, username, name, city, email. |
| POST   | `/api/auth/login`    | no             | Required: username and password<br> Signs in user and returns a token and userId                                            |

### Restaurants Routes

| Method | Endpoint               | Token Required | Description                                                                     |
| ------ | ---------------------- | -------------- | ------------------------------------------------------------------------------- |
| GET    | `/api/restaurants`     | no             | Returns all restaurants                                                         |
| POST   | `/api/restaurants/`    | no             | Requires name, city, address, description<br> Adds a restaurant to the database |
| GET    | `/api/restaurants/:id` | no             | Returns a restaurant by id                                                      |

### Cities Routes

<!-- | Method | Endpoint                  | Token Required | Description                                                               |
| ------ | ------------------------- | -------------- | ------------------------------------------------------------------------- |
| GET    | `/cities/:id/restaurants` | yes            | Returns name and id of restaurants in a city by city id (for suggestions) | -->

### Passport Routes

| Method | Endpoint                | Token Required | Description                                              |
| ------ | ----------------------- | -------------- | -------------------------------------------------------- |
| GET    | `/api/passport/:userid` | yes            | Returns all visited restaurants                          |
| POST   | `/api/passport/:userid` | yes            | Adds visited restaurant. Same format as restaurant model |

<!-- | GET    | `/user/:userid/passport/:restaurantid` | yes            | Returns specific visited restaurant |
| PUT    | `/user/:userid/passport/:restaurantid` | yes            | Updates specific visited restaurant |
| DELETE | `/user/:userid/passport/:restaurantid` | yes            | Deletes specific visited restaurant | -->
