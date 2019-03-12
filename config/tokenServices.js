const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    school_id: user.school_id
  };

  const options = {
    expiresIn: '4h'
  };

  return jwt.sign(payload, secret, options);
}

module.exports = generateToken;