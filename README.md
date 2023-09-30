# Assumptions made:
    - Patients will have US addresses. The geocoding API can change keys with different localities.
    - This is dependent on the google geocoding API being available.
    
# What else needs to be done:    
    - Error handling: only minor error handling is implemented. 
    - Tests: unit tests, and e2e testing should be written for this project
    - Form input: form inputs should match the provided figma (red asterisk). This can be accomplished by creating a custom placeholder and overlaying on top of the input element.
    - Address select: When navigating using the keyboard the element is not highlighted. This could possibly be accomplished by adding `&hover` to the row currently selected.
    - Datepicker: Add a datepicker to the form and update the outputted datashape to match.
