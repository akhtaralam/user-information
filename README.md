# UserInformation
  This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.
# Installation Steps
Step 1: Prerequisites for an angular project
        Angular CLI
        Node.js
        Visual Studio Code
Step 2: To check if Node.js is already installed on your machine, check for its version using the following command. If it is already installed, it will return the             version number.  
        For Node.js: Node -v
Step 3: Similarly, check whether the npm and Angular CLI are already installed with the following command to check the version.
        For NPM: npm -v
        For Angular CLI: ng version
Step 4: If they aren’t installed, install them with the details below
        Node.js: https://nodejs.org/en/download/
        Npm: If you install node.js, it will install npm, too
        Angular CLI: Run the following command- npm i @angular/cli

#Building the Application
Step 1: Create a new project named as user-information with the following command which will create a boiler plate code which will have default main/root component             which is AppComponent-
        ng new user-information
Step 2: Navigate to the folder where all the files will be residing inside that folder with the following command-
        cd user-information
Step 3: Create the components inside a folder named Components as required with the following command-
        ng g c componentName
        In this project, created 4 different components namely:
        UserInfoComponent, AboutUsComponent, ContactComponent and NotFoundComponent treating the AppComponent as the home page for this project which will have three           menus on the navigation bar as User Information, About Us and Contact along with the Current date on the very right of the navigation bar
Step 4: In the index.html, made use of the bootstrap cdn link which is used as the CSS framework
Step 5: In AppComponent-
        In the app.component.ts file, implemented the javascript concept to get the current date in every 1ms
        In the app.component.html, implemented the bootstrap for the html view to get the navigation bar along with the current date
Step 6: Setup the app-routing.module.ts for the navigation by creating the const array of routes where implemented the routing navigation as required
Step 7: Create a service named as UserInfoService inside a folder Services to implement the http logic with the following command:
        ng g service serviceName
Step 8: Add the Service to the Providers array of app.module.ts making it available for the entire project to share the logic across the components
Step 9: Import HttpClientModule and add it to the imports array of app.module.ts 
Step 10:In the UserInfoService
        In constructor's parenthesis create the instance of HttpClient to make use of the http verbs
        Create a method 'getUsers()' to make an http call
Step 11:In UserInfoComponet
        In user-info.component.ts: Make use of the dependency injection and create the instance of UserInfoService to use the methods created inside the service,
        Create a method 'getUserDetails()' which will return an observable and has to be subscibed and storing the data to a variable 'userInfo' of type 'any' and also         logging it on the console.
        In user-info.component.html, create a bootstrap table and render the data in a tabular format with the help of a structural directive *ngFor
        
#How to run the Application Locally
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
