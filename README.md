# Cushions
So the puddle muddles can be even better

## Introduction

This is a an application dedicated to help Borderlings (theborderland.se) create their dreams, by handling reality, whatever that is, collaboratively well.

This is the prototyping version of the application, meant to provide UI development to be done independent of the rest of the stack being in place.

Since we have decided to use React, I've made a wrapper component that is completely abstracted from the rest of the stack: `Cushions.jsx` file that is. 

So please make sure to keep your non-DB operations within this component, or by using other reusable components.

DB operations should be done from within the container `CushionsContainer.jsx`, unless you have a better idea implemented.

### Why Meteor?

The reason I started up this with Meteor is that it's super easy to get hands dirty and start prototyping. Meteor provides a super set of tools that would otherwise be an ache to configure. They are all out of the box, such as:

- User Accounts system with ready-to-use configurations and validation, AND social signups (FB, G, T, Github etc.)
- Automatic data syncing between server and client via DDP
- MongoDB, Web Sockets etc builtin, working without any hustle.
- Super easy hosting at Galaxy (little pricy but worth it)
- Emails sending configuration very easy.


And then, we can always just copy the UI we have here, since it's reusable React components, and just migrate it to another app setup when/if we have it in place configured to	 be working.


## Installation

1. Make sure to have installed Node on your computer, by going to this url and downloading its package: ```https://nodejs.org/en/```

2. Install meteor locally by running: ```curl https://install.meteor.com/ | sh``` on your terminal (OSX & Linux). For Windows, refer to the meteor website: https://www.meteor.com/install

3. Clone the repo to your computer: ```git clone git@github.com:eminx/Cushions.git```

4. Go to the repo: ```cd Cushions```

5. Run ```meteor npm install```

Your installation should be finished. Just do this to run the app:

```meteor run```

And go to: ```localhost:3000``` on your favourite browser.

## Documentations

Semantic UI React: https://react.semantic-ui.com

React JS: https://reactjs.org/docs

Meteor: http://docs.meteor.com/#/full/

