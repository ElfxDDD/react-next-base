import React from "react";
import { Footer, Header } from ".";

interface PrimaryLayoutProps {
    children: React.ReactNode;
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className={"min-h-[calc(100vh-64px)] border border-black"}>{children}</main>
            <Footer />
        </>
    );
};

export default PrimaryLayout;
