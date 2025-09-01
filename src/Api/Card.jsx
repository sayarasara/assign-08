// Card.jsx
import React from "react";
import { Link } from "react-router-dom";
import { doctorsData } from "./Jsondata";


export default function Card() {
   // console.log(doctorsData)
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Best Doctors</h1>
      <p style={styles.subtitle}>
        Our platform connects you with verified, experienced doctors across various specialties — 
        all at your convenience. Whether it's a real-life checkup or expert consultation, 
        look no further. Receive quality care you can trust.
      </p>
      
      <div style={styles.cardsContainer}>
        {doctorsData.map(doctor => (
          <div key={doctor.id} style={styles.card}>
            <div style={styles.imagePlaceholder}>
              <i className="fas fa-user-md" style={styles.icon}></i>
            </div>
            <div style={styles.cardContent}>
              <h3 style={styles.doctorName}>{doctor.name}</h3>
              <p style={styles.qualification}>{doctor.qualification}</p>
              <p style={styles.specialty}>{doctor.specialty}</p>
              <p style={styles.regNumber}>Reg No: {doctor.registrationNumber}</p>
              <Link to={`/doctors/${doctor.id}`} style={styles.viewDetailsBtn}>
                View Details
              </Link>
            </div>
          </div>
        ))}
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
  heading: {
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: "20px",
    paddingTop: "20px"
  },
  subtitle: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 30px",
    color: "#7f8c8d",
    lineHeight: "1.6",
    padding: "0 20px"
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px"
  },
  card: {
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease",
    width: "300px",
    margin: "15px"
  },
  imagePlaceholder: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "#e3f2fd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px auto"
  },
  icon: {
    fontSize: "40px",
    color: "#1976d2"
  },
  cardContent: {
    padding: "0 20px 20px"
  },
  doctorName: {
    margin: "15px 0 5px",
    color: "#2c3e50",
    textAlign: "center"
  },
  qualification: {
    color: "#7f8c8d",
    fontSize: "14px",
    marginBottom: "5px",
    textAlign: "center"
  },
  specialty: {
    color: "#3498db",
    fontWeight: "500",
    marginBottom: "10px",
    textAlign: "center"
  },
  regNumber: {
    color: "#95a5a6",
    fontSize: "13px",
    marginBottom: "15px",
    textAlign: "center"
  },
  viewDetailsBtn: {
    background: "#3498db",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "6px",
    cursor: "pointer",
    width: "100%",
    fontWeight: "600",
    transition: "background 0.3s",
    textDecoration: "none",
    display: "block",
    textAlign: "center"
  }
};