# Uroko

Uroko 是一个面向教师和学生的 AI 互动课堂平台：上传教材或输入主题，生成课程、幻灯片和测验，并与 AI 教师互动。

## 快速开始

需要 Node.js 22.19+、pnpm 10 和 PostgreSQL。复制 `.env.example` 为 `.env.local` 并配置 `DATABASE_URL`，然后复制 `openmaic.example.yml` 为 `openmaic.yml` 并配置模型。

```bash
git clone https://github.com/IsMoDex/uroko.git
cd uroko
pnpm install
pnpm dev
```

打开 <http://localhost:3000>。配置 `PARALLEL_SCENE_CONCURRENCY=2` 可以并行生成场景。

## 许可证

MIT。Uroko 基于 OpenMAIC，原始许可证和版权声明保留在 [LICENSE](LICENSE) 中。
