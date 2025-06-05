app.get('/', (req, res) => {
  const userComment = req.query.comment || '';
  res.send(`<html><body><h1>User comment: ${userComment}</h1></body></html>`);
  //res.send(`<html><body><h1>User comment: ${userComment}</h1></body></html>`);
});
