# WEB103 Prework - CreatorPlayer

Submitted by: Hui Hwoo

About this web app: This web app is a content creator directory that allows users to view, add, and delete content creators.

Time spent: 20 hours

## Required Features

The following **required** functionality is completed:

-   [x] A logical component structure in React is used to create the frontend of the app
-   [x] At least five content creators are displayed on the homepage of the app
-   [x] Each content creator item includes their name, a link to their channel/page, and a short description of their content
-   [x] API calls use the async/await design pattern via Axios or fetch()
-   [x] Clicking on a content creator item takes the user to their details page, which includes their name, url, and description
-   [x] Each content creator has their own unique URL
-   [x] The user can edit a content creator to change their name, url, or description
-   [x] The user can delete a content creator
-   [x] The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage

The following **optional** features are implemented:

-   [ ] Picocss is used to style HTML elements
-   [x] The content creator items are displayed in a creative format, like cards instead of a list
-   [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

-   [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

### View All Content Creators

<img src='data/CreatorView.gif' title='View All Content Creators' width='' alt='View All Content Creators' />

### Check Individual Content Creator Details

<img src='data/CreatorPage.gif' title='Check Individual Content Creator Details' width='' alt='Check Individual Content Creator Details' />

### Add New Content Creator

<img src='data/Add Creator.gif' title='Add New Content Creator' width='' alt='Add New Content Creator' />

## Notes

When I was working on the project, I encountered a few challenges. One of the challenges was setting up the routing for the individual content creator pages. I had to figure out how to pass the content creator's ID to the URL so that I could fetch the correct content creator's information. Another challenge was setting up the form to add a new content creator. I had to figure out how to pass the form data to the backend and then display the new content creator on the homepage. Overall, I learned a lot about React and how to create a full-stack web app.

## License

Copyright [2024] [Joe Hu]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
