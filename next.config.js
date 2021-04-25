module.exports = {
  // Sempre adiciona barra no final da URL
  trailingSlash: true,

  // Configuração para evitar Clickjacking Attack
  async headers() {
    return [
      {
        source: '/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      }
    ]
  }
}
