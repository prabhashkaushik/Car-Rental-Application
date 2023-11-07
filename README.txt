Car Rental Application Readme

#Overview
This readme provides an overview of the Car Rental Application, including the tools required, the problem statement, and essential features. It also covers bonus functionality and instructions for getting started with the application.

#Tools Required
1)To work on and run the Car Rental Application, you will need the following tools:
2)Visual Studio 2022: Integrated development environment (IDE) for building the application.
3)Visual Studio Code: Optional but useful for code editing and management.
4)SQL Server Management Studio: Required to manage the application's database.
5)Git: Version control system for code management.
6)Google Chrome / Mozilla Firefox: Web browsers for testing the application.

#Problem Statement
The Car Rental Application aims to create a platform that allows both regular users and admin users to interact with the system. Users can rent cars, search for available cars, and manage their rental agreements, while admin users have additional functionalities for managing cars and rental agreements.

#Must-Have Features
##Regular User Flow
1)Login: Users should be able to log into the application using valid credentials.
2)Search for Cars: Regular users can search for available cars based on filters like Maker, Model, and Rental Price.
3)Display Car List: The system should display a list of cars that match the user's search criteria.
4)Select and Specify Rental Duration: Users can select a car from the list and specify the rental duration.
5)Generate Rental Agreement: Once the rental duration is provided, the system generates a rental agreement containing car information, rental duration (in days), total cost, and user details.
6)View Rental Agreements: Users can view all their rental agreements in the "My Rental Agreements" tab.
7)Edit Rental Agreement: Users can edit rental agreement details before accepting it.
8)Accept Rental Agreement: Once the user accepts the rental agreement, it cannot be edited or deleted.
9)Request for Return: If the user wants to return the rented car, they can mark it as "request for return."

#Admin User Flow
1)View Rental Agreements: Admin users can view all the rental agreements.
2)Update/Delete Rental Agreements: They have the authority to update or delete any rental agreement.
3)Inspect Returned Cars: Admin users can validate all cars marked as "request for return" for conducting an inspection.
4)Mark Car as Returned: Once the inspection is completed, the admin can mark the car as returned.

#Additional Notes
1)The system should update the availability status of the car once it is rented or returned.
2)Signup functionality is not required. Add regular users and Admin user data into the database directly using the seed method.
3)Both Admin and regular users can log in using email and password.
4)Add car details either using admin user (Bonus question) or using seed method.

#Bonus Functionality
1)Allow the admin user to add new cars to the inventory, including car details and rental price.
2)Admin users have additional functionalities for managing the car inventory, including updates and deletions.

#Getting Started
1)Dowbload the Zip file from given link.
2)unzip the same
3)Open the CarRentalAppUI project in Visual Studio  code .
4)Open the CarRentalApp project in Visual Studio .
5)import the CarRentDB file using SQL Server Management Studio.
6)Start the application, and you can access it through Google Chrome or Mozilla Firefox.


NOTE : for accessing the admin fuctionality Enter the Secret URL: http://localhost:4200/123/admindashboard