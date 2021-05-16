- [Assignemnt Description](#Assignment-description)
- [Solution](#Solution)
  - [High Level Requirement](#High-Level-Requirement)
  - [Tech Stack](#Tech-Stack)
  - [Development](#Development)
    - [Folder Structure](#Folder-Structure)
    - [Running the app](#Running-the-app)
    - [State Management](#State-Management)
    - [Storybook](#Storybook)
    - [Stubbing](#Stubbing)
  - [Testing](#Testing)
    - [Running The Test](#Running-The-Test)
  

# Assignment description
# Front-end Engineer Pair Programming Exercise

### Preface

At Qudini we utilise a range of front-end technologies which make up our stack. We're evolving our existing and greenfield applications to make use of a more modern set of technologies. We make use of React on both the web with React-DOM and on mobile devices using React-Native.

This exercise is intended to give you an idea into the technology stack we're currently using along with experiencing the domain we apply these technologies towards. This is not seen as a test and there are no right or wrong answers, we're open to your ideas and opinions in regards to how you feel the below problem could be best solved.

### The exercise

Within this repository you will find a project created with create-react-app, some of the features have been partially implemented however we would like you to revisit them and complete the implementation.

The new Queues screen feature should have the following capabilities:
- Ability to list the current customers within a Queue.
    - This has been partially implemented.
- Make a request to the Qudini API and display the list of customers along with their expected time.
    - A <Customer /> component was created by the previous engineer which you can use to render the content.
- Fetch the profile image of the customer using the Gravatar Image request API ( https://en.gravatar.com/site/implement/images).
- Ability to filter the list of returned customers using a text component above the list.
- Ability to refresh the list of customers every 30 seconds. 

We would like to see the following practised within the implementation:
- TDD / BDD
- Test coverage applied where needed.
- Some form of state management.

#Solution

## High Level Requirement
- Given as a user <br/>
  When I open the application <br/>
  Then I can be able to see list of customers queued for today on the page<br/>
- Given as a user <br/>
  When I see list of customers queue on page <br/>
  And I try to search using search input <br/>
  Then I can be able to see customers whose name matches ith input <br/>
- Given as a user <br/>
  When I open the application <br /> 
  Then customers queue list should be refreshed in 30 secs
  
##Tech Stack
  Below are required  libraries are used as part of project
 
  - Major Project dependencies
      - [react](https://reactjs.org/)
      - [react dom](https://reactjs.org/)
      - [redux](https://redux.js.org/)
      - [react-redux](https://react-redux.js.org/)
      - [reselect](https://github.com/reduxjs/reselect)
      - [styled components](https://styled-components.com/)
      - [axios](https://www.axios.com/)
      - [base-64](https://github.com/mathiasbynens/base64)
      - [Chroma js](https://gka.github.io/chroma.js/)
      - [normalize css](https://necolas.github.io/normalize.css/)
  - Major development dependencies 
      - [Create React App](https://create-react-app.dev/)
      - [Typescript](https://www.typescriptlang.org/)
      - [react-testing library](https://testing-library.com/docs/react-testing-library/intro/)
      - [jest](https://jestjs.io/)
      - [npm-run-all](https://github.com/mysticatea/npm-run-all)
      - [stubby](https://github.com/mrak/stubby4node)
      - [redux-mock-store](https://github.com/reduxjs/redux-mock-store)
      - [storybook](https://storybook.js.org/)
  
## Development

### Folder Structure
```
.
├── TODO.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│    ├── index.html
│    └── manifest.json
├── readme.md
├── src
│    ├── api  // all api calls to backend
│    │    ├── customerApi.test.ts
│    │    └── customerApi.ts
│    ├── core // core components for the app
│    │    ├── components
│    │    │    ├── Container.ts
│    │    │    ├── Content.ts
│    │    │    ├── ErrorBoundry
│    │    │    │    ├── ErrorBoundary.tsx
│    │    │    │    └── ErrorBoundry.stories.tsx
│    │    │    ├── Grid
│    │    │    │    ├── Grid.stories.tsx
│    │    │    │    ├── Grid.ts
│    │    │    │    └── Item.ts
│    │    │    ├── Loader
│    │    │    │    ├── Loader.css
│    │    │    │    ├── Loader.stories.tsx
│    │    │    │    └── Loader.tsx
│    │    │    ├── Logo.ts
│    │    │    └── Navigation.ts
│    │    └── root.tsx
│    ├── index.css
│    ├── index.tsx
│    ├── logo.svg
│    ├── models // models for tha app
│    │    ├── ApiResponse.ts
│    │    ├── Customer.ts
│    │    ├── CustomerAction.ts
│    │    └── CustomerMock.ts
│    ├── modules // modules for the application
│    │    ├── CustomerQueueList
│    │    │    ├── CustomerQueueConnector.ts
│    │    │    ├── CustomerQueueList.stories.tsx
│    │    │    ├── CustomerQueueList.test.tsx
│    │    │    ├── CustomerQueueList.tsx
│    │    │    ├── components
│    │    │    │    ├── Customer
│    │    │    │    │    ├── Customer.stories.tsx
│    │    │    │    │    ├── Customer.test.tsx
│    │    │    │    │    ├── Customer.tsx
│    │    │    │    │    └── types.ts
│    │    │    │    ├── CustomerCard
│    │    │    │    │    └── CustomerCard.ts
│    │    │    │    ├── CustomerContent
│    │    │    │    │    └── Content.ts
│    │    │    │    ├── CustomerEmail
│    │    │    │    │    └── Email.ts
│    │    │    │    ├── CustomerName
│    │    │    │    │    └── Name.ts
│    │    │    │    └── ProfilePic
│    │    │    │        ├── ProfilePicture.test.tsx
│    │    │    │        ├── ProfilePicture.tsx
│    │    │    │        └── types.ts
│    │    │    └── types.ts
│    │    ├── CustomerQueuePage
│    │    │    └── CustomerQueuePage.tsx
│    │    └── CustomerSearch
│    │        ├── CustomerSearch.test.tsx
│    │        ├── CustomerSearch.tsx
│    │        ├── CustomerSearchConnector.ts
│    │        ├── components
│    │        │    └── SearchInput
│    │        │        ├── SearchInput.stories.tsx
│    │        │        ├── SearchInput.test.tsx
│    │        │        ├── SearchInput.tsx
│    │        │        └── types.ts
│    │        └── types.ts
│    ├── qudini-logo.png
│    ├── react-app-env.d.ts
│    ├── setupProxy.js // proxy configured for the app
│    ├── setupTests.ts 
│    ├── store // redux store folder
│    │    ├── actions
│    │    │    ├── __mock__
│    │    │    │    └── customerApi.ts
│    │    │    ├── actionTypes.ts
│    │    │    ├── actions.test.ts
│    │    │    └── actions.ts
│    │    ├── reducers
│    │    │    ├── CustomersQueueReducer.test.ts
│    │    │    └── CustomersQueueReducer.ts
│    │    ├── selectors
│    │    │    └── Customers.ts
│    │    └── store.ts
│    └── utils // utils folder
│        ├── util.test.ts
│        └── utils.ts
├── stubby // stub api request using stubby
│    ├── customers.js
│    ├── index.js
│    └── stubby.js
├── tsconfig.json
└── yarn.lock


```
### Running the app
 -  Run the app using command `npm start`
 - Application will run on port 3000. 

### State Management
  We used redux for the state management.
  We could have used context for this small api, but preferred as application may be scaled in future 
### Storybook
- For easier development of component in isolation,
we have  added storybook in the project
- To run the storybook please run `npm run storybook`

### Stubbing
We can do the development without connecting to real backend.
We have used npm package `stubby` for mock/stubb api call

## Testing
 We have used RTL and jest to do the unit level and component testing. 
 
### Running The Test
- run the tests `npm run test`
- run the tests with coverage `npm run test -- --coverage`