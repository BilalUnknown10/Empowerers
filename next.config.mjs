/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"], // ✅ Add Cloudinary as an allowed image domain
      },
};

export default nextConfig;
