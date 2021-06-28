import React, { useState } from "react";
const FamilyContext = React.createContext();

const FamilyContextProvider = (props) => {
  const [people, changePeople] = useState({
    dad: {
      going: false,
      where: "",
      what: "",
      whenLeft: "",
      whenBack: "",
    },
    mom: {
      going: false,
      where: "",
      what: "",
      whenLeft: "",
      whenBack: "",
    },
    olivia: {
      going: false,
      where: "",
      what: "",
      whenLeft: "",
      whenBack: "",
    },
    bianca: {
      going: false,
      where: "",
      what: "",
      whenLeft: "",
      whenBack: "",
    },
    benson: {
      going: false,
      where: "",
      what: "",
      whenLeft: "",
      whenBack: "",
    },
    rosalie: {
      going: false,
      where: "",
      what: "",
      whenLeft: "",
      whenBack: "",
    },
    hattie: {
      going: false,
      where: "",
      what: "",
      whenLeft: "",
      whenBack: "",
    },
    louisa: {
      going: false,
      where: "",
      what: "",
      whenLeft: "",
      whenBack: "",
    },
    isaac: {
      going: false,
      where: "",
      what: "",
      whenLeft: "",
      whenBack: "",
    },
  });

  return (
    <FamilyContext.Provider value={people}>
      {props.children}
    </FamilyContext.Provider>
  );
};

export { FamilyContextProvider, FamilyContext };
