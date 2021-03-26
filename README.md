# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

It is built to practice HTML, CSS, JS, jQuery and AJAX front-end skills, and Node, Express back-end skills, using Primarily
- a client-side Single Page App (SPA)
- The client-side app communicates with a server via AJAX

### Navigation Bar:

- Fixed to the top with padding on both sides
- Contains Compose button
  - When a user clicks the Compose button
    - if the Compose Tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused
    - if the Compose Tweet box is currently showing, then it is hidden

- Second Toggle Button
  - When a user scrolls a second button appears in the lower right hand corner:
  - if the user clicks this button they are brought back up to the top of the page

### Compose Tweet box:

Displayed above the list of tweets, contains a form for submitting tweets, which itself contains:
* a textarea for new tweet content
* a left-aligned button for submitting new tweets

  - When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed

  - When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140)

* a Character Counter, right-aligned, which by default shows 140

  - When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type

  - The Character Counter turns red when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed

### List of Tweets:

Displays tweets in reverse-chronological order (that is, by creation time descending)
Individual Tweets:

### Header contains the user's:
- Avatar, on the left
- Name, on the left and after the avatar
- Handle, on the right

### Body contains the tweet text

### Footer displays:
- How long ago the tweet was created, on the left
- "Flag", "Re-tweet" and "Like" icons upon hovering over the tweet, on the right

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- nodemon
- body-parser
- chance
- md5
- moment
- morgan


## Final Product

!["Screenshot of the app on desktop"](https://github.com/miriamdong/tweeter/blob/master/docs/screenshot%20of%20the%20app%20on%20desktop.png?raw=true)
!["Screenshot of the app on smartphone"](https://github.com/miriamdong/tweeter/blob/master/docs/screenshot%20of%20the%20app%20on%20smartphone.png?raw=true)
