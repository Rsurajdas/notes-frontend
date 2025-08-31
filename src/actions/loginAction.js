import { data } from "react-router";
import { isEmail, isStrongPassword } from "validator";

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const errors = {};
  if (!email) {
    errors.email = "Email is required";
  }
  if (!password) {
    errors.password = "Password is required";
  }
  if (!isEmail(email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!isStrongPassword(password)) {
    errors.password =
      "Password must contain at least one lowercase, one uppercase, one number, and one symbol";
  }
  if (Object.keys(errors).length) {
    return data({ errors }, { status: 400 });
  }

  console.log({ email, password });
};
