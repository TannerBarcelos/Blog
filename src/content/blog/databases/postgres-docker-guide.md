---
title: 'How to Install and Run PostgreSQL in Docker'
description: 'A guide on how to install and run PostgreSQL in Docker containers'
pubDate: 'Jul 16 2023'
heroImage: '/blog_images/databases/pg_docker.webp'
tags: ['postgres', 'docker', 'database', 'backend', 'devops']
---

> This is for Mac installations only

## Download the Postgres Image

[Postgres Docker Image](https://hub.docker.com/_/postgres)

```sql
docker pull postgres:15.3
```

This pulls the 15.3 release version of Postgres as a container to your machine (try to avoid pulling latest tags)

> At this point the image is downloaded as `postgres` in Docker but you need to build and run the image as a container

<br>

## Running the Image as a Container

```bash
docker run --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

- `--name some-postgres`: The name of the container. In this case, it is called postgres.

* `-e POSTGRES_PASSWORD`: The super user password for the database. This environment variable is required at build time when building the image. In this case, it is mysecretpassword, but it is advised to use something more secure.
* `-d`: The -d flag in Docker means 'run in detached mode,' which runs the container in the background without blocking your terminal process.
  postgres: The word postgres following -d is the name of the image we are trying to run. The image name comes last.
* `-p 5432:5432`: This exposes the port within the container to the outside world (your machine). It is needed so you can connect to the running instance via a GUI or your terminal using psql.

> Since a `POSTGRES_USER` was not defined in the docker run command (and is optional), Postgres defaults to the username of `postgres` as the username for the database. **This is not Docker behavior it is how Postgres works.**

> Since a `POSTGRES_DB` was not defined (and is optional), Postgres will default the database name to `POSTGRES_USER` . Given above that `POSTGRES_USER` was not defined, we already know that this falls back to the default user of `postgres`. Thus, when running the above `docker run` command, a new database connection **to the default database** `postgres` with user `postgres` and password `mysecretpassword` will be created. (We can use the same container instance to connection to different databases, drop them etc. In the end this container is just hosting a Postgres cluster - it just requires these arguments so it can have a default db to connect to when spinning up)

<br>

## Connecting to the Postgres Instance (Docker Container)

#### Some Background

- Database connections are a client-server paradigm where we use a client (cli like an app, psql or a GUI) to connect to the server and execute commands on that server so it can do its DML/DDL statements and return data to a client.

- To connect to different databases, server connections are closed and re-established to the new db server but not the cluster itself and new connection strings are needed. However, RDBMS can negate the need for this by allowing you to have the 1 connection you use and cross-cut to other databases in that connection because the DBs all exist within the Postgres instance / cluster that is created.

- Interacting with multiple databases within a single connection is a feature provided by the database management system (DBMS) itself, rather than being specific to a DB client. This feature is known as "catalog support" or "cross-database querying."

- When you establish a connection to a DBMS, you typically provide a connection string that includes information such as the server name, port number, authentication credentials, and the default database to connect to. However, some DBMSs allow you to access and query other databases within the same instance, even if your connection string specifies a default database.

- The DBMS achieves this by associating your user account with certain privileges or roles that grant you access to multiple databases. These privileges allow you to query and perform actions on any database for which you have sufficient permissions, regardless of the default database specified in the connection string.

- In DBVisualizer, the interface presents you with a list of all the databases available within your DBMS instance, even if you connected using a connection string that specifies a default database. This enables you to easily switch between databases and write queries against different databases without needing to establish a separate connection for each.

> Specific behavior may vary depending on the DBMS you are using. While some DBMS' provide cross-database querying capabilities, others may not offer this feature, and you would need to establish separate connections to work with different databases.

<br>

### Connecting through CLI using `psql` (Locally or through Docker)

[psql documentation](https://www.postgresql.org/docs/current/app-psql.html#:~:text=psql%20is%20a%20terminal%2Dbased,or%20from%20command%20line%20arguments.)

`psql` **locally**

```sql
-- psql postgresql://<db_username>:<db_user_password>@<host>:<port>/<optional_db_name>
psql postgresql://postgres:mysecretpassword@localhost:5432/<optional_db_name>
```

`psql` **in the Postgres container using `docker exec`**

> This is the prefferred way to connect to the Postgres instance running in the Docker container

```bash
# Docker exec general syntax
# docker exec -it <container_name> <command>

# Connecting to the Postgres Instance Running on Docker
docker exec -it postgres psql -U postgres -d postgres

```

- We do not use the `psql` connection string to connect because the docker container is already running and we are running the command within the container that is hosting the DB server. We are not connecting to the container from our machine, we are connecting to the DB server running in the container from within the container itself.

- `docker exec` allows executing a command on a running container. In this case, on the `postgres` container we created, we want to run `psql` (which is pre-installed in the image) to connect to the running postgres instance.

- If you provided a postgres username when running the container, then the -U (username) to connect to the database will be different. You can read more in the docs

> Databases can only ever be connected to as 1 at a time. If you want to connect to another database , in Postgres every new connection is a whole new process and server connection thus meaning you have to connect to the other database by
>
> **a)** closing the current connection and re-running `psql` as seen in the psql locally section above
>
> **b)** Use the `psql \c <db_name>` in the current terminal to switch to a new database without having to close the current connection and re-run `psql` as seen in the psql locally section above
>
> _Regardless of your choice, behind the scenes psql is creating a new connection for you. This is abstracted away when using a RDBMS though like PG_

<br>

### Connecting through a GUI using [DBVisuzalizer](https://www.dbvis.com/download/)

> My preferred GUI of choice is DBVisualizer. DBVisualizer is Free so we will use this method. Click the link above to download the software.

Once downloaded, Open DBVisualizer and select the **Create a Connection** button

![Screenshot 2023-06-19 at 1.49.44 PM.png](https://res.craft.do/user/full/23a94566-d418-41a0-9075-ac543852aabd/EF8BECC9-4DBB-427B-8790-35D9FBF1172B_2/4MxS5xRdckQaDGd5MYqW9YJJGq7IVX5NFyx7tWTWwd0z/Screenshot%202023-06-19%20at%201.49.44%20PM.png)

This will open up a popup menu with a list of databases to choose from. For our tutorial, we will select **PostgreSQL**

Once selected, the following screen will show up. Here you will want to enter the following fields

- **Server** : `localhost` (we mapped the port to 5432 on our machine which is localhost:5432)
- **Port**: `5432`
- **Database** : `postgres` (this is the default. If you provided a DB name for the container initialization, use that. Of course, also use it if you created a database in the past)
- **Database Userid**: `postgres`
- **Database password**: `supersecretpassword`

> These are the fields we configured when setting up the Docker container to create a new Postgres instance
> **Of course if you followed this and added different username, password, database name and port values, use them as needed.**

![Image.png](https://res.craft.do/user/full/23a94566-d418-41a0-9075-ac543852aabd/doc/DB58D97B-63DD-4FA2-90F7-E01D36FC489A/FB7DDD09-3335-4C7F-9B34-905C5FDEC3CC_2/BVXwr1szp8r5evcqZ6lhdSt50GWa2EauIWoLsC3dgsUz/Image.png)

Select **Connect** and you should see a success in the UI

At this point we have established a new connection to the Postgres database running in the Docker container. By default, you will only have 1 database which is the default `postgres` database which exists due to your `DB_USERNAME` being undefined and used as a fallback.

Let's see what this looks like in the UI (if you gave a different username OR provided a database name, then this will show here instead of the fallback db name of Postgres)

![Image.png](https://res.craft.do/user/full/23a94566-d418-41a0-9075-ac543852aabd/doc/DB58D97B-63DD-4FA2-90F7-E01D36FC489A/1E31898F-BF81-4D2F-A039-53A82D406DBF_2/6X7nClQPMWbtBvoLmXLw4TLno9XvW1FbsyB5ZTH0x1Yz/Image.png)

> 1 database shows and it is the `postgres` database. (If you created more, then more will show up in the list)

To write queries in DBVisualizer, click the database and then type `cmd +t` on your keyboard to open a new **SQL Commander Window**. SQL Commander is just DBVisualizers terminology for a SQL editor

![Image.png](https://res.craft.do/user/full/23a94566-d418-41a0-9075-ac543852aabd/doc/DB58D97B-63DD-4FA2-90F7-E01D36FC489A/6E8AB3B0-EFA7-45F1-9BD6-2017F7D768C9_2/CBwA4RjpmI55jXltUex2BCyleoGh2LpDxgEQHx8Qi34z/Image.png)

```sql
CREATE TABLE IF example (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(25)
);

INSERT INTO example
(user_name)
VALUES
('stacy'),
('henry'),
('me');

SELECT * FROM example;
```

Copy and paste this into the editor and then press the play button to execute the SQL. Congrats, you did it!!

## Conclusion

At this point you have a Postgres instance running in a Docker container and you have connected to it using a GUI and CLI. You can now create tables, add data and query it. You can also create new databases and connect to them as well. All of this data will be persisted as a volume for the Docker container so whenever you start up your container + DBVisualizer later, you will still have all the data!

I hope this guide was helpful. If you have any questions, feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/tanner-barcelos/)

<br>
