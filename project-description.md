
```
 __        ___  ___       __             __  
/  \ |  | |__  |__  |\ | /__` |     /\  |__) 
\__X \__/ |___ |___ | \| .__/ |___ /~~\ |__) 
```
**Evaluation Assignment - Fullstack**
============

**Part 1 - Map Draw [Frontend focus]**
------
**Develop a backend + frontend solution that allows users to draw lines on a map of Gothenburg, Sweden.**

The UI should have

- One Map (may be a 3rd party map)
- One input field with a placeholder ‘DEGREES’, that only allow numbers in a degrees format
- One button ‘MOVE’
- One button ‘SAVE’
- A list of saved patterns below the map.

1) Pressing the ‘MOVE’ button should draw a 20px long line in the direction
   specified in the input field. (Pressing ‘MOVE’ again should continue drawing 
   the line from the end of the previous one)
   
2) Pressing the ‘SAVE’ button should save the pattern on the map in an
   appropriate format on the backend and display it in the list of patterns
   
3) Structure your code an add QA according to your own Definition of Done.

Keep it simple.
Try to ship as few bugs as possible. Focus on a minimal usable interface.
Functionality takes priority over design.

Allowed technologies: .NET Core, Python, NodeJS, React, Vue.js, Angular 2+,
SCSS, SASS, LESS, PostCSS, CSS, HTML5, Vanilla JS.

**Part 2 - Pricing calculator [Backend focus]**
------

**Background**

Company X provides a service,  _The Super Awesome Service_ to other companies in the region. Your job is to develop a Web API within a micro-services solution that is solely responsible for calculating prices and should only be called by other services, not humans. There are three types of services; _Service A_, _Service B_ and _Service C_. These services have different prices and they also depend on the customer, the time period for which they are charged, possible discount (Percentage of total price), free days (a type of discount based on number of free days). Customers can choose which service they want to use independently.

The user story is: **_As a calling service it should be possible to call an endpoint with customerId, start and end in PricingService to know what to charge for a specific customer_**

Build this Web API (PricingService) with appropriate endpoints and implement the following requirements:

- Base costs are as follows:
    - _Service A_ = € 0,2 / working day (monday-friday)
    - _Service B_ = € 0,24 / working day (monday-friday)
    - _Service C_ = € 0,4 / day (monday-sunday)

- Make sure it is possible to override base prices per customer (e.g. _Customer A_ only pays € 0,15 per working day for _Service A_ but pays € 0,25 per working day for _Service B_)

- Make sure it is possible to store discount per Customer and service
- Make sure it is possible to store Customer start date per service 
- Make sure it is possible to store number of free days per Customer (affects all services)

Use appropriate methodology to test the following scenarios;

- _Customer X_ has been a customer since 2019-09-20 and has been using _Service A_ and _Service C_. _Customer X_ has had an active disctount of 20% between 2019-09-22 and 2019-09-24 for _Service C_. What is the total price for _Customer X_ up until 2019-10-01 ?

- _Customer Y_ has been a customer since 2018-01-01 and has been using _Service B_ and _Service C_. _Customer Y_ should have 200 free days and a discount of 30% for the rest of the time. What is the total price for _Customer Y_ up until 2019-10-01 ?

Allowed technologies: .NET Core, Python, NodeJS.

**Part 3**
------

Open the appended project (AvCalc), analyze the code and respond to the following:

- What do you believe are the requirements for this project?
- Is there anything missing?
- Is there anything you would have done differently?

Good luck!
(｡◕‿◕｡)