import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export interface DemoLead {
  id: string
  fullName: string
  instituteName: string
  email: string
  phone: string
  city: string
  studentsCount: string
  interestedFeatures: string[]
  preferredDemoDate: string
  additionalRequirements?: string
  status: 'New' | 'Contacted' | 'Demo Scheduled' | 'Demo Completed' | 'Qualified' | 'Converted' | 'Lost'
  createdAt: string
  internalNotes?: string
}

const LEADS_FILE = path.join(__dirname, '../data/leads.json')


export class LeadService {
  private static ensureDataDir() {
    const dir = path.dirname(LEADS_FILE)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    if (!fs.existsSync(LEADS_FILE)) {
      fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2))
    }
  }

  static getAllLeads(): DemoLead[] {
    try {
      this.ensureDataDir()
      const raw = fs.readFileSync(LEADS_FILE, 'utf-8')
      return JSON.parse(raw) as DemoLead[]
    } catch (err) {
      console.error('Error reading leads:', err)
      return []
    }
  }

  static createLead(data: Omit<DemoLead, 'id' | 'createdAt' | 'status'>): DemoLead {
    this.ensureDataDir()
    const leads = this.getAllLeads()
    const newLead: DemoLead = {
      ...data,
      id: `lead-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      status: 'New',
      createdAt: new Date().toISOString()
    }
    leads.unshift(newLead)
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2))
    return newLead
  }

  static updateLeadStatus(id: string, status: DemoLead['status'], notes?: string): DemoLead | null {
    this.ensureDataDir()
    const leads = this.getAllLeads()
    const idx = leads.findIndex(l => l.id === id)
    if (idx === -1) return null

    leads[idx].status = status
    if (notes !== undefined) {
      leads[idx].internalNotes = notes
    }
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2))
    return leads[idx]
  }

  static getStats() {
    const leads = this.getAllLeads()
    return {
      total: leads.length,
      new: leads.filter(l => l.status === 'New').length,
      scheduled: leads.filter(l => l.status === 'Demo Scheduled').length,
      qualified: leads.filter(l => l.status === 'Qualified').length,
      converted: leads.filter(l => l.status === 'Converted').length
    }
  }
}
