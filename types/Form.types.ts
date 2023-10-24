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
  //   DatePicker: () =>
  //     z.preprocess((arg) => {
  //       if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
  //     }, z.date()),
  //   SearchableSelect: (message = "") =>
  //     z.preprocess((arg) => {
  //       if (typeof arg === "string") return arg;
  //       const argSelection = arg as SelectOption;
  //       return argSelection.value;
  //     }, z.string().min(1, { message })),

  Optional: z.any(),
};
