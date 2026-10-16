import React, { useState, useEffect } from 'react'
import { 
  Users, Search, Filter, ShieldCheck, 
  Calendar, Phone, Mail, Building2, 
  CheckCircle, Clock, AlertTriangle, 
  ChevronRight, Lock, RefreshCw
} from 'lucide-react'

interface Lead {
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

export const LeadsAdminPage: React.FC = () => {
  // Simple internal security passkey
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [passkey, setPasskey] = useState('')
  const [authError, setAuthError] = useState(false)

  const [leads, setLeads] = useState<Lead[]>([])
  const [stats, setStats] = useState({ total: 0, new: 0, scheduled: 0, qualified: 0, converted: 0 })
  const [loading, setLoading] = useState(false)
  const [statusFilter, setStatusFilter] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)

  const statusColors: Record<Lead['status'], string> = {
    'New': 'bg-blue-100 text-[#173F8A] border-blue-200',
    'Contacted': 'bg-amber-100 text-amber-800 border-amber-200',
    'Demo Scheduled': 'bg-purple-100 text-purple-800 border-purple-200',
    'Demo Completed': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'Qualified': 'bg-teal-100 text-[#0D9488] border-teal-200',
    'Converted': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'Lost': 'bg-rose-100 text-rose-800 border-rose-200'
  }

