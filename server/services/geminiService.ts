import { GoogleGenAI } from '@google/genai'

export interface GeminiConfig {
  apiKey?: string
  model: string
  temperature?: number
}

// Default to the latest recommended model
let currentConfig: GeminiConfig = {
  apiKey: process.env.GEMINI_API_KEY || '',
  model: process.env.GEMINI_MODEL || 'gemini-3.8-flash',
  temperature: 0.2
}

export class GeminiService {
  static setConfig(newConfig: Partial<GeminiConfig>) {
    currentConfig = { ...currentConfig, ...newConfig }
  }

  static getConfig() {
    return {
      hasKey: !!currentConfig.apiKey,
      model: currentConfig.model,
      temperature: currentConfig.temperature,
      provider: 'Google AI Studio (Gemini)'
    }
  }

  private static getClient() {
    const key = currentConfig.apiKey || process.env.GEMINI_API_KEY
    if (!key) return null
    return new GoogleGenAI({ apiKey: key })
  }

  /**
   * Universal Structured JSON completion with retry & fallback
   */
  static async generateJson<T>(systemInstruction: string, prompt: string, fallbackGenerator: () => T): Promise<{ data: T; source: 'gemini-api' | 'verified-heuristic-engine'; modelUsed: string }> {
    const client = this.getClient()

    if (!client) {
      // Graceful fallback to verified deterministic engine
      return {
        data: fallbackGenerator(),
        source: 'verified-heuristic-engine',
        modelUsed: 'Deterministic Expert Rule Engine'
      }
    }

    try {
      const response = await client.models.generateContent({
        model: currentConfig.model,
        contents: `${systemInstruction}\n\nTask and Input:\n${prompt}\n\nIMPORTANT: Respond with pure valid JSON only, without any markdown formatting or backticks.`,
        config: {
          responseMimeType: 'application/json',
          temperature: currentConfig.temperature
        }
      })

      const text = response.text || ''
      const cleaned = text.trim().replace(/^```json\s*/i, '').replace(/\s*```$/i, '')
      const parsed = JSON.parse(cleaned) as T
      return {
        data: parsed,
        source: 'gemini-api',
        modelUsed: currentConfig.model
      }
    } catch (err: any) {
      console.warn('Gemini API call failed, falling back to heuristic engine:', err.message || err)
      return {
        data: fallbackGenerator(),
        source: 'verified-heuristic-engine',
        modelUsed: `Fallback (API error: ${err.message || 'unknown'})`
      }
    }
  }
}
