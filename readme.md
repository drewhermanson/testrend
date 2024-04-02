# EventTracker
 

 ## Summary

 This application is a database that helps a company store team member data that is related to documentation, enabling them to easily record and access any team member infractions. This application has the ability for both a member of management as well as team members to be able to log in and view these infractions. However, let it be noted that the team members will only be able to access their personal documentation data. Managers will be able to view the data from all the team members. 

## Packages
 The event tracker utilizes several different packages in order for it to run. 
 * bootstrap
 * passport npm
 * postgres
 * handlebars

 we use the **postgres** to handle all of the data. storing it in the database for easy retrival by the user through the deployed interface. we use the **passport npm** to create the log in key. that is what separates the employees from being able to see what the managers see. **handlebars** are what we are using to give you the separate pages that you see when you are clicking the links in the nav bars. and last but not least **bootstrap** is what we are using to make our page have nice organization and make it easy for the user to be able to navigate the page.

 ## How to use
  When you first access the page you have the option to log in or sign up. any first time user will need to sign up to create their account in the database. This means, as an employer, it would be part of the hiring process to get the employee signed up to ensure smooth functionality down the road. 

  Once you have finished the sign up process, you will need to log in to access any of your data. We will do separate walk throughs to show the flow for each level of employee to show how to access and use the data.

  ### **MANAGER**
  Manager functionality give you the opportunity to create the write ups and see any of the pending documentations that need to be acknowledged by the employee.

   ** [VIDEO WALK THROUGH] **

  ### **EMPLOYEE**
  The employee functionality gives you the opportunity to view the documentation that you have been given, provide a comment on the incident, and then acknowledge the documentation was delivered to you.

  ** [VIDEO WALK THROUGH] **

 ## Licenses and Credits
This application was created by Drew Hermanson, Another Rodriguez-Ortiz and Caryn Behnke. Any questions, comments, concerns, or ideas for improvement please feel free to reach out to Behnke.ca@gmail.com

## Link to deployed application

https://eventtracker.onrender.com

## Link to github repository

https://github.com/Magicaryn/EventTracker