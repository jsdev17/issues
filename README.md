# Repos & Issues

## Getting set up and running.
Here are the __detailed instructions__ on how to download this 
repository and get the application running. To achieve this, _we will be working heavily in the terminal_. Below you'll find a general overview of the application's __expected behavior__.

1. In your computer's _terminal_, navigate to the directory of your choice and `git clone` _this_ repository.
    1. When you're in the directory of your choice, paste this command into your terminal: `git clone https://github.com/jsdev17/issues.git` then hit `Enter`.

1. Once you've cloned the repository, you should see __two directories__ at the root level: one named `server` and another named `client`. Go into each of these directories and run an `npm install`.
    1. For the sake of clarity, this means __you'll be running__ `npm install` __twice__; once inside `server` and another inside `client`. You can do this one at a time, or you can open a second tab in your terminal and run these commands simultaneously.

1. __Once__ `npm install` __is finished in__ `server`, __initiate MongoDB in your computer__. You can do this by opening a new terminal tab, or window, and running the `mongod` command. Once Mongo is running, run `npm start` __inside the__ `server` __directory__. This will start the server.
1. In`client`, all you have to do it run `npm start` once `npm install` is done. This will automatically initilialize the application on your browser.

## A note on expected behavior.
The application is a working prototype, and is thus tailored to retrieve and render
GitHub repos and issues information for __this account only__. 