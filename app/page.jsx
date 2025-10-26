"use client";
import { useState } from "react";

export default function Home() {
  const [attendees, setAttendees] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [duration, setDuration] = useState("");

  // Calculate costs directly during render
  const numAttendees = parseFloat(attendees) || 0;
  const rate = parseFloat(hourlyRate) || 0;
  const mins = parseFloat(duration) || 0;

  const totalCost = (numAttendees * rate * mins) / 60;
  const costPerMinute = mins > 0 ? totalCost / mins : 0;
  const costPerSecond = mins > 0 ? totalCost / (mins * 60) : 0;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          padding: "40px",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#2d3748",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          💰 Meeting Cost Calculator
        </h1>
        <p
          style={{
            color: "#718096",
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "14px",
          }}
        >
          Calculate the true cost of your meetings
        </p>

        <div style={{ marginBottom: "25px" }}>
          <label
            style={{
              display: "block",
              color: "#4a5568",
              fontWeight: "600",
              marginBottom: "8px",
              fontSize: "14px",
            }}
          >
            Number of Attendees
          </label>
          <input
            type="number"
            value={attendees}
            onChange={(e) => setAttendees(e.target.value)}
            placeholder="e.g., 8"
            min="0"
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e2e8f0",
              borderRadius: "10px",
              fontSize: "16px",
              transition: "all 0.3s",
              outline: "none",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#667eea")}
            onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
          />
        </div>

        <div style={{ marginBottom: "25px" }}>
          <label
            style={{
              display: "block",
              color: "#4a5568",
              fontWeight: "600",
              marginBottom: "8px",
              fontSize: "14px",
            }}
          >
            Average Hourly Rate ($)
          </label>
          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            placeholder="e.g., 75"
            min="0"
            step="0.01"
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e2e8f0",
              borderRadius: "10px",
              fontSize: "16px",
              transition: "all 0.3s",
              outline: "none",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#667eea")}
            onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
          />
        </div>

        <div style={{ marginBottom: "30px" }}>
          <label
            style={{
              display: "block",
              color: "#4a5568",
              fontWeight: "600",
              marginBottom: "8px",
              fontSize: "14px",
            }}
          >
            Meeting Duration (minutes)
          </label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="e.g., 60"
            min="0"
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e2e8f0",
              borderRadius: "10px",
              fontSize: "16px",
              transition: "all 0.3s",
              outline: "none",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#667eea")}
            onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
          />
        </div>

        {totalCost > 500 && (
          <div
            style={{
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              color: "white",
              padding: "16px",
              borderRadius: "10px",
              marginBottom: "20px",
              textAlign: "center",
              fontWeight: "600",
              animation: "pulse 2s infinite",
            }}
          >
            ⚠️ Alert: This meeting costs over $500!
          </div>
        )}

        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "15px",
            padding: "25px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <div
              style={{
                fontSize: "14px",
                opacity: "0.9",
                marginBottom: "5px",
              }}
            >
              Total Meeting Cost
            </div>
            <div
              style={{
                fontSize: "42px",
                fontWeight: "700",
                letterSpacing: "-1px",
              }}
            >
              {formatCurrency(totalCost)}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.15)",
                padding: "15px",
                borderRadius: "10px",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  opacity: "0.9",
                  marginBottom: "5px",
                }}
              >
                Per Minute
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                {formatCurrency(costPerMinute)}
              </div>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.15)",
                padding: "15px",
                borderRadius: "10px",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  opacity: "0.9",
                  marginBottom: "5px",
                }}
              >
                Per Second
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                {formatCurrency(costPerSecond)}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "#a0aec0",
            fontSize: "12px",
          }}
        >
          Make every meeting count! ⏰
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @media (max-width: 640px) {
          div[style*="padding: 40px"] {
            padding: 25px !important;
          }
          h1 {
            font-size: 26px !important;
          }
        }
      `}</style>
    </div>
  );
}
