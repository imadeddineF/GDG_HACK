import withNextIntl from 'next-intl/plugin';

// await import ("./src/env.js");

const nextIntlConfig = withNextIntl();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextIntlConfig(nextConfig);
