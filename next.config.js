/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const intercept = require("intercept-stdout");
const interceptStdout = (text) => {
    // safely ignore recoil warning messages in dev (triggered by HMR)
    if (text.includes("Duplicate atom key")) {
        return "";
    }
    return text;
};
if (process.env.NODE_ENV === "development") {
    intercept(interceptStdout);
}

const nextConfig = {
    reactStrictMode: true,
    i18n,
}

module.exports = nextConfig
