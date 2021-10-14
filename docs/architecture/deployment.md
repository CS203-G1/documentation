---
sidebar_position: 1
---

# Software Architecture

### Deployment Diagram
![Docusaurus](/img/architecture-diagram.png)
[Diagram Link](https://app.diagrams.net/#G1Zng3hRo18A9IQyPTjcUSw1GeiGrXKw0I)

Note: Please contact [@bingyuyap](https://github.com/bingyuyap) for access to the deployment diagram.

## Design decisions
### Amazon Web Services
We decided to host the software project on AWS Cloud Services as this software is meant to used by many companies in Singapore. In time to come, we want to scale to other countries as well where COVID-19 has impacted not just Singapore. 

### API Gateway 
As we are developing this product in less than 3 months, our team's software engineers need a way to manage the APIs. API Gateway is a fully managed service that makes it easy for us to create, publish, maintain, and monitor. Not just that, API Gateway also automatically secures our API endpoints as we are able to authorize access to your APIs with AWS Identity and Access Management (IAM) and Amazon Cognito.

With the fully managed API Gateway and Docusaurus, communication gap is minimized between the Front End, Back End and Dev Ops team. Hence, improving efficiency and effectiveness of our development. 

Furthermore, we want to scale to other devices, not just web browsers. We will be able to easily develop mobile application without much modification to the backend services. In other words, API Gateway increases the software maintainability as each service is loosely coupled with their on responsibilities distinguished properly. 

With API Gateway, we are able to increase the Security, Scalability and Maintainability of our software.

### Application Load Balancer and Auto Scaling Group
Using Application Load Balancer, we are able to direct traffic to Fargate instances that are able to meet the workload requirements. Together with the auto-scaling group, we are able to scale up and down to meet the current workload requirements. This increases the availability of the services as auto-scaling (as the name suggests) scales our instances automatically to handle traffic at all times. 

Speaking of auto-scaling, it is most cost effective than manual scaling since it dynamically increases and decreases capacity as needed. When workload is low, like during night time, instances that are not used are terminated. 

With that our software is more fault tolerant too, where failover is done with replicas as AWS detects an unhealthy instance. This explains the need for the `/health` endpoint configured in our Spring Boot components    

