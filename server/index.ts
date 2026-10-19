import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { leadRoutes } from './routes/leadRoutes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5050


// Middleware
app.use(cors())
app.use(express.json())

// Health check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'online',
    service: 'Cestrix Learning SaaS & AI SEO Engine API',
    timestamp: new Date().toISOString()
  })
})

// Route Handlers
app.use('/api/leads', leadRoutes)

// Start Server
app.listen(PORT, () => {
  console.log(`[Cestrix Backend] API Server listening securely on http://localhost:${PORT}`)
})
