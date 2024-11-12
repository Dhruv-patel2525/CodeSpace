Project Overview
This document provides a comprehensive overview of the user authentication and profile management API. 
Each endpoint is documented with its path, HTTP method, expected JSON request format, response format, and a brief description of the backend logic.


API Endpoints
1.	Register User 
	Description: Registers a new user by collecting all the details and storing it in database.
	Endpoint: /auth/registerUser
	Method: POST
	Sample JSON data

{
  "name": "Vishwa",
  "email": "abc@gmail.com",
  "role": "Learner",
  "password": "newLearner"
}

2.	Login User 
	Description: Checks if the user email is present in the database and return login successful message if not throws an error message.
	Endpoint: /auth/loginUser
	Method: POST
	Sample JSON data

{
 "email": "abc@gmail.com", 
"password": "newLearner" 
}

3.	Logout User 
	Description: Logs the user out of the system.
	Endpoint: /auth/logoutUser
	Method: POST
	Request Body: None


4.	Forgot Password
	Endpoint: /auth/forgotPassword
	Method: POST
	Description: Sends an email with a password reset link.
	Sample JSON data

{ "email": "abc@gmail.com" }




5. Request Password Reset

	Endpoint: /auth/requestPasswordReset
	Method: POST
	Description: Generates a password reset token for the user.
	Sample JSON data
{ 
"email": abc@gmail.com
 }

6. Reset Password
	Endpoint: /auth/resetPassword
	Method: POST
	Description: Resets the password using the reset token.
	Sample JSON data
{ 
"resetToken": "unique-reset-token", 
"newPassword": "newPassword123" 
}

7. Get User Profile
	Endpoint: /auth/profile
	Method: GET
	Description: Retrieves the user’s profile based on the userId.
	Query Parameter:
o	userId: The ID of the user whose profile is requested.
GET /auth/profile?userId=6727c93e06f617eb7b9092fa

8. Update User Profile
	Endpoint: /auth/profile
	Method: PUT
	Description: Updates user profile information.
	Query Parameter:
o	userId: The ID of the user to update.
       {
  "userId": "6727c93e06f617eb7b9092fa",
  "updateUserProfileDto": {
    "name": "Updated Name",
    "bio": "Updated bio here",
    "avatarUrl": "https://example.com/avatar.jpg"
  }
}




Course Management

1. Get All Courses
	Endpoint: /courses
	Method: GET
	Description: Retrieves a list of all courses.
	Sample JSON data
{ 
    "title": "Dijkstra's Algorithm",
   "description": "Graph algorithms", 
    "duration": "2 hours" 
}
2. Create New Course
	Endpoint: /courses
	Method: POST
	Description: Creates a new course.
	Sample Request:

{
  "title": "Dijkstra's Algorithm",
  "description": "Graph algorithms",
  "duration": "2 hours"
}

3. Get Single Course by Code
	Endpoint: /courses/:courseCode
	Method: GET
	Description: Retrieves course details by course code.

4. Update Course by Course Code
	Endpoint: /courses/:courseCode
	Method: PUT
	Description: Updates details of an existing course based on courseCode. This is typically used when an instructor wants to modify course information.
	Sample JSON Request

{ 
"title": "Updated Algorithms",
 "description": "Updated description for advanced algorithm design.",
 "duration": "5.5 hours" 
}







5. Delete Course by Course Code
	Endpoint: /courses/:courseCode
	Method: DELETE
	Description: Deletes a specific course based on courseCode. This endpoint is used when an instructor or administrator wants to remove a course.
	DELETE /courses/CS103


Problem Management

1. Get All Problems
	Endpoint: /problem
	Method: GET
	Description: Retrieves a list of all problems.

2. Get a Single Problem by ID
•	Endpoint: /problem/:id
•	Method: GET
•	Description: Retrieves detailed information about a specific problem based on its unique id.

3. Create New Problem
	Endpoint: /problem
	Method: POST
	Description: Creates a new problem.
	Sample Request:

{
  "title": "Binary Search Problem",
  "difficulty": "Medium"
}

4. Update Problem by ID
	Endpoint: /problem/:id
	Method: PATCH
	Description: Updates details of an existing problem based on its id. This is typically used when an instructor wants to modify problem information.
	Sample JSON Request

 { 
"title": "Updated Problem Title", 
"description": "Updated description for the problem.", 
"difficulty": "Medium" 
}

5. Delete Problem by ID
•	Endpoint: /problem/:id
•	Method: DELETE
•	Description: Deletes a specific problem based on its id. This endpoint is used when an instructor or administrator wants to remove a problem.


Submission Management

1. Submit Solution
	Endpoint: /submissions
	Method: POST
	Description: Submits a solution to a problem.
	Sample Request:
{
  "userId": "12345",
  "problemId": "67890",
  "solution": "Code for solution here"
}

2. Get Submission Result
	Endpoint: /submissions/:submissionId
	Method: GET
	Description: Retrieves the result of a submission.
	Sample Response:
{
  "submissionId": "submission123",
  "status": "Success",
  "score": 95
}
