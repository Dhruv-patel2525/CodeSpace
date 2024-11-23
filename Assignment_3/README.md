Auth Module:
The auth module sets up the authentication module and its dependencies. The following list is displayed below: 
	Registers the AuthService and AuthController.
	Integrates the UsersModule to fetch user data for authentication.
	Configures the JwtModule with a secret and token expiration time.
	Includes ConfigModule for managing environment variables.
	Example setting: Tokens are signed with process.env.secret and expire in 1 hour.
	The commented-out APP_GUARD section suggests plans to apply the AuthGuard globally.
 
Auth Controller
•	Purpose: Acts as the entry point for handling authentication and user registration requests, delegating the core logic to the AuthService.
•	Key Endpoints:
	POST /auth/login:
	Allows users to log in by providing their email and password.
	Accepts a JSON payload:
{ "email": "user@codespace.com", "password": "testpwd" }
	Delegates validation and token generation to AuthService.authenticate.
	Output:
o	A JWT token if the credentials are valid.
o	An error response (UnauthorizedException) for invalid credentials.
•	POST /auth/registerUser:
	Enables new users to register by providing their details through a SignupDto.
	Accepts a JSON payload:
{
"email": "user@codespace.com",
"password": "abc",
"name": "Vishwa Raman",
"role": "Learner"
}
	Delegates user creation to AuthService.registerUser.
	Output:
o	Confirmation of successful registration with the created user details.
o	Error messages for validation failures or conflicts (e.g., duplicate email).
•	Example Use Cases:
o	Login Workflow:
	Input: { "email": "user@example.com", "password": "password123" }
	Output: { "accessToken": "jwt-token", "userId": 1, "email": "user@example.com" }
o	Registration Workflow:
	Input: SignupDto payload with user details.
	Output: Success message or error for invalid input.
 
Auth Service: 
•	Purpose: Provides core authentication functionality, including user validation, token generation, and registration.
•	Key Methods:
authenticate:
	Validates the user's credentials.
	If valid, generates and returns a JWT token.
	Throws an UnauthorizedException for invalid credentials.
     validateUser:
	Checks if a user exists based on the provided email using the UsersService.
	Verifies the password using bcrypt.compare.
	Returns user details (userId, email, role) if validation is successful.
	Returns null for invalid credentials.
    signIn:
	Generates a JWT token with a payload containing:
	sub: User ID.
	username: User email.
	role: User role (e.g., Admin, Learner, Coder).
	Returns the generated token along with user details.
  registerUser:
	Handles user registration by delegating to the UsersService.createUser method.
	Accepts a SignupDto containing user details.
Types Used:
	AuthInput: Represents login input (email, password).
	SignInData: Represents validated user data (userId, email, role).
	AuthResult: Represents the response of a successful login (accessToken, userId, email).
	CurrentUser: Represents user context (userId, roles).
•	Example Workflows:
•	Login:
	Input: { email: "user@codespace.com", password: "testpwd" }
	Output: { accessToken: "jwt-token", userId: 1, email: "user@codespace.com" }
•	Registration:
	Input: User details from SignupDto.
	Output: Newly created user record.
•	Integration:
	Relies on UsersService for user data and password handling.
	Uses JwtService for token signing.

 

Auth Guard
Auth Guard enforces authentication by validating JWT tokens in incoming requests.
Functionality:
•	canActivate Method:
	Intercepts incoming requests to check for a valid JWT token in the Authorization header.
	If the token is absent or invalid, it throws an UnauthorizedException.
	On successful validation, it decodes the token payload using JwtService and attaches it to the request.user for use in subsequent processing.
•	extractTokenFromHeader Method:
	Extracts the token from the Authorization header.
	Ensures the header follows the Bearer <token> format.
	Includes logging statements (e.g., log(payload)) to assist with debugging.
Example Workflow:
	Input: A request with the header:
Makefile
Authorization: Bearer <jwt-token>
•	Output:
o	If the token is valid:
	The payload (e.g., { sub: userId, username: email }) is attached to request.user.
	The request proceeds to the next handler.
o	If the token is invalid or missing:
	Throws UnauthorizedException with a 401 Unauthorized response.
 
Roles Guard 
•	Purpose: Enforces role-based access control (RBAC) by ensuring that only users with the required roles can access specific routes or handlers.
•	Key Features:

1.	Role Validation:
	Retrieves the roles required for a route or handler using the Reflector and custom ROLES_KEY metadata.
	Checks if the authenticated user's role matches any of the required roles.
2.	Guard Logic:
	If no roles are specified (requiredRoles is undefined), it allows unrestricted access.
	If roles are defined, it verifies that the user's role includes one of the required roles.
•	Key Method:
o	canActivate:
	Extracts the required roles for the current route or handler using Reflector and the custom ROLES_KEY.
	Extracts the user object from the request.
	Checks if the user's role matches any of the required roles using some().
•	Example Workflow:
o	A route is decorated with a Roles decorator specifying required roles, e.g., @Roles(UserRole.Admin, UserRole.Learner).
o	The guard intercepts the request:
	Extracts the required roles ([Admin, Learner]).
	Retrieves the authenticated user’s role from request.user.role.
	Allows access if the user’s role matches (Admin or Learner); otherwise, denies access.
•	Example Input/Output:
o	Input:
	RolesGuard checks for @Roles(UserRole.Admin) on a route.
	The authenticated user has role: 'Admin'.
o	Output: The request is allowed to proceed.
o	If the user’s role doesn’t match, the request is denied.
•	Integration:
o	Works with a custom Roles decorator to define required roles on specific handlers or controllers.
o	Relies on AuthGuard to ensure the user is authenticated before performing role checks.
•	Example Use Case:
o	Protecting an admin-only route:
typescript
@UseGuards(AuthGuard, RolesGuard)
@Roles(UserRole.Admin)
@Get('admin/dashboard')
getAdminDashboard() {
  return 'Admin Dashboard';
}
 
Roles Decorator 
•	Purpose: Defines role-based access control by attaching required roles to routes or handlers.
•	Key Features:
o	Uses SetMetadata to associate roles with the ROLES_KEY constant.
o	Accepts one or more roles as arguments and stores them as metadata.
 

