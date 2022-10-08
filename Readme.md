# RESTful API Using Node, Express, and MongoDB

## Prerequisites

1. Docker CE is installed.
2. Docker Compose is installed.

## Build

```bash
docker build --platform linux/amd64 -t yasithab/demo-api:1.0.0 .
```

## Deployment

```bash
docker compose up -d
```

## Add Demo Data

```bash
cd scripts
bash ./add_demo_data.sh
```

## Remove Demo Data

```bash
cd scripts
bash ./remove_demo_data.sh
```

## API Endpoints

### 1. Return All Names

```bash
## GET-Request
curl "http://localhost/api/get" \
     -H 'Content-Type: application/json'
```

### 2. Query a Name with User ID.

```bash
## GET-Request
curl "http://localhost/api/get/<user_id>" \
     -H 'Content-Type: application/json'
```

### 3. Add a New User.

```bash
## POST-Request
curl -X "POST" "http://localhost/api/post" \
     -H 'Content-Type: application/json' \
     -d $'{
          "name": "Saman",
          "age": 26
        }'
```

### 4. Modify an Existing User.

```bash
## PATCH-Request
curl -X "PATCH" "http://localhost/api/update/<user_id>" \
     -H 'Content-Type: application/json' \
     -d $'{
          "name": "Ranidu",
          "age": 46
        }'
```

### 5. Remove an Existing User.

```bash
## DELETE-Request
curl -X "DELETE" "http://localhost/api/delete/<user_id>" \
     -H 'Content-Type: application/json'
```