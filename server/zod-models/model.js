const {z} = require("zod");

const contactSchema = z.object({
    email: z
    .string({required_error: "Email is required."})
    .email({message: "Invalid email"})
    .trim()
    .min(8, {message: "Email must be of atleast 8 characters."}),
    message: z
    .string({required_error: "Contact form can't be empty."})
    .trim()
    .min(3, {message: "Message must be atlest 3 characters long."})
})

module.exports = contactSchema;