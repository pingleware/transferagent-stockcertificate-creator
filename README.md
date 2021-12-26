# transferagent-stockcertificate-creator
A stock certificate creator used by a Transfer Agent

# Create your Stock Certificate
Edit the stockcertificate.docx file in the assets directory, embed your officer and transfer agent singatures and then save as HTML.

Next copy and paste the HTML between the carets in js/stockcertificate.js ensuring the variable names integrity is maintained.

Then run the application,

    >npm start

# Release Schedule
Whenever the code base is updated, a new standalone executable is created and replaced with the existing executable.

    Version         Date                Description
    1.1.0         12/26/2021        Added Save as byte code for smart contract insertion
    1.0.0         12/26/2021        Initial release, save as MS-Word doc format

# EOL or End-of-Life
When a piece of software is useful, there should never be an EOL doctrine. The intention for mtbridge-server is to achieve immoratlity ;).

At some point of time in the future, this project may appear to be dead and abandon. The opposite will be true!

When this project reaches that stage, this project has matured to a level where maintenance is minimal (mostly updating to latest version of Node).

    Patrick Ingle
    Developer
    December 26, 2021   