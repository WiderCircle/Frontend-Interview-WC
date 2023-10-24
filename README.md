# WiderCircle Front-End Engineering Interview

# Assumptions

- I took a quick look at the data schema and didn't think too carefully about it. The designs provided in Figma _mostly_ look like all the fields are regular textfields. For that reason the Date field does not actually have a datepicker.

  - The fast solution here would be to maybe use Cleave.js but I am tired.

- I chose to use React-hook-form for internal state management & zod for error handling. This is nice because it's provided FieldArray allows me to validate data across multiple subforms before submitting.

  - One thing I discovered, which I can solve with more time, is that the cards show the name rather than "New patient". I'm assuming this occurs once the subform is submitted. AFAIK, react-hook-form doesn't operate on submitting subforms, it just passively collects state. A solution can probably be thrown together with watchedFields or getValues().

- the address input is provided by mui autocomplete, I was able to get it work with some tweaking & wrap it into a Controller for use in react-hook-form.

- I have a few other react-hook-form tools that I have built out that I use day-to-day, so I haven't had to write JSX that looks like this in a while. The file organization might be thrown off a little bit because I was rushed and sort of unfamiliar with how to structure them. But it might be ok.

## Duration

~ 6 hours with some distractions. Overall I think I did fine.

## What else can be improved

1.  If I had more time I'd improve on styles a bit more. Felt that I got close and didn't want to dive super deep into perfecting the look & feel. Lots of things to build for this one.
2.  A datepicker (mui datepicker), or cleave.js input which can be utilized.
3.  The POST may want to check to see if the email is in use, and respond with a server error which can be displayed on the client.
4.  Everything becomes easier with a component library so eventually one of those.
5.  The server doesn't respond with an error so I did not handle that. But I suppose the onSubmit could handle showing a red alert or display server errors on the form itself.
