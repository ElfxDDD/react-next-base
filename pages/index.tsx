import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { NextPageWithLayout } from "./page";
import { I18N_LOCALE_FILES_NAME } from "@/src/utils/locale";
import { PrimaryLayout } from "@/src/components/Layout";

type Props = {
    // Add custom props here
};

const HomePage: NextPageWithLayout = () => {
    return (
        <>
            <div className="text-black">123</div>
        </>
    );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(
            locale ?? "hk",
            I18N_LOCALE_FILES_NAME
        )),
    },
});

HomePage.getLayout = (page: React.ReactNode) => (
    <PrimaryLayout>{page}</PrimaryLayout>
);

export default HomePage;
