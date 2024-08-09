import { z, ZodType } from "zod";

export type FormData = {
  name: string
  email: string
  object: string
  body: string
  checkbox: boolean
}

export const UserSchema: ZodType<FormData> = z
  .object({
    email: z.string().min(1, "Questo campo è obbligatorio").email("Inserisci un indirizzo email valido"),
    name: z
      .string()
      .min(1, "Questo campo è obbligatorio"),
    object: z
      .string()
      .min(1, "Questo campo è obbligatorio"),
    body: z
      .string()
      .min(1, "Questo campo è obbligatorio"),
    checkbox: z.boolean().refine(value => value === true, {
      message: "Questo campo è obbligatorio"
    }
    ),
  });