// MyBookings.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MyBookings = () => {
  const [appointments, setAppointments] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');




  // Load appointments from localStorage on component mount
  useEffect(() => {
    const storedAppointments = localStorage.getItem('doctorAppointments');
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
  }, []);

  // Save appointments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('doctorAppointments', JSON.stringify(appointments));
  }, [appointments]);

  // Function to book an appointment
  const bookAppointment = (doctor) => {
    // Check if user already has an appointment with this doctor
    const hasExistingAppointment = appointments.some(
      appointment => appointment.id === doctor.id
    );

    if (hasExistingAppointment) {
      // Show error toast
      setToastMessage(`You already have an appointment with ${doctor.name}`);
      setToastType('error');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return false;
    } else {
      // Create new appointment
      const newAppointment = {
        id: doctor.id,
        name: doctor.name,
        qualification: doctor.qualification,
        specialty: doctor.specialty,
        fee: doctor.fee,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      };

      // Add to appointments
      setAppointments(prev => [...prev, newAppointment]);

      // Show success toast
      setToastMessage(`Appointment booked with ${doctor.name}`);
      setToastType('success');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);

      return true;
    }
  };

  // Function to cancel an appointment
  const cancelAppointment = (appointmentId) => {
    setAppointments(prev => prev.filter(app => app.id !== appointmentId));
    
    // Show cancellation toast
    setToastMessage('Appointment cancelled successfully');
    setToastType('success');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Sample doctors data (would normally come from props or context)
  const doctorsData = [
    {
      id: 1,
      name: "Dr. Cameron Williamson",
      qualification: "MBBS, MD - General Medicine",
      specialty: "General Medicine, DNB",
      fee: "950 Taka + Vat"
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      qualification: "MBBS, MS - Surgery",
      specialty: "General Surgery",
      fee: "1000 Taka + Vat"
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      qualification: "MBBS, DCH - Pediatrics",
      specialty: "Pediatrics, Child Health",
      fee: "850 Taka + Vat"
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>My Today Appointments</h1>
        <p style={styles.subtitle}>
          Our platform connects you with verified, experienced doctors across various specialties — 
          all at your convenience.
        </p>
      </div>

      {appointments.length === 0 ? (
        <div style={styles.emptyState}>
          <h2 style={styles.emptyTitle}>No Appointments Booked</h2>
          <p style={styles.emptyText}>You haven't booked any appointments yet.</p>
          <Link to="/" style={styles.homeButton}>
            Browse Doctors
          </Link>
        </div>
      ) : (
        <div style={styles.appointmentsList}>
          {appointments.map(appointment => (
            <div key={appointment.id} style={styles.appointmentCard}>
              <div style={styles.cardHeader}>
                <div style={styles.doctorImage}>
                  <i className="fas fa-user-md" style={styles.doctorIcon}></i>
                </div>
                <div style={styles.doctorInfo}>
                  <h3 style={styles.doctorName}>{appointment.name}</h3>
                  <p style={styles.qualification}>{appointment.qualification}</p>
                  <p style={styles.specialty}>{appointment.specialty}</p>
                </div>
              </div>
              
              <div style={styles.feeSection}>
                <p style={styles.feeText}>Appointment Fee : {appointment.fee}</p>
              </div>
              
              <div style={styles.appointmentTime}>
                <p style={styles.timeText}>
                  Scheduled for {appointment.date} at {appointment.time}
                </p>
              </div>
              
              <button 
                style={styles.cancelButton}
                onClick={() => cancelAppointment(appointment.id)}
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Toast notification */}
      {showToast && (
        <div style={{
          ...styles.toast,
          ...(toastType === 'success' ? styles.successToast : styles.errorToast)
        }}>
          {toastMessage}
        </div>
      )}

      {/* Demo section for testing (would be removed in production) */}
      <div style={styles.demoSection}>
        <h3 style={styles.demoTitle} >Demo: Book Appointments</h3>
        <div style={styles.demoDoctors}>
          {doctorsData.map(doctor => (
            <div key={doctor.id} style={styles.demoDoctorCard}>
              <h4>{doctor.name}</h4>
              <p>{doctor.qualification}</p>
              <button 
                style={styles.bookButton}
                onClick={() => bookAppointment(doctor)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
    padding: "20px 0"
  },
  title: {
    color: "#2c3e50",
    marginBottom: "10px",
    fontSize: "28px"
  },
  subtitle: {
    color: "#7f8c8d",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6"
  },
  emptyState: {
    textAlign: "center",
    padding: "60px 20px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
  },
  emptyTitle: {
    color: "#2c3e50",
    marginBottom: "10px"
  },
  emptyText: {
    color: "#7f8c8d",
    marginBottom: "30px"
  },
  homeButton: {
    background: "#3498db",
    color: "white",
    padding: "12px 24px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "600",
    display: "inline-block"
  },
  appointmentsList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "800px",
    margin: "0 auto"
  },
  appointmentCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },
  doctorImage: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#e3f2fd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  doctorIcon: {
    fontSize: "24px",
    color: "#1976d2"
  },
  doctorInfo: {
    flex: "1"
  },
  doctorName: {
    color: "#2c3e50",
    margin: "0 0 5px 0"
  },
  qualification: {
    color: "#7f8c8d",
    margin: "0 0 5px 0",
    fontSize: "14px"
  },
  specialty: {
    color: "#3498db",
    margin: "0",
    fontWeight: "500"
  },
  feeSection: {
    padding: "10px 0",
    borderTop: "1px solid #eee",
    borderBottom: "1px solid #eee"
  },
  feeText: {
    margin: "0",
    color: "#2c3e50",
    fontWeight: "500"
  },
  appointmentTime: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  timeText: {
    margin: "0",
    color: "#7f8c8d",
    fontSize: "14px"
  },
  cancelButton: {
    background: "#e74c3c",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    alignSelf: "flex-start",
    transition: "background 0.3s"
  },
  toast: {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "15px 20px",
    borderRadius: "6px",
    color: "white",
    fontWeight: "500",
    zIndex: "1000",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
  },
  successToast: {
    background: "#27ae60"
  },
  errorToast: {
    background: "#e74c3c"
  },
  demoSection: {
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
  },
  demoTitle: {
    color: "#2c3e50",
    marginBottom: "20px",
    textAlign: "center"
  },
  demoDoctors: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "center"
  },
  demoDoctorCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    minWidth: "200px"
  },
  bookButton: {
    background: "#27ae60",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: "10px"
  }
};

export default MyBookings;
