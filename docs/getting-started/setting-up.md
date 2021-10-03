---
sidebar_position: 1
---

# Roster Service

## Dependencies
* PostgreSQL
## Setting up the service

### Dependencies
1. Git clone this repository into your preferred directory.
2. Open [IntelliJ](https://www.jetbrains.com/idea/)
   1. Go to Files > New > Project From Existing Sources...
   2. Choose the roster-service folder that you just cloned. 
   3. Select ```Import project from External Model``` option and select ```Maven```
3. IntelliJ should start setting up the dependencies for this service.

Note: Open ```pom.xml``` in the root folder and check that all dependencies are not throwing error.

If you see a red highlighted version number under this dependency, restart your IntelliJ and open this project again.
```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.5.4</version>
    <relativePath/> <!-- lookup parent from repository -->
</parent>
```
### Application Properties
```properties
server.port=8080

spring.jpa.database=POSTGRESQL
spring.datasource.url=jdbc:postgresql://${DATABASE_URL}:${DATABASE_PORT}/${DATABASE_NAME}
spring.datasource.username=${DATABASE_USERNAME}
spring.datasource.password=${DATABASE_PASSWORD}

spring.jpa.show-sql=true
spring.jpa.generate-ddl=true
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true 

#aws
aws.access-key=${AWS_ACCESS_KEY}
aws.access-secret=${AWS_SECRET_KEY}
aws.default-region=${AWS_REGION}

#cognito user pool
aws.cognito.clientId=${COGNITO_CLIENT_ID}
aws.cognito.userPoolId=${COGNITO_POOL_ID}
aws.cognito.region=${AWS_REGION}
aws.cognito.connectionTimeout=2000 
aws.cognito.readTimeout=2000
aws.cognito.jwk = https://cognito-idp.${AWS_REGION}.amazonaws.com/${COGNITO_POOL_ID}/.well-known/jwks.json

#spring security integration with cognito
spring.security.oauth2.resourceserver.jwt.issuer-uri=https://cognito-idp.${AWS_REGION}.amazonaws.com/${COGNITO_POOL_ID}
security.oauth2.resource.userInfoUri=https://${COGNITO_DOMAIN}.auth.${AWS_REGION}.amazoncognito.com/oauth2/userInfo
security.oauth2.resource.tokenInfoUri=https://${COGNITO_DOMAIN}.auth.${AWS_REGION}.amazoncognito.com/oauth2/token
security.oauth2.resource.jwk.key-set-uri=https://cognito-idp.${AWS_REGION}.amazonaws.com/${COGNITO_POOL_ID}/.well-known/jwks.json
security.oauth2.client.clientId=${COGNITO_CLIENT_ID}
```
**Environment Variables:**

| Variables             | Description                                                                          |
| --------------------- | ------------------------------------------------------------------------------------ |
| **DATABASE_URL**      | This would be your localhost url, for MacOS users you can use `host.docker.internal` |
| **DATABASE_NAME**     | Your PostgreSQL database name                                                        |
| **DATABASE_PORT**     | The port on your PostgreSQL database your are connecting to                          |
| **DATABASE_USERNAME** | Your PostgreSQL database username                                                    |
| **DATABASE_PASSWORD** | Your PostgreSQL database password                                                    |
| **AWS_ACCESS_KEY**    | Your AWS IAM user Access Key                                                         |
| **AWS_SECRET_KEY**    | Your AWS IAM user Secret Key                                                         |
| **AWS_REGION**        | The region your Cognito User Pool is in                                              |
| **COGNITO_CLIENT_ID** | The Cognito User Pool Client ID                                                      |
| **COGNITO_POOL_ID**   | The Cognito User Pool  ID                                                            |