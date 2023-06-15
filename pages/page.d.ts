import { NextPage } from "next";
import { ReactElement } from "react";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (_page: ReactElement) => any;
    Layout?: any;
};
