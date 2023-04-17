
## Run Locally

Clone the project

```bash
  $ git clone 
```

Go to the project directory

```bash
  $ cd bright
```

Create postgresql password

```bash
  $ mkdir docker-compose/db
  $ echo "<password-here>" > ./docker-compose/db/db-password.secret
```

Create django secret

```bash
  $ echo "<secret-here>" > ./docker-compose/backend/django.secret
```

Go to compose directory and run the containers

```bash
  $ cd docker-compose
  $ docker compose up -d
```

## View in browser

Frontend at `localhost:8000`

Django Admin at `localhost:3000/admin`