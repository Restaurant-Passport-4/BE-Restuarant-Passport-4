# BE-UI-Restuarant-Passport-4

_Delpoyed URL:_ TBD

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
    <!-- been_there: boolean default(false) -->
}
```

#### passport

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
```

## End Points

### Auth Routes

| Method | Endpoint         | Token Required | Description                                                                                                                 |
| ------ | ---------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| POST   | `/user/register` | no             | Registers a new user <br> Required: username, password, name, city, and email. <br>Returns id, username, name, city, email. |
| POST   | `/user/login`    | no             | Required: username and password<br> Signs in user and returns a token and userId                                            |

### Restaurant Routes

| Method | Endpoint          | Token Required | Description                                                                               |
| ------ | ----------------- | -------------- | ----------------------------------------------------------------------------------------- |
| GET    | `/restaurant`     | no             | Returns all restaurants                                                                   |
| POST   | `/restaurant`     | no             | Requires name <br> Adds a restaurant to the database                                      |
| POST   | `/restaurant/:id` | no             | Requires name, city, address, description, city_id <br> Adds a restaurant to the database |
| GET    | `/restaurant/:id` | no             | Returns a restaurant by id                                                                |

### Cities Routes

<!-- | Method | Endpoint                  | Token Required | Description                                                               |
| ------ | ------------------------- | -------------- | ------------------------------------------------------------------------- |
| GET    | `/cities/:id/restaurants` | yes            | Returns name and id of restaurants in a city by city id (for suggestions) | -->

### Passport Routes

| Method | Endpoint                               | Token Required | Description                         |
| ------ | -------------------------------------- | -------------- | ----------------------------------- |
| GET    | `/user/:userid/passport`               | yes            | Returns all visited restaurants     |
| GET    | `/user/:userid/passport/:restaurantid` | yes            | Returns specific visited restaurant |
| POST   | `/user/:userid/passport/:restaurantid` | yes            | Adds visited restaurant             |
| PUT    | `/user/:userid/passport/:restaurantid` | yes            | Updates specific visited restaurant |
| DELETE | `/user/:userid/passport/:restaurantid` | yes            | Deletes specific visited restaurant |
