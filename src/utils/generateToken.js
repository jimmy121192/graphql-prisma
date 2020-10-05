import jwt from 'jsonwebtoken'

const generateToken = (userId) => {
    return jwt.sign({ userId }, 'thisismypassword', { expiresIn: '1h' })
}

export { generateToken as default }