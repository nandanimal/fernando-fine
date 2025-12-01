import "@/styles/globals.css";
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-heading-family",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-body-family",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${roboto.className} ${roboto.variable} ${poppins.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
