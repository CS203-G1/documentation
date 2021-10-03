---
sidebar_position: 1
---

# Setting up the Database

## Step 1: Setting Up an RDS Instance for PostgreSQL

Create a RDS Instance via AWS RDS Management Console

Select PostgreSQL as Engine type.
Select the desired VPC for the RDS instance to be hosted in.

## Step 2: Testing your connection

Select your RDS instance in the RDS Management Console

Modify the RDS Instance to be publicly accessible.
Configure the security group associated with the RDS Instance to allow incoming traffic at port 5432.
Connect to the database with the pgadmin tool using the endpoint provided.
