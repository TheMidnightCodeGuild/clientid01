"use client";

import React, { useState, useEffect } from "react";

// Import the components/pages you want to show on the dashboard
import UploadBlogs from "./uploadBlogs";
import ViewAllBlogs from "./viewAllBlogs";

// Optional: lazy load the `uploadImages.jsx` if it exists (or import it if present)
let UploadImages = null;
try {
  // Try requiring - may fail if file does not exist
  // eslint-disable-next-line import/no-unresolved
  UploadImages = require("./uploadImages").default;
} catch {}

// Import viewAllImages.jsx if it exists
let ViewAllImages = null;
try {
  // Try requiring - may fail if file does not exist
  // eslint-disable-next-line import/no-unresolved
  ViewAllImages = require("./viewAllImages").default;
} catch {}

// Import viewAllEntries.jsx
let ViewAllEntries = null;
try {
  ViewAllEntries = require("./viewAllEntries.jsx").default;
} catch {}

const COMPONENTS = [
  {
    key: "uploadBlogs",
    label: "Upload Blog",
    component: <UploadBlogs />
  },
  {
    key: "uploadImages",
    label: "Upload Images",
    component: UploadImages ? <UploadImages /> : <div>UploadImages.jsx not found.</div>
  },
  {
    key: "viewAllBlogs",
    label: "View All Blogs",
    component: <ViewAllBlogs />
  },
  {
    key: "viewAllImages",
    label: "View All Images",
    component: ViewAllImages ? <ViewAllImages /> : <div>viewAllImages.jsx not found.</div>
  },
  {
    key: "viewAllEntries",
    label: "View All Entries",
    component: ViewAllEntries ? <ViewAllEntries /> : <div>viewAllEntries.jsx not found.</div>
  }
];

// ─── Change this to your desired password ───────────────────────────────────
const DASHBOARD_PASSWORD = "Sankalpashree@2026";
// ─────────────────────────────────────────────────────────────────────────────

const SESSION_KEY = "dashboard_auth";

function LoginGate({ onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === DASHBOARD_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      onSuccess();
    } else {
      setError("Incorrect password. Please try again.");
      setShake(true);
      setPassword("");
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .login-overlay {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          font-family: 'Inter', sans-serif;
          padding: 1rem;
        }

        .login-card {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          animation: fadeSlideUp 0.5s ease forwards;
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .login-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 1.8rem;
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .login-title {
          color: #fff;
          font-size: 1.6rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 0.25rem;
          letter-spacing: -0.5px;
        }

        .login-subtitle {
          color: rgba(255,255,255,0.5);
          font-size: 0.875rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .login-label {
          display: block;
          color: rgba(255,255,255,0.75);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .login-input-wrap {
          position: relative;
          margin-bottom: 1rem;
        }

        .login-input {
          width: 100%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px;
          padding: 0.75rem 3rem 0.75rem 1rem;
          color: #fff;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }

        .login-input::placeholder { color: rgba(255,255,255,0.3); }

        .login-input:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.25);
        }

        .toggle-eye {
          position: absolute;
          right: 0.85rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.5);
          font-size: 1.1rem;
          padding: 0;
          line-height: 1;
          transition: color 0.2s;
        }
        .toggle-eye:hover { color: rgba(255,255,255,0.9); }

        .login-error {
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          border-radius: 8px;
          color: #fca5a5;
          font-size: 0.85rem;
          padding: 0.6rem 0.9rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .login-btn {
          width: 100%;
          padding: 0.85rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          letter-spacing: 0.3px;
        }

        .login-btn:hover {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.5);
        }

        .login-btn:active { transform: translateY(0); }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-8px); }
          40%       { transform: translateX(8px); }
          60%       { transform: translateX(-5px); }
          80%       { transform: translateX(5px); }
        }
        .shake { animation: shake 0.5s ease; }
      `}</style>

      <div className="login-overlay">
        <div className={`login-card ${shake ? "shake" : ""}`}>
          <div className="login-icon">🔐</div>
          <h1 className="login-title">Admin Dashboard</h1>
          <p className="login-subtitle">Enter your password to continue</p>

          <form onSubmit={handleSubmit} autoComplete="off">
            <label className="login-label" htmlFor="dash-password">Password</label>
            <div className="login-input-wrap">
              <input
                id="dash-password"
                type={showPassword ? "text" : "password"}
                className="login-input"
                placeholder="Enter password…"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                autoFocus
                required
              />
              <button
                type="button"
                className="toggle-eye"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
                aria-label="Toggle password visibility"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {error && <div className="login-error">{error}</div>}

            <button type="submit" className="login-btn">
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(COMPONENTS[0].key);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Check if already authenticated in this session
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setIsAuthenticated(true);
    }
    setChecking(false);
  }, []);

  if (checking) return null; // Avoid flash

  if (!isAuthenticated) {
    return <LoginGate onSuccess={() => setIsAuthenticated(true)} />;
  }

  const renderComponent = () => {
    const found = COMPONENTS.find((tab) => tab.key === activeTab);
    return found ? found.component : null;
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-center flex-1">Dashboard</h1>
        <button
          onClick={() => {
            sessionStorage.removeItem(SESSION_KEY);
            setIsAuthenticated(false);
          }}
          className="text-sm px-4 py-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition font-medium"
        >
          Logout
        </button>
      </div>

      <div className="flex justify-center gap-6 mb-8 flex-wrap">
        {COMPONENTS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-2 rounded-full font-medium transition 
              ${activeTab === tab.key
                ? "bg-indigo-600 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md min-h-[450px]">
        {renderComponent()}
      </div>
    </div>
  );
}
