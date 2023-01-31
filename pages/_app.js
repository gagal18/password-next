import '@/styles/globals.css'
import {withPasswordProtect} from "next-password-protect";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default process.env.PASSWORD_PROTECT
    ? withPasswordProtect(App, {
      loginApiUrl: "/api/login",
      checkApiUrl: "/api/passwordCheck",
    })
    : App;
