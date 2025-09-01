// CardDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { doctorsData } from "./Jsondata";
  import { ToastContainer, toast } from 'react-toastify';
export default function CardDetail() {
  const { id } = useParams();
  const doctor = doctorsData.find(doc => doc.id === parseInt(id));
   
 const notify = () => toast("Booked Successfully!");


  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  const availableDays = doctor.availability || ['Sunday', 'Monday', 'Thursday'];

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backButton}>
        &larr; Back to Doctors
      </Link>
      
      <div style={styles.detailHeader}>
        <div style={styles.doctorImage}>
          <div style={styles.imagePlaceholder}>
            <img src="/public/doctor-sample.png" alt="Doctor Image" style={styles.image} />
          </div>
        </div>
        <div style={styles.doctorMainInfo}>
          <h1 style={styles.doctorName}>{doctor.name}</h1>
          <p style={styles.qualification}>{doctor.qualification}</p>
          <p style={styles.specialty}>{doctor.specialty}</p>
          <div style={styles.hospitalInfo}>
            <h3 style={styles.hospitalTitle}>Working at</h3>
            <p style={styles.hospitalName}>{doctor.hospital}</p>
          </div>
          <div style={styles.regNumber}>
            
            <span>Reg No: {doctor.registrationNumber}</span>
          </div>
        </div>
      </div>

      <div style={styles.detailContent}>
        <div style={styles.description}>
          <p>{doctor.description}</p>
        </div>

        <div style={styles.availabilitySection}>
          <h2 style={styles.sectionTitle}>Availability</h2>
          <div style={styles.availabilityDays}>
            {availableDays.map(day => (
              <span key={day} style={styles.dayPill}>{day}</span>
            ))}
          </div>
          <div style={styles.availabilityNotice}>
            <i className="fas fa-info-circle" style={styles.noticeIcon}></i>
            <span>Doctor Available Today</span>
          </div>
          <div style={styles.highDemandNotice}>
            <i className="fas fa-exclamation-circle" style={styles.noticeIcon}></i>
            <span>
              Due to high patient volume, we are currently accepting appointments for today only. 
              We appreciate your understanding and cooperation.
            </span>
          </div>
        </div>

        <div style={styles.feeSection}>
          <h2 style={styles.sectionTitle}>Consultation Fee</h2>
          <p style={styles.feeAmount}>{doctor.fee}</p>
        </div>

        <button  onClick={ notify } style={styles.bookAppointmentBtn}>
          Book an Appointment  <ToastContainer />
        </button>
      </div>
      
      <style>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh"
  },
  backButton: {
    background: "#7f8c8d",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "20px",
    fontWeight: "600",
    textDecoration: "none",
    display: "inline-block"
  },
  detailHeader: {
    display: "flex",
    padding: "30px",
    background: "linear-gradient(135deg, #f6f9fc 0%, #eef2f7 100%)",
    borderBottom: "1px solid #eaeaea",
    flexDirection: "row",
    alignItems: "center"
  },
  doctorImage: {
    flex: "0 0 150px",
    marginRight: "30px"
  },
  imagePlaceholder: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "#e3f2fd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    fontSize: "60px",
    color: "#1976d2"
  },
  doctorMainInfo: {
    flex: "1"
  },
  doctorName: {
    color: "#2c3e50",
    marginBottom: "10px"
  },
  qualification: {
    color: "#7f8c8d",
    fontSize: "16px",
    marginBottom: "5px"
  },
  specialty: {
    color: "#3498db",
    fontWeight: "500",
    marginBottom: "10px"
  },
  hospitalInfo: {
    margin: "20px 0"
  },
  hospitalTitle: {
    color: "#7f8c8d",
    marginBottom: "5px",
    fontSize: "16px"
  },
  hospitalName: {
    color: "#2c3e50",
    fontWeight: "500"
  },
  regNumber: {
    display: "flex",
    alignItems: "center",
    color: "#95a5a6",
    marginTop: "15px"
  },
  regIcon: {
    marginRight: "10px"
  },
  detailContent: {
    padding: "30px",
    background: "white",
    borderRadius: "0 0 12px 12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
  },
  description: {
    marginBottom: "25px",
    lineHeight: "1.6",
    color: "#34495e"
  },
  availabilitySection: {
    marginBottom: "25px"
  },
  sectionTitle: {
    color: "#2c3e50",
    marginBottom: "15px"
  },
  availabilityDays: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "15px"
  },
  dayPill: {
    background: "#3498db",
    color: "white",
    padding: "8px 15px",
    borderRadius: "20px",
    fontSize: "14px"
  },
  availabilityNotice: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "6px",
    background: "#e8f5e9",
    color: "#2e7d32"
  },
  highDemandNotice: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "6px",
    background: "#ffecb3",
    color: "#7d6602"
  },
  noticeIcon: {
    marginRight: "10px"
  },
  feeSection: {
    margin: "25px 0"
  },
  feeAmount: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#27ae60"
  },
  bookAppointmentBtn: {
    background: "#27ae60",
    color: "white",
    border: "none",
    padding: "15px 30px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    width: "100%",
    transition: "background 0.3s"
  }
};