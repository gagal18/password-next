import { loginHandler } from "next-password-protect";

export default loginHandler("secret", {
    cookieName: "next-password-protect",
});

