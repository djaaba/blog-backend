import { body } from "express-validator";

export const registerValidation = [
    body('email', 'wrong email').isEmail(),
    body('password', 'password length must be longer than 5').isLength({min: 5}),
    body('fullName', 'fullName must be longer than 3').isLength({min: 3}),
    body('avatarUrl', 'wrong url').optional().isURL(),
]

export const loginValidation = [
    body('email', 'wrong email').isEmail(),
    body('password', 'password length must be longer than 5').isLength({min: 5}),
]