const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, function () {
    console.log('Listening on port ${PORT}');
});

