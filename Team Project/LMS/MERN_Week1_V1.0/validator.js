function validateName(name, callback) {
  if (!name || name.trim() === "") {
    callback("Invalid name", null);
  } else {
    callback(null, name);
  }
}

function retryLimit(attempts, max, rl) {
  if (attempts >= max) {
    console.log("Too many failed attempts. Exiting...");
    rl.close();
    return true;
  }
  return false;
}

module.exports = { validateName, retryLimit };