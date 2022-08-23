# <span style="color:magenta">Testing an unstable API

## <span style="color:yellow">Idea #1:

Have the developers use a product like stoplight.io while designing/implementing an API, as it has built-in mocking as well. This would hopefully help with the design and get the API as stable as possible before a quality engineer would begin to test it. Ideally.  

## <span style="color:cyan">Idea #1:

Mock the tests (I think cy.intercept() does this, but I haven't used it yet) and get as close to the real thing as you can by testing up to the point where the data has just been sent, and mocking the expected response rather than relying on the in-flight API to do the work since it is still flaky. Again, I have not used this in Cypress yet, but from what I understand you just use the command to send data based on the response you are expecting for a given scenario.

There are so many tools now to help with mocking and testing unfinished APIs, I would really almost be inclined to write a skeleton test with the bare minimun of flesh on it and put it aside and use a tool to test in the meantime, until the API is reliable enough to actually automate against.