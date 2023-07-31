# KOALA42 Technical Assessment

This project was created as React.js app.

## Project setup

Download this repository to your local machine and run command:

### `npm start`

## About project

This project is oriented on main component, which fetches data from faked API service and renders data table with ability of infinite nesting.
Each row could be deleted. This process deletes all nested objects.
Project uses vanilla features like useState, useContext, useReduce for global state management and also json-loader and sass packages.

## Known issues

1. **Data consistency** is not implemented. I would require some kind of backend or third party service like Firebase, which could have been time-consuming. There is also an option of using local/session storage, but i did not find it appropriate.

2. **Styling** is very basic, table is not responsive, and it needs some classname convention, but it was not the scope of this project.

3. There could be a huge problem with **performance**, which is caused by absence of some sort of virtual scrolling or infinite loading. If there was more time, I would implement it.

4. And the last thing is not using **typescript** due to time restriction.
