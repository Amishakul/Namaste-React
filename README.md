# What is parcel doing?
1. Dev Build
2. Local Server
3. HMR = Hot Module Replacement
4. File Watching Algorithm - written in C++
5. Caching - Faster Builds (3rd, 4th, 5th points helps to automatically refresh the browser page when user save changes in the code instead of manually refreshing, which is done by parcel.)
6. Image Optimization (loads the images of your webiste on browser)
7. Minification of files in production level
8. Bundling the files 
9. Compress
10. Consistent Hashing
11. Code Splitting
12. Differential Bundling - support older browsers (produces different bundles for different types of old browser)
13. Diagnostic
14. Error Handling
15. Ables to run app on HTTPS server
16. Tree Shaking - remove unused code
17. Different dev and production bundles

# Other than React parcel also makes your web app faster

# how parcel is fast? because it has parcel-cache folder


# Namaste Food

 Components present in food App:
 1. Header: Logo, Nav Items
 2. Body: Search, RestaurantContainer which has Restaurant Card which further has -Img, Name of Res, Star rating, cuisine, delivery time
 3. Footer: Copyright, Links, Address, Contact

# Default Export/Import:

export default Component;
import Component from "path";

# Named Export/Import:

export const Component;
import {Component} from "path";

# Why react is fast?
It can do faster/efficent DOM manupalation --> Means if my data is getting changed then my UI should also get updated, React automatically updates the component as soon as the state variable is changed, because it has virtual DOM. It has diff algorithm which is very efficent.

Virtual DOM is the js object representation of HTML Tags

# React Hooks
Hooks are Normal JS utility functions
1. useState() - Superpowerful state variables in react
2. useEffect() - To handle side works.

# whenever a state variable updates, react re-renders the component.

As soon as you call setListOfRestaurant, react will find out the difference between updated virtual dom and previous virtual dom, and update the UI. React keeps an constant eye on ListOfRestaurants, as soon as  ListOfRestaurants changes, react re-renders it on the actual dom.

so basically, ListOfRestaurants -> previous virtual dom, setListOfRestaurant -> updated virtual dom.

so basically, we write two different variable names i.e. ListOfRestaurants and setListOfRestaurant so to get an trigger of button to start the diff algorithm.


Destructing of Array: 

const arr = useState(resList); useState returns an array

const [listofRestaurants. setListOfRestaurants] = arr;

const listOfRestaurants = arr[0];
const setListOfRestaurants = arr[1];

# 2 types of Routing in web apps
- Client Side Routing
- Server Side Routing - we are doing this, we are not making any network call

# Single page application is just one page just the components are getting interchange


# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- Dispatch(action)
- Selector

# Types of Testing (Developer)
- Unit Testing(testing react components in isolation, testing only 1 component at a time)
- Integration Testing(testing those components which interact with multiple components)
- End to End Testing - e2e testing(testing from when user ends the application till the user leaves the application, this all flow cycle of the user is been tested)

1. React Testing library is built on top of dom testing library
2. React testing library uses jest at back of it for testing
3. Parcel uses babel behind the scenes
4. Jsdom is like a browser which helps to run test cases for an application 

# Setting up testing in our app
- Install React Testing Library
- Installed Jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel config file to disable default babel transpilation.
- Jest configuration (npx jest --init)
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install npm i -D @testing-library/jest-dom

npm run test -> for run test case


![Screenshot (614)](https://github.com/user-attachments/assets/ba78cef6-da4b-4766-88de-9188b1869844)
![Screenshot (613)](https://github.com/user-attachments/assets/699af888-b2b8-4814-8b74-1d18da074ac8)
![Screenshot (612)](https://github.com/user-attachments/assets/b3b0e8a9-b6f3-46fc-b2d0-936daa65055b)
![Screenshot (611)](https://github.com/user-attachments/assets/29055683-82dd-4bb8-a5a9-b2489f808ff5)
![Screenshot (610)](https://github.com/user-attachments/assets/097749f8-77db-4f12-b4a7-eaadcaa86736)
![Screenshot (609)](https://github.com/user-attachments/assets/22df78d0-f708-44f6-8591-3b5d95107c9a)
![Screenshot (608)](https://github.com/user-attachments/assets/de43d78e-6793-4497-a027-869117eef5c7)
![Screenshot (607)](https://github.com/user-attachments/assets/2bc0ae7d-0eba-45b8-9697-3ff0f722ca5e)
![Screenshot (606)](https://github.com/user-attachments/assets/1deef252-8267-471e-995f-4e1795926e95)
![Screenshot (605)](https://github.com/user-attachments/assets/01935e25-6ada-45c5-a8dc-99c7d2759ba7)
![Screenshot (604)](https://github.com/user-attachments/assets/e3033c2c-1f06-4575-8d0f-3bee808e8ba0)
![Screenshot (603)](https://github.com/user-attachments/assets/57485e1f-2980-442e-a31a-3ca965702ab0)
![Screenshot (602)](https://github.com/user-attachments/assets/cc14361d-f257-459b-ab17-f61151fa8667)
![Screenshot (601)](https://github.com/user-attachments/assets/4addf596-e47e-4c7c-b84b-31782ad72b8c)
![Screenshot (600)](https://github.com/user-attachments/assets/6759e076-1ca5-4c55-89d2-361d29afe16e)
