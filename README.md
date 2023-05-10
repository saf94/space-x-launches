# Space X Launches Website

## Description
This project involves setting up a React app that can call the Space X graphql api to retrieve a list of past rocket launches and display them.

This project involved 3 main elements, setting up the request to the graphql api, displaying content on the page, styling the page. And then writing unit tests as well.

### Code organisation

I organised the code by the page content into a component, this is the `Launches` component. I put code into folders where it would separate things in a logical way, so all the code related to the Launches component (the tsx file, the css file and the test file), would go in one folder. The graphql queries would go in another folder (in future, mutations, fragments etc too). General test and mock files in their own folder and content files (in this case fonts) in their own folder. In this way it separates out code with different responsibilites and brings things together which belong to a similar topic. 

In the future as the app grows I would likely split the components folder by pages and components where smaller components would make up pages and those would go in their own folder and each component for the overall page would go in the pages folder.

### Graphql Requests

For making graphql requests I installed and setup the Apollo Client library. It's one of the most widely used and mature libraries for making graphql requests and has a nice usage of modern React patterns (eg hooks) to easily handle making graphql requests.

### Styling and layout

For styling I just used basic css files. In the future of this project it may become useful to explore other approaches such as css in js libraries or CSS modules to scope styles locally. Definitely those would be useful in a larger project but at the start it didn't seem necessary and is something that can be added later on once there's a use case for it.

### Unit testing

The main effort here was mocking the graphql requests being made. For this I used a library called Mock Service Worker (msw), this is a tool that intercepts all http requests and returns a mocked response. This has the great benefit of meaning you are mocking much less of your code, you don't have to mock out apollo or any functions, in fact you make your graphql requests completely as you would in your code. I really prefer this because it makes your unit tests more representative of your actual code and therefore more robust.

## What I would do next
There were some things I couldn't get done in time
- Setup codegen to automate generating types for the graphql queries, I had a bit of a go, ran into an issue so had to scrap the attempt due to time
- Handle unhappy paths in unit tests, likewise to the above point, I had a bit of an issue getting my mocks for the errors to work with the msw tool, so I had to scrap the effort
- Styling, I designed a very basic page however it would of course benefit from a lot more design effort, some thoughts on this
    - The page is just one long list, it could either be broken up (eg by year)
    - The list is just returned in the order it is receieved from the api, it could be sorted, especially as you may want to see most recent first
    - Design could be made more exciting and play on the theme of rocket launches with imagery and other such things


