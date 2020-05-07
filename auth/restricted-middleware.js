module.export =
  (req,
  res,
  (next) => {
    const { authorization } = req.headers;
    //API_SECRET is a banana word
    const API_SECRET = process.env.API_SECRET;
    if (authorization === API_SECRET) {
      next();
    } else {
      res.status(403).json({ you: "have no power here" });
    }
  });
// next()
