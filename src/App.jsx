import { useState, useEffect } from 'react';
import Header from './components/Header';
import Formular from './components/Formular';
import PatientsList from './components/PatientsList';


function App() {

  const [patients, setPatients] = useState([]); 
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const patientsLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(patientsLS)
    }
    patientsLS()
  }, [])
  
  useEffect(() => {
    const patientsLS = () => {
      localStorage.setItem('patients', JSON.stringify(patients))
    }
    patientsLS()
  }, [patients])

  const deletePatient = (id) => {
    const updatedPatients = patients.filter(patient => patient.id !== id)
          setPatients(updatedPatients)
          setPatient({})

  }
  
  return (
    <div className="container mx-auto mt-8">
      <Header />

      <div className="mt-12 md:flex">
        <Formular 
          patients={patients}
          setPatients={setPatients}
          patient = {patient}
          setPatient = {setPatient}
        />
        <PatientsList 
          patients={patients}
          setPatient={setPatient}
          deletePatient = {deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
