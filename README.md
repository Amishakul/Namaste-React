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

# npm run test -> for run test case

![Screenshot (600)](https://github.com/user-attachments/assets/7466da7a-a209-4753-800a-bb8c17648eeb)
![Screenshot (601)](https://github.com/user-attachments/assets/fef9ea0d-810a-484f-85e3-e8fd709ab8d2)
![Screenshot (602)](https://github.com/user-attachments/assets/d6377b88-cbf2-4684-a7fa-dbcf19a2b67a)
![Screenshot (603)](https://github.com/user-attachments/assets/87429bea-6c41-4ac1-b804-889fdaf3c1e0)
![Screenshot (604)](https://github.com/user-attachments/assets/6ff85607-f98f-4620-af55-c2d2ac2e6151)
![Screenshot (605)](https://github.com/user-attachments/assets/1de5383d-62c2-4072-b81b-fd5d93f0b10c)
![Screenshot (606)](https://github.com/user-attachments/assets/bbb3201b-ede4-4e7f-8720-6c181b244061)
![Screenshot (607)](https://github.com/user-attachments/assets/e635fd92-9f84-4d6a-b3c5-2596d0f29616)
![Screenshot (608)](https://github.com/user-attachments/assets/6ef8c1b5-a074-4d73-9a6f-24a158100ef8)
![Screenshot (609)](https://github.com/user-attachments/assets/3b0d482c-dc5d-4297-95f8-dc9fb44b0130)
![Screenshot (610)](https://github.com/user-attachments/assets/9d3e75a3-78b1-46cc-a122-186c7767c0d5)
![Screenshot (611)](https://github.com/user-attachments/assets/7f9d0583-8ef3-42dc-a7dd-e7abc2332974)
![Screenshot (612)](https://github.com/user-attachments/assets/f9138f6a-8874-4e92-b4a2-63c12b0b18d0)
![Screenshot (613)](https://github.com/user-attachments/assets/144f7477-de7d-434a-ae98-83a695e0b60e)
![Screenshot (614)](https://github.com/user-attachments/assets/55eaa30c-21c7-4631-a6d9-44e7f2d14f2a)
















