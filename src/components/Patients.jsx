const Patients = ({patient, setPatient, deletePatient}) => {

  const {pet, owner, email, date, symptoms, id} = patient

  const handleDelete = () => {
    const confirmation = confirm(`Do you want to delete the patient ${pet}?`)
    if (confirmation) {
      deletePatient(id)
    }
  }
  
  return (
    <div className="mx-3 mb-3 px-5 bg-white shadow-lg rounded-lg py-5">
      <p className="font-bold mb-3 text-gray-700">
        Name: <span className="font-normal normal-case">{pet}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Owner: <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        E-mail: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Discharged date: <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Symptomps:{' '}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex justify-between mt-5">
        <button
          type="button"
          className="py-1 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md"
          onClick={() => setPatient(patient)}
        >Edit</button>
        <button
          type="button"
          className="py-1 px-7 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md"
          onClick={handleDelete}
        >Delete</button>
      </div>
    </div>
  );
};

export default Patients;
