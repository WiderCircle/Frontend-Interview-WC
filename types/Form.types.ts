import { z } from "zod";

export const FormSchemaTypes = {
  Field: (message = "", type = "") => {
    const baseValidator = z.preprocess(
      (arg) => {
        if (typeof arg === "number") return arg.toString();
        else if (typeof arg === "string") return arg.trim();
        return arg;
      },
      type === "email"
        ? z
            .string()
            .min(1, { message })
            .email({ message: "Must be a valid email" })
        : z.string().min(1, { message })
    );

    return baseValidator;
  },
  AddressSearch: (message = "") =>
    z.preprocess((arg: any) => {
      return arg?.description || "";
    }, z.string().min(1, { message })),

  Optional: z.any(),
};
