import React, { useState, useEffect } from 'react';
import styles from '../styles/ClientPortal.module.css';

const ClientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  // Mock authentication - in real implementation, this would connect to a backend
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple mock authentication
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
      localStorage.setItem('clientLoggedIn', 'true');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('clientLoggedIn');
  };

  // Check if user is already logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem('clientLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // Mock data for demonstration
  const clientData = {
    name: 'Margaret Thompson',
    caregiverName: 'Sarah Johnson, RN',
    nextAppointment: 'Today at 2:00 PM - Medication Reminder',
    recentUpdates: [
      {
        date: '2025-09-19',
        time: '10:30 AM',
        caregiver: 'Sarah Johnson',
        note: 'Completed morning personal care routine. Client was in good spirits and enjoyed breakfast.'
      },
      {
        date: '2025-09-18',
        time: '3:15 PM',
        caregiver: 'Sarah Johnson',
        note: 'Accompanied client to medical appointment. Doctor was pleased with progress.'
      },
      {
        date: '2025-09-17',
        time: '11:00 AM',
        caregiver: 'Michael Davis',
        note: 'Light housekeeping completed. Prepared nutritious lunch with client participation.'
      }
    ],
    upcomingSchedule: [
      { date: '2025-09-19', time: '2:00 PM', service: 'Medication Reminder', caregiver: 'Sarah Johnson' },
      { date: '2025-09-20', time: '9:00 AM', service: 'Personal Care', caregiver: 'Sarah Johnson' },
      { date: '2025-09-20', time: '12:00 PM', service: 'Meal Preparation', caregiver: 'Sarah Johnson' },
      { date: '2025-09-21', time: '10:00 AM', service: 'Companionship & Transportation', caregiver: 'Michael Davis' }
    ]
  };

  const LoginForm = () => (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1>Client Portal Login</h1>
        <p>Access your care schedule, updates, and communicate with your care team.</p>
        
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={loginForm.email}
              onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className={styles.loginButton}>
            Access Portal
          </button>
        </form>
        
        <div className={styles.loginHelp}>
          <p>Need help accessing your account? <a href="/contact">Contact us</a></p>
          <p className={styles.demoNote}>
            <strong>Demo:</strong> Enter any email and password to explore the portal features
          </p>
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className={styles.dashboardContent}>
      <div className={styles.welcomeSection}>
        <h2>Welcome back, {clientData.name}</h2>
        <p>Your dedicated caregiver: <strong>{clientData.caregiverName}</strong></p>
      </div>

      <div className={styles.quickInfo}>
        <div className={styles.infoCard}>
          <h3>Next Appointment</h3>
          <p>{clientData.nextAppointment}</p>
        </div>
        
        <div className={styles.infoCard}>
          <h3>Care Team Status</h3>
          <p>✅ All caregivers checked in today</p>
        </div>
        
        <div className={styles.infoCard}>
          <h3>Emergency Contact</h3>
          <p>📞 <a href="tel:9785551234">(978) 555-1234</a></p>
        </div>
      </div>

      <div className={styles.recentUpdates}>
        <h3>Recent Care Updates</h3>
        <div className={styles.updatesList}>
          {clientData.recentUpdates.map((update, index) => (
            <div key={index} className={styles.updateItem}>
              <div className={styles.updateHeader}>
                <span className={styles.updateDate}>{update.date} at {update.time}</span>
                <span className={styles.updateCaregiver}>by {update.caregiver}</span>
              </div>
              <p className={styles.updateNote}>{update.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Schedule = () => (
    <div className={styles.scheduleContent}>
      <h2>Upcoming Care Schedule</h2>
      <div className={styles.scheduleList}>
        {clientData.upcomingSchedule.map((appointment, index) => (
          <div key={index} className={styles.scheduleItem}>
            <div className={styles.scheduleDate}>
              <strong>{appointment.date}</strong>
              <span>{appointment.time}</span>
            </div>
            <div className={styles.scheduleDetails}>
              <h4>{appointment.service}</h4>
              <p>with {appointment.caregiver}</p>
            </div>
            <div className={styles.scheduleActions}>
              <button className={styles.rescheduleBtn}>Reschedule</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Messages = () => (
    <div className={styles.messagesContent}>
      <h2>Secure Messaging</h2>
      <div className={styles.messageCenter}>
        <div className={styles.messagePlaceholder}>
          <h3>💬 Stay Connected with Your Care Team</h3>
          <p>Send secure messages to your caregivers, ask questions, or share important updates about your care needs.</p>
          <button className={styles.newMessageBtn}>Start New Conversation</button>
        </div>
      </div>
    </div>
  );

  const Settings = () => (
    <div className={styles.settingsContent}>
      <h2>Account Settings</h2>
      <div className={styles.settingsSections}>
        <div className={styles.settingSection}>
          <h3>Contact Information</h3>
          <p>Update your phone number, emergency contacts, and notification preferences.</p>
          <button className={styles.updateBtn}>Update Contacts</button>
        </div>
        
        <div className={styles.settingSection}>
          <h3>Care Preferences</h3>
          <p>Modify your care plan, dietary restrictions, and special instructions.</p>
          <button className={styles.updateBtn}>Update Preferences</button>
        </div>
        
        <div className={styles.settingSection}>
          <h3>Privacy & Security</h3>
          <p>Manage who can access your care information and communication preferences.</p>
          <button className={styles.updateBtn}>Privacy Settings</button>
        </div>
      </div>
    </div>
  );

  if (!isLoggedIn) {
    return <LoginForm />;
  }

  return (
    <main className={styles.portalContainer} aria-label="Client Portal Dashboard">
      <div className={styles.portalHeader}>
        <div className={styles.headerContent}>
          <h1>Family Portal</h1>
          <div className={styles.headerActions}>
            <span className={styles.clientName}>Hello, {clientData.name}</span>
            <button onClick={handleLogout} className={styles.logoutBtn}>
              Logout
            </button>
          </div>
        </div>
        
        <nav className={styles.tabNavigation}>
          <button
            className={`${styles.tabBtn} ${activeTab === 'dashboard' ? styles.active : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'schedule' ? styles.active : ''}`}
            onClick={() => setActiveTab('schedule')}
          >
            Schedule
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'messages' ? styles.active : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            Messages
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'settings' ? styles.active : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </nav>
      </div>

      <div className={styles.portalBody}>
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'schedule' && <Schedule />}
        {activeTab === 'messages' && <Messages />}
        {activeTab === 'settings' && <Settings />}
      </div>
    </main>
  );
};

export default ClientPortal;