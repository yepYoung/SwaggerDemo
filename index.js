const express = require('express');
const path = require('path');
const app = express();
const swaggerUiAssetPath = require('swagger-ui-dist').getAbsoluteFSPath();

// 提供你的 api.yaml 文件
app.get('/api.yaml', (req, res) => {
  res.sendFile(path.join(__dirname, 'api.yaml'));
});

// 自动生成 index.html 页面，加载 api.yaml
app.get('/docs', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Swagger UI</title>
        <link rel="stylesheet" type="text/css" href="/docs/static/swagger-ui.css" />
        <script src="/docs/static/swagger-ui-bundle.js"></script>
        <script src="/docs/static/swagger-ui-standalone-preset.js"></script>
      </head>
      <body>
        <div id="swagger-ui"></div>
        <script>
          const ui = SwaggerUIBundle({
            url: '/api.yaml',
            dom_id: '#swagger-ui',
            presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
            layout: 'StandaloneLayout'
          });
        </script>
      </body>
    </html>
  `);
});

// 提供 Swagger UI 静态资源（放在 GET /docs 路由之后）
app.use('/docs/static', express.static(swaggerUiAssetPath));

app.listen(3000, () => {
  console.log('✅ Swagger UI running at http://localhost:3000/docs');
});
