import { Router, Request, Response } from 'express'
import { LeadService } from '../services/leadService'

export const leadRoutes = Router()

leadRoutes.post('/', (req: Request, res: Response) => {
  try {
    const {
      fullName,
      instituteName,
      email,
      phone,
      city,
      studentsCount,
      interestedFeatures,
      preferredDemoDate,
      additionalRequirements
    } = req.body

    // Server-side validation
    if (!fullName || !instituteName || !email || !phone || !city) {
      return res.status(400).json({
        success: false,
        message: 'Missing required contact information. Please complete all required fields.'
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      })
    }

    const lead = LeadService.createLead({
      fullName,
      instituteName,
      email,
      phone,
      city,
      studentsCount: studentsCount || 'Under 100',
      interestedFeatures: Array.isArray(interestedFeatures) ? interestedFeatures : [],
      preferredDemoDate: preferredDemoDate || new Date().toISOString().split('T')[0],
      additionalRequirements
    })

    return res.status(201).json({
      success: true,
      message: 'Demo inquiry successfully submitted and registered with our enterprise sales desk.',
      lead
    })
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: err.message || 'Internal server error while processing demo booking.'
    })
  }
})

leadRoutes.get('/', (req: Request, res: Response) => {
  try {
    const leads = LeadService.getAllLeads()
    const stats = LeadService.getStats()
    return res.json({
      success: true,
      leads,
      stats
    })
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: err.message || 'Failed to retrieve sales leads.'
    })
  }
})

leadRoutes.patch('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { status, notes } = req.body

    const validStatuses = ['New', 'Contacted', 'Demo Scheduled', 'Demo Completed', 'Qualified', 'Converted', 'Lost']
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`
      })
    }

    const updated = LeadService.updateLeadStatus(id, status, notes)
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found.'
      })
    }

    return res.json({
      success: true,
      lead: updated
    })
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: err.message || 'Failed to update lead status.'
    })
  }
})
