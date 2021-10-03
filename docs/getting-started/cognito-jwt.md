---
sidebar_position: 2
---

# Cognito JWT

## Services required
* **Python** to run the script

## Usage
1. Clone the [cognito-python](https://github.com/CS203-G1/cognito-python) repository
2. You should see `cognito-opt.py` script in the repository.
3. Set up the script as per instructed in the Set Up instructions below.
4. Run `python cognito-opt.py` or `python3 cognito-opt.py`.
5. You should get options as such in the terminal:

    ```sh
    What do you want to do?
    1. Get user
    2. Change password
    3. Authenticate and get token 
    ```
   1. Check that your user exists in Cognito User Pool
   2. If you have just created a new user, you should select option 2 and change password. For security reasons, we have mandated users to reset their password before they can access their account.
   3. Select option 3 if you want to get a JWT token

## Using the JWT in IntelliJ `.http` files
Replace the `<JWT>` field with the Access Token obtained from Step 5(iii):
``` http
GET api/work-locations/{work-location-id}/rosters
Content-Type: application/json
Authorization: Bearer <JWT>
```

Note: Refer to Roster Service API documentation to check which roles are authorized to access which APIs.