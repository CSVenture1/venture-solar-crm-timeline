import { useState } from 'react';

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [hoveredAction, setHoveredAction] = useState(null);
  
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
    { id: 6, title: "RSM Follow-up", status: "pending", date: "TBD" },
    { id: 7, title: "Contract & Financing", status: "pending", date: "TBD" },
    { id: 8, title: "Deal Approved", status: "pending", date: "TBD" }
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
        <div style={{ flex: "2" }}>
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
                    marginBottom: index === steps.length - 1 ? "0" : "24px",
                    cursor: "pointer",
                    padding: "12px",
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
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: getStepStatus(step),
                      border: `3px solid ${getStepStatus(step)}30`,
                      zIndex: 1
                    }} />
                    {index < steps.length - 1 && (
                      <div style={{
                        width: "2px",
                        height: "40px",
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
                        fontSize: "16px", 
                        fontWeight: "600",
                        color: activeStep === step.id ? T.accent : T.text
                      }}>
                        {step.title}
                      </h3>
                      <span style={{ 
                        fontSize: "12px", 
                        color: T.muted,
                        fontFamily: "'JetBrains Mono', monospace"
                      }}>
                        {step.date}
                      </span>
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
        <div style={{ flex: "1" }}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
