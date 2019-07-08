/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that 
         * allFeeds variable has been defined and they are not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
		
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loops through each feed
         * in the allFeeds object and ensures each feed has a URL defined
         * and that the URL is not empty.
         */

        it('should have all feeds url defined and not to be empty', function () {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
			});
		});


         /* Loops through each feed and ensures each feed has a name defined
         * and the name is not empty.
         */
		
        it('should have all feeds name defined and not to be empty', function () {
         allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


  /* Describe test suite  "The menu" */
	
    describe('The menu', function () {

        var Body = $('body'),
            menu_button = $('.menu-icon-link');

        /* This test ensures the menu element is hidden by default. 
         */
		
		
        it('should hide the menu by default', function () {
            expect(Body.hasClass('menu-hidden')).toBeTruthy();
        });

        /* A test that ensures the menu changes
          * This test has two expectations: visibility when    *the menu icon is clicked, display the menu when
          * clicked and hide when click again.
          */
		
        it('should show menu when click the menu icon link and hide the menu when click again', function () {
            menu_button.click();
            expect(Body.hasClass('menu-hidden')).toBeFalsy();

            menu_button.click();
            expect(Body.hasClass('menu-hidden')).toBeTruthy();
        });

    });


   /* Describe new test suite "Initial Entries" */
	
      describe('Initial Entries', function(){
    
         beforeEach(function (done) {
             loadFeed(0, done);
		 });
       

        it('should loadFeed and render the entry and feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });;


     /* Describe new test suite "New Feed Selection*/
	
    describe('New Feed Selection', function () {
        var oldFeed;

        beforeEach(function (done) {
            // load old feed
            loadFeed(0, function () {
                oldFeed = $('.feed').html();

            // Load new feed
            loadFeed(1, function () {
                    done();
                });
            });

        });
        
	/* Write a test that ensures when new feed is loaded */
		
        it('should load new feed', function() {
            expect($('.feed').html()).not.toBe(oldFeed);
        });
    });

}());