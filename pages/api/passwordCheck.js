import { passwordCheckHandler } from "next-password-protect";

export default passwordCheckHandler("secret", {
    cookieName: "next-password-protect",
});
