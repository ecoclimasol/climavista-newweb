import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next'; // Import du type NextConfig

const withNextIntl = createNextIntlPlugin();

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  // Optionel : tes propres options Next.js vont ici, par exemple:
  // experimental: { serverActions: true }
};

export default withNextIntl(nextConfig);