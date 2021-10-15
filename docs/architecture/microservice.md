---
sidebar_position: 2
---

# Microservice Pattern

## Why Microservices

For our solution, we are using the Microservice Pattern instead of Monolithic Pattern. Main reasons are as below:
- Separation of Concerns 
- Highly maintainable and testable
- Independently deployable
- Scalable

### Separation of Concerns
Our solution consists of a few parts - rostering, analytics and guidelines. While this can be easily done in a monolithic architecture, it is more logical to just separate three of them since they can be developed independently, where the progress is not hindered by each other. The idea is to have a few loosely coupled services to minimize the impact between them.

### Highly maintainable and testable
With separated concerns and responsibilities, each component is very modularized. In a sense, each software component only needs to take care of only one functionality. With this, our engineers are able to easily identify what went wrong if and when, making it easier for us to maintain the software.

### Independently deployable
With agile processes, continuous interation and increment are the main software process for our solution development. As the services are highly loose coupled, we are developing each of them independently, then deploying them independently. With this, we can even version our backend services separately as some require increments while others do not.

### Scalable 
This actually goes hand in hand with previous point - independently deployable. For Sprint 1 and 2, we deployed roster service, while analytics and scraper services are not launched yet. Then we will be launching them accordingly in time to come. As we want to add features, we can easily develop another microservice for that, since new features unlikely to be related to the existing services unless they are an upgrade of previous feature. 

Another plus point is that we are able to develop microservices in different frameworks depending on use case. For example, if we were to need to have a indexing service for whatever reason in the future, we could develop the indexing service in Rust instead of adding to the Spring Boot monolithic service. 
