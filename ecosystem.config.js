module.exports = {
  apps: [
    {
      name: "rt-audio",
      script: "./start_app.sh",
      cwd: "/home/ubuntu/proj/rt-audio", // 替换为你的项目目录
      interpreter: "/bin/bash", // 使用 Bash 解释器
      env: {
        CONDA_DEFAULT_ENV: "rt", // 替换为你的 conda 环境名称
        OPENAI_API_KEY: "sk-xxxx"  // 替换为你的 OpenAI API Key
      },
    },
  ],
};