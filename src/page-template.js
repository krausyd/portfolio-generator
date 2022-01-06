const generatePage = (gitName, gitUserName) => {
    return `
    <!DOCTYPE html>
    <html lang="eng">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Portfolio Demo</title>
    </head>
    <body>
        <h1>Name: ${gitName}</h1>
        <h2><a href="https://github.com/${gitUserName}">Github</a></h2>
    </bod>
    </html>
    `;
};

module.exports = generatePage;