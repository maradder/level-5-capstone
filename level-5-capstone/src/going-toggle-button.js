import React, { useState, useContext } from "react";

const useToggle = (value) => {
  const toggle = (value) => (value = !value);
  return { value, toggle };
};

export default useToggle;
