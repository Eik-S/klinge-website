module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2a5f0c5e1b11f4211fb925d77b61a818'),
  },
});
