## Preview Questions 


1. Identified a problem or inefficiency in a process related to quality or development, and implemented a change to improve it

* Regression testing was delayed at first because we used a manual testing approach for functional, smoke, sanity, and regression testing. Presented this matter to the team, and all members agreed.hence offering some more recommendations, one of which was to use Cypress to introduce automation for UI and api testing.
* Because there were more than 500 test cases in HomeBazaar, the execution time took more than three hours. To reduce this time, parallel testing was introduced.Subsequently, the execution time was significantly shortened.Also for API testing used Api plugin get the Ui of Apis requests.


2. Made changes to prevent defects from occurring or improve the quality before reaching the testing stage

* I observed a recurrent problem where requirements ambiguities were causing miscommunications between the development team and stakeholders, which later in the process resulted in rework and defects. This was caused by unstructured and constantly changing requirements. I suggested creating an organised requirements collection and clarification procedure as a solution to this.To ensure that everyone engaged had a shared understanding, I also developed thorough documentation that outlined acceptance criteria and use cases for each feature.


3. Attempted to convince someone to change the way they were working, even though they didn’t want to

* When I saw that many team members on a recent project were accustomed to using selenium and would hesitate to move to cypress, I persuaded them by outlining the following benefits:Quick execution, simplicity of setup, automatic scrolling, when executing the test, and capturing screenshots. testing via a browser.

## Test Scenarios in Gherkin 

*Feature* : As a tester,I want to test the Home Page of Find Bugs website

*Background* :
Given User is on the "Home" page

*Scenario Outline* : Checking the functionality of the items on the header

Then User should see header on the page \
And User should see the logo on the left side of the header\
When User click on the "\<item>" on header\
Then User should redirect to page having "\<url>" url 

Examples:\
|item|url|\
|Logo|https://academybugs.com/|\
|Examples of Bugs|https://academybugs.com/|\
|Types of Bugs|https://academybugs.com/types/|\
|Find Bugs|https://academybugs.com/find-bugs/|\
|Report Bugs|https://academybugs.com/report-bugs/|

*Scenario*: Checking the functionality of the "QuestionMark" icon

When User click on the "QuestionMark" icon\
Then user should see "Tutorial" overlay\
When User Click on the "Start" button\
Then User should see "Examples of bugs" overlay\
And User should re-direct to "Examples of Bugs" page

*Scenario* : Checking the visibility of heading and subheading on the page

Then User should see "Find Bugs" heading on the page\
And User should see "Explore a practice test site that has 25\ real bugs planted inside." subheading

*Scenario*: Checking the functionality of the "product perpage" button

Then User should see "View" text\
And User should see "Showing all 18 results" text\
When User click on the "<50>" product perpage button\
Then User should see product cards displayed according to maximum number of products per page 

*Scenario Outline*: Checking the Functionality of the Sorting dropdown

And User should see "Default Sorting" in sorting dropdown\
When User selects "\<sortingOption>" in sorting dropdown\
Then User should see products according to the "\<SortingOption>"

Examples:\
|SortingOption|\
|Default Sorting|\
|Price:High-Low|\
|Price:Low -High|\
|Newest|\
|Oldest|

*Scenario*: Checking the visibility of product description items on cart

Then User should see the carts\
And User should see product image\
And User should see product Name\
And User should see product price\
And User should see "Add to cart" button

*Scenario Outline* : Checking the functionality of Add to Cart button

When User clicks on the "Add to Cart" button\
Then User should see "\<message>" message on product image

Examples:\
| message                                |\
| SUCCESSFULLY ADDED TO YOUR SHOPPING CAR| 

*Scenario* : Checking the functionality of select options button

When User clicks on the "Select Options" button\
Then User should redirect to item description page

*Scenario Outline*: Checking the functionality of items on footer

When User scrolls down to bottom of the page\
And User clicks on the "\<Footer element>"\
Then User should redirect to corrosponding page

Examples:\
| footer element|\
| Utest logo |\
| Terms & Conditions|\
| Privacy Policy |


## Configurations

Cypress version :13.7.1\
Node :18.16.0\
npm :9.5.1\




## Steps to Run Locally

1. On Terminal run command - git clone git@github.com:PanditNisha/QA_Assignment.git
2. On Terminal run command -Code .
3. On Vs Terminal run command - npm install
4. Open cypress window using command - npx cypress open

#### It will open the cypress window, configure the E2E testing and download the Default structure of cypress.

## DOCKER

### Pre-requisite

Install Docker

### Steps to run docker locally 
1. On Terminal run command - docker pull cypress/included:latest
2. On Terminal run command - docker images
3. docker run -it --entrypoint=cypress cypress/included:latest info
4. docker ps -a 
5. docker run -it -v "%cd%":/e2e -w /e2e cypress/included:latest --spec cypress/e2e/ --browser chrome

### Steps to run docker
1. Start the web application and run Cypress tests with npm run up

