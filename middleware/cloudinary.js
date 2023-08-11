const cloudinary = require("cloudinary").v2;

// require("dotenv").config({ path: "../config/.env" });

cloudinary.config({
  cloud_name: 'dwatipgjt',
  api_key: '524939618488276',
  api_secret: 'OrhIlsz8ZNesySpAx_JVI9XVN7U',
});

module.exports = cloudinary;
