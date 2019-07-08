
## Feed Reader Testing in Jasmine.js
This is a project to test a feedReader code in Jasmine.js. 

## How to Run the Application

* You can download or clone this repository.

* Find the `index.html` file, and open the file in a modern browser.

* The Jasmine tests are displayed at the bottom of the index.html page. 

* Open the `jasmine/spec/feedrader.js` file to start editing the test suites.

## About the test

* Edit the `allFeeds` variable in `app.js` to make the provided test fail

* Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty
 

* Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty
   
* Write a new test suite named `"The menu"`
   
* Write a test that ensures the menu element is hidden by default
    
* Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display itself when clicked, and does it hide when clicked again
    
* Write a test suite named `"Initial Entries"`
   
* Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container
   
* Write a test suite named `"New Feed Selection"`
   
* Write a test that ensures new feed is loaded by the `loadFeed` function that the content actually changes
    
	
	
	


