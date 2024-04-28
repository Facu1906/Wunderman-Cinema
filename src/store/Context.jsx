import { createContext, useState } from 'react';

export const Context = createContext({
  information: [],
  addInformation: () => {},
  updateInformationStatus: () => {},
});

export default function ContextProvider({ children }) {
  const [information, setInformation] = useState([]);

  function addInfo(information) {
    setInformation((prevInformation) => [
      { ...information, id: Math.random().toString(), status: 'active' },
      ...prevInformation,
    ]);
  }

  function deleteInfo(informationId) {
    setInformation((prevInformation) =>
      prevInformation.filter((information) => information.id !== informationId)
    );
  }

  function updateInfoStatus(informationId, newStatus) {
    setInformation((prevInformation) =>
      prevInformation.map((information) => {
        if (information.id === informationId) {
          return { ...information, status: newStatus };
        }
        return information;
      })
    );
  }

  const informationContext = {
    information,
    addInfo,
    deleteInfo,
    updateInfoStatus,
  };

  return (
    <Context.Provider value={informationContext}>
      {children}
    </Context.Provider>
  );
}