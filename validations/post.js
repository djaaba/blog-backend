import { body } from "express-validator";

export const postCreateValidation = [
    body('title', 'wrong title').isLength({min: 3}).isString(),
    body('text', 'wrong text').isLength({min: 10}).isString(),
    body('tags', 'wrong tag format').optional().isString(),
    body('imageUrl', 'wrong url').optional().isString(),
]