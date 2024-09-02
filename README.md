# What is parcel doing?
1. Dev Build
2. Local Server
3. HMR = Hot Module Replacement
4. File Watching Algorithm - written in C++
5. Caching - Faster Builds (3rd, 2nd, 5th points helps to automatically refresh the browser page when user save changes in the code instead of manually refreshing, which is done by parcel.)
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

// Components present in food App:
// 1. Header: Logo, Nav Items
// 2. Body: Search, RestaurantContainer which has Restaurant Card which further has -> Img, Name of Res, Star rating, cuisine, delivery time
// 3. Footer: Copyright, Links, Address, Contact

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
2. useEffect()

# whenever a state variable updates, react re-renders the component.

As soon as you call setListOfRestaurant, react will find out the difference between updated virtual dom and previous virtual dom, and update the UI. React keeps an constant eye on ListOfRestaurants, as soon as  ListOfRestaurants changes, react re-renders it on the actual dom.

so basically, ListOfRestaurants -> previous virtual dom, setListOfRestaurant -> updated virtual dom.

so basically, we write two different variable names i.e. ListOfRestaurants and setListOfRestaurant so to get an trigger of button to start the diff algorithm.


Destructing of Array: 

const arr = useState(resList); useState returns an array

const [listofRestaurants. setListOfRestaurants] = arr;

const listOfRestaurants = arr[0];
const setListOfRestaurants = arr[1];


