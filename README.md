# Project Info

I followed container and component model. Main App.js and GroupType.jsx are container because they 
dynamically render components based on json uiType.

For each uiType created a component: [group, input, radio, select, switch]

# What could I improv?

* Submit form
    Submitting form could be improved. Right now i'm storing in state based on each level and value.
    Ideally I could manipulate data differently and combine with the mock data.

* Validation
    If any form data is required right now it just shows red icon(*), ideally I could show validation when
    submit is clicked

* Modal
    I could implement modal and hide when cancel is clicked

* Extra "show advanced fields"
    Since I followed container, component pattern and build dynamically components "show/hide fields" is on all containers so GroupType.jsx is showing 1 extra "show advanced fields" in my design. I could improve also if I have more time.

* CSS
    CSS could be improved for validation and in general

* Tooltip
    Right now i'm just using title but I could implement a tooltip component if we have more time

* To see the code you need to run "npm install" 
