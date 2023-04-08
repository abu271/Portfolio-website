const express = require('express');
const app = express();
const path = require('path');
const contact = require('./backend/routes/contact.ts');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

app.use('/contact', contact);

//  Redirect users to index.html file on all routes
app.get('*', (req: any, res: any) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'dist')});
});

app.listen(port, () => console.log(`Listening on port ${port}`));

