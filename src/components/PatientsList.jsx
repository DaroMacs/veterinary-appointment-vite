import Patients from './Patients';

const PatientsList = ({patients, setPatient, deletePatient}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5">
      {patients && patients.length ? (
      <>
      <h2 className="font-black text-3xl text-center">Patients List</h2>
      <p className="text-md mt-5 text-center mb-8">
        Administrate the patients and{' '}<span className="text-indigo-600 font-bold">appointments</span>
      </p>
      <p></p>
      <div className="md:h-screen md:overflow-y-scroll">
        {patients.map( patient => (
              <Patients 
                key = {patient.id}            
                patient = {patient}
                setPatient={setPatient}
                deletePatient = { deletePatient }
              />
            )
        )}
      </div>
      </> 
      ): (
      <>
      <h2 className="font-black text-3xl text-center">No Patients</h2>
      <p className="text-md mt-5 text-center mb-8">
        Start to add patients and{' '}<span className="text-indigo-600 font-bold">they will appear below</span>
      </p>
      </>
      ) }
    </div>
  );
};

export default PatientsList;
