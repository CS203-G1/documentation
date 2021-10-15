---
sidebar_position: 1
---

# Cloud Architecture

### Deployment Diagram
![Diagram](/img/architecture-diagram.png)
[Diagram Link](https://app.diagrams.net/#G1Zng3hRo18A9IQyPTjcUSw1GeiGrXKw0I)

Note: Please contact [@bingyuyap](https://github.com/bingyuyap) for access to the deployment diagram.

# Design decisions
We are designing our solution to meet [ISO25000](http://iso25000.com/index.php/en/iso-25000-standards/iso-25010) requirements as close as possible. 
## Amazon Web Services
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

### AWS Fargate for Roster, Analytics and Scraper
Instead of EC2, Fargate is used as the software will not be run 24/7. With Fargate, we can scale up during the day and scale down during the night. While EC2 is more suitable for constant, large workloads like processing transactions or some sort. 

You may also question the previous statement since we want to scale to other countries where they are operating at a different timezone, so there is possibility where there is a constant workload on our architecture. To address that, there is multiple regions and availability zones for AWS services. We can easily rebuild the services using the images in ECR for these other regions. Say we want to launch this product in the US, we would not want them to use the instance available in Singapore. That's stupid. We ideally should launch the instances as close as possible to our US users where they can experience minimized latency.

Why not Lambda, why Fargate? You may ask. It's because we need to develop Spring Boot projects and dockerize them for this module. That's why. Jokes aside, we speculate that this software will be used consistently during day time - especially office hours. Lambda is more commonly used when the workload is not as consistent and is more burstable / unpredictable.

### AWS Lambda for Auto Scheduler and Approval Functions
Now why are we using Lambda for Approvals? Approving requests like Vaccination verification, leave request and etc are a very one-off thing. We think it is an overkill to have a Fargate instance just for this functionality. For Auto Scheduler, it runs only once in a while (every week or every 2 weeks). In other words, its a time-driven function. Similarly, we do not require a container as a service just for this simple function.

### AWS Relational Database Service
RDS is used for both staging and production databases. For staging, it reduces the need for the Front End team to run all 3 databases and all 3 services on their local machine just to be able to integrate with the backend services. FYI, the Front End engineer still uses Intel Chip 🤷‍♂️. Backend engineers do not need to run migration on their local databases too.

For production, reasons like RDS being highly scalable, available and durable are the main reasons that we are using this service. We will also be launching read replicas to offload the master database and also acts as a failover plan when one database is unavailable. We are also able to shard the database logically using companies if we ever serve a company with large number of employees.

### AWS Cognito
AWS Cognito is used as service to manage our userpools, providing authentication and authorisation capabilities. We decided to use cognito as it provides us with industry standard security features such as OAuth 2.0, SAML 2.0, and OpenID Connect out of the box. It also provides us with an SDK to be used with the Sprintboot backend and the Javascript frontend, easing and speeding up the development process. 

AWS cognito stores a user pool for us, with the details of the user. Since it is stored and managed by AWS, we can be ensured that is is encrypted with industry standards and will be highly scalable. 

### AWS Amplify
AWS Amplify serves as a SDK provider, and a hosting service for the Nextjs React frontend. By using the Amplify SDK, we will be able to connect to AWS cognito and configured Lambda functions easily. AWS Amplify provides a CI/CD pipeline for its hosting service, and automates the generation and allocating of the SSL certification. These features would increase the security and the ease of the development and deployment of the frontend.

In the view of scalability, AWS Amplify comes packaged with AWS Cloudfront which is a Cloud Delivery Network (CDN) service. This would provide both performance and security to the web application. Performance is optimised with reduced latency and optimised querying of data due to AWS's large number of Points of Presence. Security is boosted the use of AWS Web Application Firewall and AWS Shield. They provide access control, and protect against potential DDoS attacks.