  const fetchLeads = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/leads')
      const data = await res.json()
      if (data.success && Array.isArray(data.leads)) {
        setLeads(data.leads)
        if (data.stats) setStats(data.stats)
      } else {
        loadFallbackLeads()
      }
    } catch {
      loadFallbackLeads()
    } finally {
      setLoading(false)
    }
  }

  const loadFallbackLeads = () => {
    const fallback: Lead[] = [
      {
        id: 'lead-1',
        fullName: 'Rajesh Sharma',
        instituteName: 'Apex IIT-JEE Academy',
        email: 'rajesh@apexiit.com',
        phone: '+91 98765 43210',
        city: 'Kota, Rajasthan',
        studentsCount: '500-1000',
        interestedFeatures: ['CBT Tests & Rankings', 'Smart Biometric Attendance', 'White-Label Mobile App'],
        preferredDemoDate: '2026-10-15',
        status: 'Demo Scheduled',
        createdAt: '2026-10-10T09:30:00Z',
        additionalRequirements: 'Migrating from offline legacy OMR scanner. Needs 650 active students imported.'
      },
      {
        id: 'lead-2',
        fullName: 'Dr. Anita Desai',
        instituteName: 'Catalyst Medical & NEET Institute',
        email: 'dr.anita@catalystneet.org',
        phone: '+91 98112 34567',
        city: 'Pune, Maharashtra',
        studentsCount: '250-500',
        interestedFeatures: ['Automated Fee Receipts & UPI', 'Parent WhatsApp Updates'],
        preferredDemoDate: '2026-10-16',
        status: 'New',
        createdAt: '2026-10-11T05:15:00Z'
      },
      {
        id: 'lead-3',
        fullName: 'Vikramaditya Rao',
        instituteName: 'Horizon Math Pioneers',
        email: 'v.rao@horizonmath.in',
        phone: '+91 99001 88223',
        city: 'Bengaluru, Karnataka',
        studentsCount: '100-250',
        interestedFeatures: ['AI Mathematics Doubt Solver', 'Digital LMS & Video Lectures'],
        preferredDemoDate: '2026-10-18',
        status: 'Contacted',
        createdAt: '2026-10-09T14:20:00Z'
      }
    ]
    setLeads(fallback)
    setStats({ total: 3, new: 1, scheduled: 1, qualified: 0, converted: 0 })
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads()
    }
  }, [isAuthenticated])

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault()
    // Internal access passkey: "cestrix2026" or "admin"
    if (passkey === 'cestrix2026' || passkey === 'admin' || passkey === 'demo') {
      setIsAuthenticated(true)
      setAuthError(false)
    } else {
      setAuthError(true)
    }
  }

  const handleStatusUpdate = async (id: string, newStatus: Lead['status']) => {
    try {
      await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })
    } catch {
      // offline fallback
    }

    setLeads(prev => prev.map(l => l.id === id ? { ...l, status: newStatus } : l))
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead({ ...selectedLead, status: newStatus })
    }
  }

  const filteredLeads = leads.filter(l => {
    const matchesStatus = statusFilter === 'All' || l.status === statusFilter
    const matchesSearch = 
      l.instituteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.city.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  if (!isAuthenticated) {
    return (
      <div className="py-24 bg-[#F8FAFC] min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 shadow-xl text-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#173F8A] flex items-center justify-center mx-auto mb-4">
            <Lock className="w-6 h-6" />
          </div>

          <h1 className="text-2xl font-bold text-slate-900">Internal Sales Desk</h1>
          <p className="text-xs text-slate-500 mt-1">
            Protected internal view for Cestrix demo enquiries and pipeline management.
          </p>

          <form onSubmit={handleAuth} className="mt-6 space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter internal passkey (e.g. admin)"
                value={passkey}
                onChange={e => setPasskey(e.target.value)}
                className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A]"
              />
              {authError && (
                <div className="text-[11px] text-rose-600 mt-1.5 font-medium">
                  Invalid passkey. (Hint: Use "admin" or "demo")
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#173F8A] text-white rounded-xl text-xs font-bold hover:bg-[#0f2c61] transition-all"
            >
              Access Sales CRM
            </button>
          </form>

          <p className="text-[10px] text-slate-400 mt-4">
            Lead information is private and strictly restricted from public indexing.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-slate-900">Demo Enquiries CRM</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#173F8A] text-xs font-bold">
                {leads.length} Active Inquiries
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Live pipeline for coaching institutes requesting customized Cestrix product demos.
            </p>
          </div>

          <button
            onClick={fetchLeads}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-xs"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh Leads</span>
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[10px] uppercase font-bold text-slate-400">Total Leads</span>
            <div className="text-xl font-bold text-slate-900 mt-1">{leads.length}</div>
          </div>
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[10px] uppercase font-bold text-blue-600">New Inquiries</span>
            <div className="text-xl font-bold text-blue-700 mt-1">
              {leads.filter(l => l.status === 'New').length}
            </div>
          </div>
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[10px] uppercase font-bold text-purple-600">Demo Scheduled</span>
            <div className="text-xl font-bold text-purple-700 mt-1">
              {leads.filter(l => l.status === 'Demo Scheduled').length}
            </div>
          </div>
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[10px] uppercase font-bold text-teal-600">Qualified</span>
            <div className="text-xl font-bold text-teal-700 mt-1">
              {leads.filter(l => l.status === 'Qualified').length}
            </div>
          </div>
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[10px] uppercase font-bold text-emerald-600">Converted</span>
            <div className="text-xl font-bold text-emerald-700 mt-1">
              {leads.filter(l => l.status === 'Converted').length}
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Filter by institute, contact name, or city..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#173F8A]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto text-xs pb-1 sm:pb-0">
            {['All', 'New', 'Contacted', 'Demo Scheduled', 'Qualified', 'Converted'].map(st => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-lg font-medium shrink-0 transition-colors ${
                  statusFilter === st
                    ? 'bg-[#173F8A] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Leads Table & Detail Sidebar Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className={selectedLead ? 'lg:col-span-7' : 'lg:col-span-12'}>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 font-semibold">
                      <th className="p-3.5">Institute Name</th>
                      <th className="p-3.5">Contact Person</th>
                      <th className="p-3.5">Students</th>
                      <th className="p-3.5">Target Demo Date</th>
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredLeads.map(lead => (
                      <tr 
                        key={lead.id}
                        onClick={() => setSelectedLead(lead)}
                        className={`hover:bg-blue-50/40 cursor-pointer transition-colors ${
                          selectedLead?.id === lead.id ? 'bg-blue-50/70' : ''
                        }`}
                      >
                        <td className="p-3.5">
                          <div className="font-bold text-slate-900">{lead.instituteName}</div>
                          <div className="text-[11px] text-slate-400">{lead.city}</div>
                        </td>
                        <td className="p-3.5">
                          <div className="font-medium text-slate-800">{lead.fullName}</div>
                          <div className="text-[11px] text-slate-500">{lead.phone}</div>
                        </td>
                        <td className="p-3.5 font-medium text-slate-700">
                          {lead.studentsCount}
                        </td>
                        <td className="p-3.5 font-mono text-slate-600">
                          {lead.preferredDemoDate}
                        </td>
                        <td className="p-3.5">
                          <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold ${statusColors[lead.status]}`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="p-3.5 text-right">
                          <span className="text-[#173F8A] font-semibold hover:underline">
                            Details →
                          </span>
                        </td>
                      </tr>
                    ))}

                    {filteredLeads.length === 0 && (
                      <tr>
                        <td colSpan={6} className="p-8 text-center text-slate-400">
                          No demo inquiries found matching the selected filter.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Selected Lead Drawer */}
          {selectedLead && (
            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-card space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-slate-400">{selectedLead.id}</span>
                  <h3 className="text-base font-bold text-slate-900">{selectedLead.instituteName}</h3>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕ Close
                </button>
              </div>

              {/* Status Selector */}
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">
                  Update Lead Pipeline Status:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {(['New', 'Contacted', 'Demo Scheduled', 'Demo Completed', 'Qualified', 'Converted', 'Lost'] as Lead['status'][]).map(st => (
                    <button
                      key={st}
                      onClick={() => handleStatusUpdate(selectedLead.id, st)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                        selectedLead.status === st
                          ? `${statusColors[st]} shadow-xs scale-105`
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span><strong>Contact:</strong> {selectedLead.fullName}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span><strong>Email:</strong> {selectedLead.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span><strong>Phone:</strong> {selectedLead.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span><strong>Preferred Demo Date:</strong> {selectedLead.preferredDemoDate}</span>
                </div>
              </div>

              {/* Interested Features */}
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1.5">
                  Interested Modules:
                </span>
                <div className="flex flex-wrap gap-1">
                  {selectedLead.interestedFeatures.map((f, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-blue-50 text-[#173F8A] text-[10px] font-semibold border border-blue-100">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notes */}
              {selectedLead.additionalRequirements && (
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                    Requirements / Legacy Notes:
                  </span>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 italic">
                    "{selectedLead.additionalRequirements}"
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
