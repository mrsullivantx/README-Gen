function generateHTML(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini-Project</title>
</head>
<body>
    <h1>In-Class Mini-Project<h1>
    </br>
    </br>
    <h3>The user name is ${data.username}.</h3>
    </br>
    <p>Your location is ${data.location}.</p>
    </br>
<p>Your bio:  ${data.bio}.</p>
</br>
<p>Your <a href="${data.linkedin}">LinkedIn Profile</a>.</p>
</br>
    <p>Your <a href="${data.github}">GitHub Profile</a>.</p>
</body>
</html>
    `
}

module.exports = generateHTML