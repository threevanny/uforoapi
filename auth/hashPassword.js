const { genSalt, hash, compare } = require('bcrypt');

const SALT_ROUNDS = 10;

const hashPassword = async password => {
    const salt = await genSalt(SALT_ROUNDS);
    return await hash(password, salt)
}

const matchPassword = async (password, savedPassword) => {
    return await compare(password.toString(), savedPassword);
}

module.exports = { hashPassword, matchPassword};