import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { AnimatePresence } from "framer-motion";
import { NextPageWithLayout } from "./page";
import { appWithTranslation } from "next-i18next";

interface AppPropsWithLayout extends AppProps {
    Component: NextPageWithLayout;
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <RecoilRoot>
            <AnimatePresence>
                {getLayout(<Component {...pageProps} />)}
            </AnimatePresence>
        </RecoilRoot>
    );
}

export default appWithTranslation(App);
