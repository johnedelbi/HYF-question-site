module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET', 'a1b2c3d4e5f6g7h8i9j0'),
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME', 'your_cloud_name'),
          api_key: env('CLOUDINARY_KEY', 'your_api_key'),
          api_secret: env('CLOUDINARY_SECRET', 'your_api_secret'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });
