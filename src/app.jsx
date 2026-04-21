import { useState } from 'react';

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [hoveredAction, setHoveredAction] = useState(null);
  const [pricingTier, setPricingTier] = useState(1);
  const [addOns, setAddOns] = useState({ storage: false, snowGuards: false, critterGuards: false, evCharger: false, energyMonitor: false });
  
  const T = {
    bg: "#0A0D10",
    surface: "#11151A", 
    border: "#1E2530",
    accent: "#F0A830",
    green: "#2DD4A8",
    red: "#F87171",
    text: "#E8EDF3",
    muted: "#8B95A3",
    dim: "#4A5568",
  };

  const steps = [
    { id: 1, title: "Appointment Scheduled", status: "completed", date: "Dec 15, 2024 5:00 PM" },
    { id: 2, title: "Photon Path Walk Around", status: "current", date: "During Visit" },
    { id: 3, title: "Aurora Design Session", status: "pending", date: "During Visit" },
    { id: 4, title: "Proposal Presentation", status: "pending", date: "During Visit" },
    { id: 5, title: "Site Assessment", status: "pending", date: "TBD" },
    { id: 6, title: "RSM Call", status: "pending", date: "TBD" },
    { id: 7, title: "Contract & Financing", status: "pending", date: "TBD" },
    { id: 8, title: "Venture App Enrollment", status: "pending", date: "TBD" },
    { id: 9, title: "Referrals & Lawn Sign Photo", status: "pending", date: "TBD" },
    { id: 10, title: "Deal Approved", status: "pending", date: "TBD" }
  ];

  const quickActions = [
    { label: "Scan Utility Bill", icon: "📄" },
    { label: "Schedule Site Assessment", icon: "🏠" },
    { label: "Schedule Contract Signing", icon: "✍️" },
    { label: "Schedule RSM Call", icon: "📞" },
    { label: "Launch Aurora", icon: "☀️" },
    { label: "Send Proposal", icon: "📊" }
  ];

  const getStepStatus = (step) => {
    if (step.status === "completed") return T.green;
    if (step.status === "current") return T.accent;
    return T.dim;
  };

  const previousMeetings = [
    { date: "Mar 15, 2023", type: "Initial Consultation", rep: "Mike Chen", outcome: "Not ready - waiting for roof repair", duration: "45 min" },
    { date: "Aug 22, 2023", type: "Follow-up Call", rep: "Sarah Wilson", outcome: "Still interested, roof fixed", duration: "15 min" },
    { date: "Nov 10, 2024", type: "Re-engagement Call", rep: "Inside Sales", outcome: "Ready to move forward", duration: "12 min" }
  ];

  const inquiryHistory = [
    { date: "Feb 28, 2023", source: "Solar Reviews", action: "Website form submission", details: "Initial interest inquiry" },
    { date: "Mar 01, 2023", source: "Phone", action: "Inbound call", details: "Asked about pricing and timeline" },
    { date: "Jul 18, 2023", source: "Email", action: "Responded to follow-up", details: "Roof repair completed, ready to discuss" },
    { date: "Nov 08, 2024", source: "Solar Reviews", action: "New inquiry", details: "Urgent - bills getting too high" }
  ];

  return (
    <div style={{ 
      backgroundColor: T.bg, 
      color: T.text, 
      fontFamily: "'Outfit', sans-serif",
      minHeight: "100vh",
      padding: "20px"
    }}>
      {/* Header */}
      <div style={{ 
        backgroundColor: T.surface, 
        borderRadius: "8px", 
        padding: "20px", 
        marginBottom: "20px",
        border: `1px solid ${T.border}`
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "600" }}>Robert & Jennifer Martinez</h1>
              <span style={{ 
                backgroundColor: T.green + "20", 
                color: T.green, 
                padding: "4px 8px", 
                borderRadius: "4px", 
                fontSize: "12px",
                fontWeight: "500"
              }}>
                ACTIVE OPPORTUNITY
              </span>
            </div>
            <div style={{ color: T.muted, fontSize: "14px", marginBottom: "8px" }}>
              📍 245 Elm Street, Stamford, CT 06902 • 📱 (203) 555-0134
            </div>
            <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
              <span><strong>Utility:</strong> <span style={{ color: T.accent }}>Eversource Energy</span></span>
              <span><strong>Lead Source:</strong> Solar Reviews</span>
              <span><strong>Avg Monthly Bill:</strong> $287</span>
              <span><strong>Rep:</strong> Alex Thompson</span>
              <span><strong>Booked By:</strong> Sarah Mitchell (Inside Sales)</span>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "16px", fontWeight: "600", marginBottom: "4px" }}>Next: Tuesday, Dec 15</div>
            <div style={{ color: T.accent, fontSize: "14px" }}>5:00 PM - 6:30 PM</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ 
          display: "flex", 
          gap: "12px", 
          flexWrap: "wrap",
          padding: "16px 0",
          borderTop: `1px solid ${T.border}`
        }}>
          <div style={{ color: T.muted, fontSize: "12px", fontWeight: "600", alignSelf: "center" }}>QUICK ACTIONS:</div>
          {quickActions.map((action, i) => (
            <button
              key={i}
              onMouseEnter={() => setHoveredAction(i)}
              onMouseLeave={() => setHoveredAction(null)}
              style={{
                backgroundColor: hoveredAction === i ? T.accent + "20" : T.border,
                color: hoveredAction === i ? T.accent : T.text,
                border: `1px solid ${hoveredAction === i ? T.accent : T.border}`,
                padding: "8px 12px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              {action.icon} {action.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Main Timeline */}
        <div style={{ flex: "0 0 280px" }}>
          <div style={{
            backgroundColor: T.surface,
            borderRadius: "8px", 
            border: `1px solid ${T.border}`,
            overflow: "hidden"
          }}>
            <div style={{ 
              padding: "20px", 
              borderBottom: `1px solid ${T.border}`,
              backgroundColor: T.border + "30"
            }}>
              <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>Customer Journey Timeline</h2>
            </div>
            
            <div style={{ padding: "20px" }}>
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  style={{ 
                    display: "flex", 
                    alignItems: "flex-start", 
                    marginBottom: index === steps.length - 1 ? "0" : "8px",
                    cursor: "pointer",
                    padding: "8px 10px",
                    borderRadius: "6px",
                    backgroundColor: activeStep === step.id ? T.border + "50" : "transparent",
                    border: `1px solid ${activeStep === step.id ? T.accent + "30" : "transparent"}`
                  }}
                >
                  <div style={{ 
                    position: "relative", 
                    marginRight: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}>
                    <div style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: getStepStatus(step),
                      border: `2px solid ${getStepStatus(step)}30`,
                      zIndex: 1
                    }} />
                    {index < steps.length - 1 && (
                      <div style={{
                        width: "2px",
                        height: "24px",
                        backgroundColor: T.border,
                        marginTop: "4px"
                      }} />
                    )}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      display: "flex", 
                      justifyContent: "space-between", 
                      alignItems: "center",
                      marginBottom: "4px"
                    }}>
                      <h3 style={{
                        margin: 0,
                        fontSize: "13px",
                        fontWeight: "600",
                        color: activeStep === step.id ? T.accent : T.text
                      }}>
                        {step.title}
                      </h3>
                      {step.status !== "pending" && <span style={{
                        fontSize: "10px",
                        color: T.muted,
                        fontFamily: "'JetBrains Mono', monospace"
                      }}>
                        {step.date}
                      </span>}
                    </div>
                    <div style={{ 
                      fontSize: "12px", 
                      color: T.muted,
                      textTransform: "uppercase",
                      fontWeight: "500"
                    }}>
                      {step.status === "completed" && "✅ Completed"}
                      {step.status === "current" && "🔄 In Progress"}
                      {step.status === "pending" && "⏳ Pending"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Dynamic Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            backgroundColor: T.surface,
            borderRadius: "8px",
            border: `1px solid ${T.border}`,
            overflow: "hidden"
          }}>
            {activeStep === 1 && (
              <>
                <div style={{ 
                  padding: "20px", 
                  borderBottom: `1px solid ${T.border}`,
                  backgroundColor: T.border + "30"
                }}>
                  <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>Pre-Appointment Brief</h3>
                </div>
                <div style={{ padding: "20px" }}>
                  {/* AI Call Insights */}
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>📞 AI BOOKING INSIGHTS</h4>
                    <div style={{ 
                      backgroundColor: T.border + "30", 
                      padding: "12px", 
                      borderRadius: "6px",
                      fontSize: "13px",
                      lineHeight: "1.4"
                    }}>
                      <p style={{ margin: "0 0 8px 0" }}><strong>Key Points:</strong> Bills increased 40% this year, very motivated. Mentioned neighbor got solar and loves it.</p>
                      <p style={{ margin: "0 0 8px 0" }}><strong>Concerns:</strong> Worried about roof damage, wants to understand financing options.</p>
                      <p style={{ margin: "0" }}><strong>Timeline:</strong> Wants to move quickly before winter, ideal install in spring.</p>
                    </div>
                  </div>

                  {/* Previous Meeting History */}
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>📋 PREVIOUS MEETINGS</h4>
                    {previousMeetings.map((meeting, i) => (
                      <div key={i} style={{ 
                        backgroundColor: T.border + "20", 
                        padding: "10px", 
                        borderRadius: "4px", 
                        marginBottom: "8px",
                        fontSize: "12px"
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                          <strong style={{ color: T.text }}>{meeting.date}</strong>
                          <span style={{ color: T.muted }}>{meeting.duration}</span>
                        </div>
                        <div style={{ color: T.muted, marginBottom: "2px" }}>{meeting.type} • {meeting.rep}</div>
                        <div style={{ color: T.text }}>{meeting.outcome}</div>
                      </div>
                    ))}
                  </div>

                  {/* Inquiry History */}
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>🔍 INQUIRY HISTORY</h4>
                    {inquiryHistory.map((inquiry, i) => (
                      <div key={i} style={{ 
                        backgroundColor: T.border + "20", 
                        padding: "10px", 
                        borderRadius: "4px", 
                        marginBottom: "8px",
                        fontSize: "12px"
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                          <strong style={{ color: T.text }}>{inquiry.date}</strong>
                          <span style={{ color: T.green }}>{inquiry.source}</span>
                        </div>
                        <div style={{ color: T.muted, marginBottom: "2px" }}>{inquiry.action}</div>
                        <div style={{ color: T.text }}>{inquiry.details}</div>
                      </div>
                    ))}
                  </div>

                  {/* Utility Info */}
                  <div>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>⚡ UTILITY INSIGHTS</h4>
                    <div style={{ 
                      backgroundColor: T.border + "20", 
                      padding: "12px", 
                      borderRadius: "6px",
                      fontSize: "12px"
                    }}>
                      <div style={{ marginBottom: "8px" }}>
                        <strong>Rate Increases:</strong> Eversource raised rates 18% in Jan 2024, 12% in Jul 2023
                      </div>
                      <div style={{ marginBottom: "8px" }}>
                        <strong>Current Rate:</strong> $0.284/kWh (peak), $0.198/kWh (off-peak)
                      </div>
                      <div>
                        <button style={{
                          backgroundColor: T.accent + "20",
                          color: T.accent,
                          border: `1px solid ${T.accent}`,
                          padding: "6px 12px",
                          borderRadius: "4px",
                          fontSize: "11px",
                          cursor: "pointer"
                        }}>
                          📊 View Bill Insights
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeStep === 2 && (
              <>
                <div style={{ padding: "20px", borderBottom: `1px solid ${T.border}`, backgroundColor: T.border + "30" }}>
                  <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>Photon Path Walk Around</h3>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: "16px" }}>
                    <h4 style={{ margin: "0 0 8px 0", fontSize: "14px", color: T.accent }}>📸 PHOTO DOCUMENTATION</h4>
                    <p style={{ margin: "0 0 12px 0", fontSize: "13px", color: T.muted }}>Capture roof condition, obstacles, electrical panel</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                      {["Roof Overview", "Panel Access", "Obstacles", "Electrical"].map(photo => (
                        <div key={photo} style={{
                          backgroundColor: T.border + "30",
                          padding: "20px 12px",
                          borderRadius: "6px",
                          textAlign: "center",
                          fontSize: "12px",
                          border: `2px dashed ${T.border}`
                        }}>
                          📷 {photo}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeStep === 3 && (
              <>
                <div style={{ padding: "20px", borderBottom: `1px solid ${T.border}`, backgroundColor: T.border + "30" }}>
                  <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>Aurora Design Session</h3>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ textAlign: "center", marginBottom: "16px" }}>
                    <button style={{
                      backgroundColor: T.accent,
                      color: T.bg,
                      border: "none",
                      padding: "12px 24px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                      width: "100%"
                    }}>
                      ☀️ Launch Aurora Design Tool
                    </button>
                  </div>
                  <div style={{ fontSize: "13px", color: T.muted }}>
                    <p>✅ Customer address pre-loaded</p>
                    <p>✅ Photon Path photos integrated</p>
                    <p>⏳ System sizing based on $287 avg bill</p>
                  </div>
                </div>
              </>
            )}

            {activeStep === 4 && (() => {
              const pricingOptions = [
                { tier: 0, customerRate: "19¢", customerRateNum: 0.19, commission: "$0.05/W", commissionLabel: "5¢/W", label: "Value", monthlyBill: "$152", annualSavings: "$1,620", systemCost: "$24,200" },
                { tier: 1, customerRate: "20¢", customerRateNum: 0.20, commission: "$0.10/W", commissionLabel: "10¢/W", label: "Standard", monthlyBill: "$160", annualSavings: "$1,524", systemCost: "$25,500" },
                { tier: 2, customerRate: "21¢", customerRateNum: 0.21, commission: "$0.15/W", commissionLabel: "15¢/W", label: "Premium", monthlyBill: "$168", annualSavings: "$1,428", systemCost: "$26,800" }
              ];
              const selected = pricingOptions[pricingTier];
              return (
              <>
                <div style={{ padding: "20px", borderBottom: `1px solid ${T.border}`, backgroundColor: T.border + "30" }}>
                  <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>Proposal Presentation</h3>
                </div>
                <div style={{ padding: "20px" }}>
                  {/* Pricing Slider */}
                  <div style={{ marginBottom: "24px" }}>
                    <h4 style={{ margin: "0 0 16px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>💲 PRICING TIER</h4>

                    {/* Slider Track */}
                    <div style={{ padding: "0 4px", marginBottom: "12px" }}>
                      <input
                        type="range"
                        min="0"
                        max="2"
                        step="1"
                        value={pricingTier}
                        onChange={(e) => setPricingTier(Number(e.target.value))}
                        style={{
                          width: "100%",
                          height: "6px",
                          appearance: "none",
                          WebkitAppearance: "none",
                          background: `linear-gradient(to right, ${T.green}, ${T.accent}, ${T.red})`,
                          borderRadius: "3px",
                          outline: "none",
                          cursor: "pointer"
                        }}
                      />
                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px", fontSize: "11px", color: T.muted }}>
                        <span>19¢/kWh</span>
                        <span>20¢/kWh</span>
                        <span>21¢/kWh</span>
                      </div>
                    </div>

                    {/* Selected Tier Card */}
                    <div style={{
                      backgroundColor: T.accent + "15",
                      border: `1px solid ${T.accent}40`,
                      borderRadius: "8px",
                      padding: "16px",
                      textAlign: "center",
                      marginBottom: "12px"
                    }}>
                      <div style={{ fontSize: "11px", color: T.muted, textTransform: "uppercase", fontWeight: "600", marginBottom: "4px" }}>{selected.label} Pricing</div>
                      <div style={{ fontSize: "28px", fontWeight: "700", color: T.accent, fontFamily: "'JetBrains Mono', monospace" }}>{selected.customerRate}<span style={{ fontSize: "14px", color: T.muted }}>/kWh</span></div>
                      <div style={{ fontSize: "13px", color: T.text, marginTop: "4px" }}>Customer Rate</div>
                    </div>

                    {/* Two-column details */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "12px" }}>
                      <div style={{ backgroundColor: T.border + "30", padding: "12px", borderRadius: "6px", textAlign: "center" }}>
                        <div style={{ fontSize: "11px", color: T.muted, marginBottom: "4px" }}>Rep Commission</div>
                        <div style={{ fontSize: "20px", fontWeight: "700", color: T.green, fontFamily: "'JetBrains Mono', monospace" }}>{selected.commissionLabel}</div>
                      </div>
                      <div style={{ backgroundColor: T.border + "30", padding: "12px", borderRadius: "6px", textAlign: "center" }}>
                        <div style={{ fontSize: "11px", color: T.muted, marginBottom: "4px" }}>Customer Monthly</div>
                        <div style={{ fontSize: "20px", fontWeight: "700", color: T.text, fontFamily: "'JetBrains Mono', monospace" }}>{selected.monthlyBill}</div>
                      </div>
                    </div>

                    <div style={{ backgroundColor: T.border + "20", padding: "12px", borderRadius: "6px", fontSize: "12px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                        <span style={{ color: T.muted }}>Annual Savings vs. Utility:</span>
                        <span style={{ color: T.green, fontWeight: "600" }}>{selected.annualSavings}</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                        <span style={{ color: T.muted }}>System Cost (11.2 kW):</span>
                        <span>{selected.systemCost}</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ color: T.muted }}>Commission (11,200W):</span>
                        <span style={{ color: T.green, fontWeight: "600" }}>${(selected.tier === 0 ? 560 : selected.tier === 1 ? 1120 : 1680).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Compare */}
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>📊 ALL OPTIONS</h4>
                    {pricingOptions.map((opt, i) => (
                      <div key={i}
                        onClick={() => setPricingTier(i)}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          backgroundColor: pricingTier === i ? T.accent + "15" : T.border + "20",
                          border: `1px solid ${pricingTier === i ? T.accent + "40" : T.border}`,
                          padding: "10px 12px",
                          borderRadius: "4px",
                          marginBottom: "6px",
                          fontSize: "12px",
                          cursor: "pointer"
                        }}
                      >
                        <div>
                          <strong style={{ color: pricingTier === i ? T.accent : T.text }}>{opt.customerRate}/kWh</strong>
                          <span style={{ color: T.muted, marginLeft: "8px" }}>{opt.label}</span>
                        </div>
                        <div style={{ color: T.green, fontWeight: "600" }}>{opt.commission}</div>
                      </div>
                    ))}
                  </div>

                  {/* Add-On Products */}
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>🔌 ADD-ON PRODUCTS</h4>
                    {[
                      { key: "storage", label: "Tesla Powerwall", icon: "🔋", price: "+$12,500", monthly: "+$45/mo" },
                      { key: "snowGuards", label: "Snow Guards", icon: "❄️", price: "+$1,200", monthly: "+$4/mo" },
                      { key: "critterGuards", label: "Critter Guards", icon: "🐿️", price: "+$800", monthly: "+$3/mo" },
                      { key: "evCharger", label: "EV Charger", icon: "⚡", price: "+$1,800", monthly: "+$7/mo" },
                      { key: "energyMonitor", label: "Energy Monitor", icon: "📊", price: "+$450", monthly: "+$2/mo" }
                    ].map((product) => (
                      <div key={product.key}
                        onClick={() => setAddOns(prev => ({ ...prev, [product.key]: !prev[product.key] }))}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          backgroundColor: addOns[product.key] ? T.green + "10" : T.border + "20",
                          border: `1px solid ${addOns[product.key] ? T.green + "40" : T.border}`,
                          padding: "10px 12px",
                          borderRadius: "6px",
                          marginBottom: "6px",
                          fontSize: "12px",
                          cursor: "pointer",
                          transition: "all 0.2s"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "4px",
                            border: `2px solid ${addOns[product.key] ? T.green : T.dim}`,
                            backgroundColor: addOns[product.key] ? T.green : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "10px",
                            color: T.bg,
                            fontWeight: "700",
                            flexShrink: 0
                          }}>
                            {addOns[product.key] && "✓"}
                          </div>
                          <span>{product.icon} {product.label}</span>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ color: addOns[product.key] ? T.green : T.muted, fontWeight: "600" }}>{product.price}</div>
                          <div style={{ color: T.muted, fontSize: "10px" }}>{product.monthly}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Lease Options */}
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>📋 LEASE OPTIONS</h4>
                    <div style={{
                      backgroundColor: T.accent + "10",
                      border: `1px solid ${T.accent}30`,
                      padding: "14px",
                      borderRadius: "6px",
                      marginBottom: "8px"
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                        <strong style={{ fontSize: "13px", color: T.accent }}>Monthly Lease</strong>
                        <span style={{ fontSize: "10px", backgroundColor: T.accent + "20", color: T.accent, padding: "2px 6px", borderRadius: "3px" }}>MOST POPULAR</span>
                      </div>
                      <div style={{ fontSize: "12px", color: T.muted, marginBottom: "8px" }}>25-year term, no money down, includes maintenance</div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", fontSize: "12px" }}>
                        <div><span style={{ color: T.muted }}>Monthly:</span> <strong style={{ color: T.text }}>{selected.monthlyBill}</strong></div>
                        <div><span style={{ color: T.muted }}>Escalator:</span> 2.9%/yr</div>
                      </div>
                    </div>
                    <div style={{
                      backgroundColor: T.border + "30",
                      border: `1px solid ${T.border}`,
                      padding: "14px",
                      borderRadius: "6px"
                    }}>
                      <div style={{ marginBottom: "6px" }}>
                        <strong style={{ fontSize: "13px" }}>Prepaid Lease</strong>
                      </div>
                      <div style={{ fontSize: "12px", color: T.muted, marginBottom: "8px" }}>25-year term, one-time upfront payment, includes maintenance</div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", fontSize: "12px" }}>
                        <div><span style={{ color: T.muted }}>Prepaid:</span> <strong style={{ color: T.text }}>{selected.systemCost}</strong></div>
                        <div><span style={{ color: T.muted }}>Escalator:</span> None</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "8px" }}>
                    <button style={{
                      backgroundColor: T.accent + "15",
                      color: T.accent,
                      border: `1px solid ${T.accent}40`,
                      padding: "8px 12px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      cursor: "pointer",
                      flex: 1
                    }}>
                      📄 View PDF
                    </button>
                    <button style={{
                      backgroundColor: T.border,
                      color: T.text,
                      border: `1px solid ${T.border}`,
                      padding: "8px 12px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      cursor: "pointer",
                      flex: 1
                    }}>
                      📧 Email to Customer
                    </button>
                  </div>
                </div>
              </>
              );
            })()}

            {activeStep === 5 && (
              <>
                <div style={{ padding: "20px", borderBottom: `1px solid ${T.border}`, backgroundColor: T.border + "30" }}>
                  <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>Site Assessment</h3>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>📅 ASSESSMENT DETAILS</h4>
                    <div style={{ backgroundColor: T.border + "30", padding: "12px", borderRadius: "6px", fontSize: "12px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        <div><span style={{ color: T.muted }}>Date:</span> Dec 18, 2024</div>
                        <div><span style={{ color: T.muted }}>Time:</span> 9:00 AM - 11:00 AM</div>
                        <div><span style={{ color: T.muted }}>Assessor:</span> <span style={{ color: T.accent }}>Dave Richardson</span></div>
                        <div><span style={{ color: T.muted }}>Status:</span> <span style={{ color: T.accent }}>Scheduled</span></div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>📝 NOTES FROM SALES REP</h4>
                    <div style={{ backgroundColor: T.border + "20", padding: "12px", borderRadius: "6px", fontSize: "12px", lineHeight: "1.5" }}>
                      <p style={{ margin: "0 0 6px 0" }}>Roof was repaired in mid-2023 — new shingles on south-facing side. Customer mentioned a skylight near the ridge that may affect panel placement. Electrical panel is in the garage, looks like 200A service. Dog in backyard — call ahead before arriving.</p>
                      <div style={{ color: T.muted, fontSize: "11px", marginTop: "8px" }}>— Alex Thompson, Dec 15</div>
                    </div>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>🔍 ASSESSOR NOTES</h4>
                    <div style={{ backgroundColor: T.border + "20", padding: "12px", borderRadius: "6px", fontSize: "12px", lineHeight: "1.5", color: T.muted, fontStyle: "italic" }}>
                      Awaiting site visit — notes will appear here after assessment is completed.
                    </div>
                  </div>

                  <div>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>🏠 SITE STATUS</h4>
                    {[
                      { label: "Roof Condition", status: "Pending", icon: "🏗️", detail: "New shingles (2023), south-facing" },
                      { label: "Electrical Panel", status: "Pending", icon: "⚡", detail: "200A service, garage location" },
                      { label: "Structural Integrity", status: "Pending", icon: "🏛️", detail: "Awaiting assessment" },
                      { label: "Shading Analysis", status: "Pending", icon: "🌳", detail: "Minimal shading per Aurora model" },
                      { label: "Attic Access", status: "Pending", icon: "🔧", detail: "Awaiting assessment" },
                      { label: "Ground Conditions", status: "Pending", icon: "🌿", detail: "Awaiting assessment" }
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: T.border + "20",
                        padding: "10px 12px",
                        borderRadius: "4px",
                        marginBottom: "6px",
                        fontSize: "12px"
                      }}>
                        <div>
                          <span style={{ marginRight: "6px" }}>{item.icon}</span>
                          <strong>{item.label}</strong>
                          <div style={{ color: T.muted, fontSize: "11px", marginTop: "2px", marginLeft: "22px" }}>{item.detail}</div>
                        </div>
                        <span style={{
                          backgroundColor: T.accent + "20",
                          color: T.accent,
                          padding: "2px 8px",
                          borderRadius: "3px",
                          fontSize: "10px",
                          fontWeight: "600"
                        }}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeStep === 6 && (
              <>
                <div style={{ padding: "20px", borderBottom: `1px solid ${T.border}`, backgroundColor: T.border + "30" }}>
                  <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>RSM Call</h3>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>📞 CALL DETAILS</h4>
                    <div style={{ backgroundColor: T.border + "30", padding: "12px", borderRadius: "6px", fontSize: "12px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        <div><span style={{ color: T.muted }}>Scheduled:</span> Dec 20, 2024</div>
                        <div><span style={{ color: T.muted }}>Time:</span> 2:00 PM</div>
                        <div><span style={{ color: T.muted }}>RSM:</span> <span style={{ color: T.accent }}>James Walker</span></div>
                        <div><span style={{ color: T.muted }}>Status:</span> <span style={{ color: T.accent }}>Scheduled</span></div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <button style={{
                      backgroundColor: T.green,
                      color: T.bg,
                      border: "none",
                      padding: "12px 20px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                      width: "100%",
                      marginBottom: "8px"
                    }}>
                      📞 Start Call
                    </button>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button style={{
                        backgroundColor: T.border,
                        color: T.text,
                        border: `1px solid ${T.border}`,
                        padding: "8px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        cursor: "pointer",
                        flex: 1
                      }}>
                        🔇 Mute
                      </button>
                      <button style={{
                        backgroundColor: T.border,
                        color: T.text,
                        border: `1px solid ${T.border}`,
                        padding: "8px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        cursor: "pointer",
                        flex: 1
                      }}>
                        ⏸️ Hold
                      </button>
                      <button style={{
                        backgroundColor: T.red + "20",
                        color: T.red,
                        border: `1px solid ${T.red}40`,
                        padding: "8px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        cursor: "pointer",
                        flex: 1
                      }}>
                        📵 End
                      </button>
                    </div>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>📋 CALL PREP NOTES</h4>
                    <div style={{ backgroundColor: T.border + "20", padding: "12px", borderRadius: "6px", fontSize: "12px", lineHeight: "1.5" }}>
                      <p style={{ margin: "0 0 6px 0" }}><strong>Selected proposal:</strong> Option A — Premium (32 panels, 11.2 kW)</p>
                      <p style={{ margin: "0 0 6px 0" }}><strong>Customer concerns:</strong> Roof damage, financing terms</p>
                      <p style={{ margin: "0 0 6px 0" }}><strong>Site assessment:</strong> Pending — scheduled Dec 18</p>
                      <p style={{ margin: "0" }}><strong>Goal:</strong> Confirm proposal selection, answer financing questions, schedule contract signing</p>
                    </div>
                  </div>

                  <div>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>🎙️ CALL RECORDING</h4>
                    <div style={{ backgroundColor: T.border + "20", padding: "12px", borderRadius: "6px", fontSize: "12px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                        <span style={{ color: T.muted }}>Recording status</span>
                        <span style={{ color: T.muted }}>⏳ Not started</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ color: T.muted }}>AI transcription</span>
                        <span style={{ color: T.muted }}>⏳ Waiting for recording</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeStep === 8 && (
              <>
                <div style={{ padding: "20px", borderBottom: `1px solid ${T.border}`, backgroundColor: T.border + "30" }}>
                  <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>Venture App Enrollment</h3>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>📱 APP ENROLLMENT STATUS</h4>
                    <div style={{ backgroundColor: T.border + "30", padding: "14px", borderRadius: "6px", fontSize: "12px" }}>
                      <div style={{ display: "grid", gap: "10px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span>Customer app invite sent</span>
                          <span style={{ color: T.muted }}>⏳ Pending</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span>Account created</span>
                          <span style={{ color: T.muted }}>⏳ Pending</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span>System monitoring linked</span>
                          <span style={{ color: T.muted }}>⏳ Pending</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span>Warranty docs uploaded</span>
                          <span style={{ color: T.muted }}>⏳ Pending</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button style={{
                    backgroundColor: T.accent,
                    color: T.bg,
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                    width: "100%"
                  }}>
                    📧 Send App Invite to Customer
                  </button>
                </div>
              </>
            )}

            {activeStep === 9 && (
              <>
                <div style={{ padding: "20px", borderBottom: `1px solid ${T.border}`, backgroundColor: T.border + "30" }}>
                  <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>Referrals & Lawn Sign Photo</h3>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>🤝 REFERRALS</h4>
                    <div style={{ backgroundColor: T.border + "20", padding: "12px", borderRadius: "6px", fontSize: "12px", marginBottom: "10px" }}>
                      <div style={{ color: T.muted, marginBottom: "8px" }}>Ask the customer for referrals — neighbors, family, coworkers who might be interested.</div>
                      <div style={{ display: "grid", gap: "8px" }}>
                        {["Referral 1", "Referral 2", "Referral 3"].map((ref, i) => (
                          <div key={i} style={{
                            backgroundColor: T.border + "30",
                            padding: "10px",
                            borderRadius: "4px",
                            border: `1px dashed ${T.border}`,
                            color: T.muted,
                            textAlign: "center"
                          }}>
                            + Add {ref}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: T.accent, fontWeight: "600" }}>🪧 LAWN SIGN PHOTO</h4>
                    <div style={{
                      backgroundColor: T.border + "30",
                      padding: "24px",
                      borderRadius: "6px",
                      textAlign: "center",
                      border: `2px dashed ${T.border}`
                    }}>
                      <div style={{ fontSize: "32px", marginBottom: "8px" }}>📷</div>
                      <div style={{ fontSize: "13px", color: T.muted, marginBottom: "12px" }}>Upload photo of Venture lawn sign at customer property</div>
                      <button style={{
                        backgroundColor: T.accent + "15",
                        color: T.accent,
                        border: `1px solid ${T.accent}40`,
                        padding: "8px 16px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        cursor: "pointer"
                      }}>
                        📸 Take / Upload Photo
                      </button>
                    </div>
                    <div style={{ fontSize: "11px", color: T.muted, marginTop: "8px" }}>
                      Status: <span style={{ color: T.accent }}>⏳ No photo uploaded yet</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
