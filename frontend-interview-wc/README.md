## Assumptions

- There are some inconsistencies in the prompt. I'm assuming these were not put there to trick me and that I should just make my best guess at how to fill in the gaps. (e.g. there is a field in the mocks for "notes/reason" but there is no such field in the data shape for the api. I'll just make up a field name and put it in the data shape.)
- I'm assuming "use a state management library" is not a hard requirement - I'm using React.useReducer and React.useContext to manage state in a redux-like way without the overhead of actually using redux.
- I'm meant to follow the mocks as closely as possible. There are some things I would question if this was real, e.g. there is no punctuation at the end of the success copy, but I'm not going to correct things like this myself since I don't know what the designer wants.

## What to do with more time

- Validate inputs. I'm not taking any steps to ensure e.g. they entered a phone number for the patient. Normally you would want to show an error message if they haven't filled out a required field (usually only after that field is dirty) and not let them click the submit button if the data is invalid.
- Consider standardizing buttons - we have a juxtaposition of two very different looking buttons at the bottom of the page. Aligning on a standard look and feel for our buttons and other UI components will make our app look more polished and be easier to understand and use.
- Success state should correspond to a successful api call. There should be a loading state on the submit button while waiting for a response. There should be an error state if the api call fails.
- Add the address field. This wasn't a time issue as much as it's a problem with lacking a google api key. I'm not willing to pay for one and unfortunately the react-places-autocomplete library just crashes the page if you don't have it loaded, so faking a response is not a workaround. I decided to just skip it rather than spend countless additional time trying to figure out some other workaround because I think the rest of the work I've done gives you a good enough idea of my abilities.
