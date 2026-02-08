import * as z from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("name is required")
      .min(3, "name it last 3 charcters")
      .max(10, "name max 10 charcters"),
    email: z
      .string()
      .nonempty("email is required")
      .email("enter a vaild email"),
    password: z
      .string()
      .nonempty("password is required")
      .regex(/^[A-Z][a-z]{8,}/, "enter vaild password"),
    rePassword: z.string().nonempty("confirm password is required"),
    dateOfBirth: z
      .string()
      .nonempty("date of birth is required ")
      .refine((date) => {
        const today = new Date().getFullYear();
        const birthYear = new Date(date).getFullYear();
        const age = today - birthYear;
        return age >= 18;
      },"you must be 18 years old or older"),
    gender: z.enum(["male", "female"], "enter female or male"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "passwords don't match",
    path: ["rePassword"],
  });