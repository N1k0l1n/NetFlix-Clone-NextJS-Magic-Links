import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import { magic } from "../../lib/magic-client";
import { useRouter } from "next/router";
import Loading from "../../components/loading/loading";

const roboto = Roboto({
  weight: ["400", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // (async function () {
    //   const isLoggedIn = await magic.user.isLoggedIn();
    //   if (isLoggedIn) {
    //     router.push("/");
    //   } else {
    //     router.push("/login");
    //   }
    // })();
  }, []);


  useEffect(() => {
   const handleComplete = () =>{
    setIsLoading(false);
   };
   router.events.on("routeChangeComplete", handleComplete);
   router.events.on("routeChangeError", handleComplete);

   return () =>{
    router.events.off("routeChangeComplete", handleComplete);
    router.events.off("routeChangeError", handleComplete);
   };

  }, [router]);

  return isLoading ? <Loading /> : <Component {...pageProps} />;
}
