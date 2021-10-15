# Formatting Guideline
Note: These are just some recommended guideline for the engineers in order to standardize the coding conventions. It is up to the engineers discretion to practice these conventions as of when they see fit. 

## Formatting

### File Directories
**The most basic ones we having our `model`, `repository`, `service` and `controller` folders**

```sh
/src
├── main
    ├── java
        ├── csd.roster
            ├── controller
            ├── model
            ├── repository
            ├── service
...
```

**Security configuration files and helper files should be under security folder**
```sh
/src
├── main
    ├── java
        ├── csd.roster
            ├── controller
            ├── model
            ├── repository
            ├── service
            ├── security
                ├── configuration
                    ├── CognitoConfiguration.java
                    └── RosterServiceConfiguration.java
                ├── store
                    └── CognitoAccessTokenConverter.java
...
```

**Additional task files should be under task folder**
```sh
/src
├── main
    ├── java
        ├── csd.roster
            ├── controller
            ├── model
            ├── repository
            ├── service
            ├── security
            ├── task
                └── configuration
                    └── RandomTask.java
...
```
**Annotations and validators are in their own subdirectory.**
```sh
/src
├── main
    ├── java
        ├── csd.roster
            ├── annotation
            │   └── Annotation.java
            ├── controller
            ├── model
            ├── repository
            ├── service
            ├── security
            ├── task
            └── validator
                └── AttributeValidator
```

### Method Definition
Format:
```java
visibility return-type method-name(parameter-type parameter) {
    // comments
}
```

Example: 
```java
public boolean isValid(RosterEmployee rosterEmployee, ConstraintValidatorContext constraintValidatorContext) {
    // actual implementation
}
```