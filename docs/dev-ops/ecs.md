---
sidebar_position: 2
---

# Deploying an application on ECS Fargate

## Pushing an image to ECR

Create a private repository on ECR.

Click on `View push commands`
Use the instructions provided to build and push a image of your application to ECR

## Create a task definition

Select Fargate as the launch type.

Select `Add Container`
Use the Image URI of the image as provided inside ECR.

## Create a Cluster

Select `Networking only` for the cluster template.

## Creating a Service

Inside your cluster, click on the `Create` option under the `Services` tab

Select the Task Definition created above for this service.
