# boston-employees
This is a coding exercise for a job interview. It is to enable the querying of the Boston Employees Earnings Report to get an average income for each employee by job title.

I have implemented it in JavaScript using AngularJS and Bootstrap, as I do not have a local machine ready to implement a solution in a light-weight engine like Paster; I have generally done home development for PHP in Drupal for websites, or various other non-web projects such as Arduino.

The home page, index.html, should be loadable by default, and load the AngularJS framework automatically. I utilized the Bootstrap framework which has an optional JS library as well, which is dependent on JQuery. For those unfamiliar with the AngularJS framework, it defines a number of non-HTML attributes in the .html file and associates Javascript code with those HTML tags as behaviors, in MVC pattern fashion, where the HTML constitutes the Model and the Javascript functions defined in taikametrics.js constitute the Controller. Upon first load, the system queries the Boston Employees Earnings Report API through its RESTful interface to get a list of the titles available. This list is assigned to a variable, which is bound through the AngularJS event system to a Select list. The list is sorted alphabetically in the HTML file.

Upon selection of a job title, the Boston Employees Earnings Report is queried for the average total_earnings of that job title, and that value is assigned to a variable bound to display below the selection box.

Due to time constraints, various exceptional conditions are not implemented, such as a waiting screen preventing the user from inputting values before the job title list is loaded, and connection problems to the Boston city government computers.
