import { useState, useEffect } from 'react';
import Error from './Error';


const Formular = ({patients, setPatients, patient, setPatient}) => {
  const [pet, setPet] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false); 

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setPet(patient.pet)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptoms(patient.symptoms)
    }
  }, [patient])
  
  const generateID = () => {
    const random = Math.random().toString(36).substr(2)
    const date = Date.now().toString(36)

    return random + date
  }

  const handleSubmit = (e) => {  
    e.preventDefault();
    if ([pet, owner, email, date, symptoms].includes('')) {
      
          setError(true)
          return;
        } 

        setError(false)

        // Object patient
        const patientObject = {
          pet,
          owner,
          email,
          date,
          symptoms 
        }        

        if (patient.id) {
          // EDITING PATIENT
          patientObject.id = patient.id
          const updatedPatients = patients.map(patientState => patientState.id === patient.id ? patientObject : patientState )
          setPatients(updatedPatients)
          setPatient({})
          
        } else {
          patientObject.id = generateID()
          setPatients([...patients, patientObject])
        }

        // RESTART FORMULAR
        setPet('')
        setOwner('')
        setEmail('')
        setDate('')
        setSymptoms('')
  }
  

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-center text-3xl">Follow Up Patients</h2>
      <p className="mt-5 text-center text-md mb-8">
        Add Patients and <span className="text-indigo-600 font-bold">Administrate</span>
      </p>

      <form onSubmit={handleSubmit} className="mx-3 bg-white shadow-lg rounded-lg py-5 px-5 mb-10">

        {error && <Error message='All fields are required'/>}  
        <div className="mb-3">
          <label htmlFor="pet" className="block text-gray-700 font-bold">
            Pet's Name
          </label>
          <input
            id="pet"
            className="border-2 rounded-lg w-full px-2 mt-1 placeholder-gray-400"
            type="text"
            placeholder="Pet's name"
            value={pet}
            onChange={e => setPet(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="owner" className="block text-gray-700 font-bold">
            Pet's Owner
          </label>
          <input
            id="owner"
            className="border-2 rounded-lg w-full px-2 mt-1 placeholder-gray-400"
            type="text"
            placeholder="Pet's owner"
            value={owner}
            onChange={e => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-700 font-bold">
            E-mail
          </label>
          <input
            id="email"
            className="border-2 rounded-lg w-full px-2 mt-1 placeholder-gray-400"
            type="email"
            placeholder="Owner's E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="discharge" className="block text-gray-700 font-bold">
            Discharged Date
          </label>
          <input
            id="discharge"
            className="border-2 rounded-lg w-full px-2 mt-1 placeholder-gray-400"
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="symtomps" className="block text-gray-700 font-bold">
            Symptoms
          </label>
          <textarea
            id="symtomps"
            className="border-2 rounded-lg w-full px-2 mt-1 placeholder-gray-400"
            placeholder="Describe Symptoms"
            value={symptoms}
            onChange={e => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-1 text-white font-bold rounded-lg hover:bg-indigo-700 cursor-pointer transition-colors"
          value= {patient.id ? 'Edit Patient' : 'Add Patient'}
        />
      </form>
    </div>
  );
};

export default Formular;
