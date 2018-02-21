# Repos & Issues

## Getting set up and running.
Here are the __detailed instructions__ on how to download this 
repository and get the application running. To achieve this, _we will be working heavily in the terminal_. Below you'll find a general overview of the application's __expected behavior__.

1. In your computer's _terminal_, navigate to the directory of your choice and `git clone` _this_ repository.
    1. When you're in the directory of your choice, paste this command into your terminal: `git clone https://github.com/jsdev17/issues.git` then hit `Enter`.

1. Once you've cloned the repository, you should see __two directories__ at the root level: one named `server` and another named `client`. Go into each of these directories and run an `npm install`.
    1. For the sake of clarity, this means __you'll be running__ `npm install` __twice__; once inside `server` and another inside `client`. You can do this one at a time, or you can open a second tab in your terminal and run these commands simultaneously.

1. __Once__ `npm install` __is finished in__ `server`, __start MongoDB in your computer__. You can do this by opening a new terminal tab, or window, and running the `mongod` command. Once Mongo is running, run `npm start` __inside the__ `server` __directory__. This will start the server.
1. In `client`, all you have to do it run `npm start` once `npm install` is done. This will automatically initilialize the application on your browser.

## A note on expected behavior.
The application is a working prototype, and is thus tailored to retrieve and render data from GitHub repositories and issues for __this account only__. If you wish to fetch and render repositories from another GitHub account, you may do so by making a
slight change in the source code; however, you will not be able to see each repository's issues. This is because in order for issues to be rendered, they need to be matched with documents in the database; that is to say, if there's not a document (in the database) for each issue retrieved from GitHub, there will be no match and the issue won't be rendered. This behavior may or may not change in future versions of this application. For now, just keep in mind its present limitations.

### Fetching repos for another GitHub User
There's a file named `ReposPage.js` in the `client` directory. The path to this file is the following: `client/src/components/ReposPage.js`. <br /><br />
__On line 17__, you'll see a string to an endpoint. _Change the username on the string_ to fetch repositories of another GitHub user. Like so:
```javascript
let url = 'http://localhost:3005/api/github/{username}/repos';
```
You must enter a valid GitHub username.