const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node.js CI/CD Demo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .container {
            text-align: center;
            color: white;
            padding: 2rem;
            max-width: 800px;
        }
        
        .rocket {
            font-size: 4rem;
            animation: bounce 2s infinite;
            margin-bottom: 1rem;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-20px); }
            60% { transform: translateY(-10px); }
        }
        
        .title {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            margin-bottom: 3rem;
        }
        
        .features {
            display: flex;
            gap: 2rem;
            margin-bottom: 3rem;
            justify-content: center;
        }
        
        .feature {
            background: rgba(255,255,255,0.1);
            padding: 2rem;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            transition: transform 0.3s ease;
        }
        
        .feature:hover {
            transform: translateY(-5px);
        }
        
        .icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .feature h3 {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
        }
        
        .feature p {
            opacity: 0.8;
        }
        
        .status {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            background: rgba(0,255,0,0.2);
            padding: 1rem 2rem;
            border-radius: 25px;
            border: 1px solid rgba(0,255,0,0.3);
        }
        
        .status-indicator {
            width: 12px;
            height: 12px;
            background: #00ff00;
            border-radius: 50%;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
        
        @media (max-width: 768px) {
            .title { font-size: 2rem; }
            .features { flex-direction: column; }
            .container { padding: 1rem; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="hero">
            <div class="rocket">🚀</div>
            <h1 class="title">Node.js CI/CD Demo</h1>
            <p class="subtitle">Successfully deployed via Docker & GitHub Actions</p>
            
            <div class="features">
                <div class="feature">
                    <div class="icon">⚡</div>
                    <h3>Fast Deployment</h3>
                    <p>Automated CI/CD pipeline</p>
                </div>
                <div class="feature">
                    <div class="icon">🐳</div>
                    <h3>Dockerized</h3>
                    <p>Containerized application</p>
                </div>
                <div class="feature">
                    <div class="icon">🔄</div>
                    <h3>Continuous Integration</h3>
                    <p>GitHub Actions workflow</p>
                </div>
            </div>
            
            <div class="status">
                <span class="status-indicator"></span>
                <span>Application Running Successfully</span>
            </div>
        </div>
    </div>
</body>
</html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
