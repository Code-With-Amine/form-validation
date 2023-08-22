"use client";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import './style/style.css'

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const style = {
    width: '50vw',
    height: '100vh',
    margin: '120px auto',
    padding: '62px 20px'
  }

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    // Check client-side and perform client-specific actions here
  }, []);

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (formData.firstName.length < 1) {
      newErrors.firstName = "First name is required";
      valid = false;
    } else if (formData.firstName.length > 20) {
      newErrors.firstName = "Must be 20 characters or less";
      valid = false;
    } else {
      newErrors.firstName = "";
    }

    if (formData.lastName.length < 15) {
      newErrors.lastName = "Must be at least 15 characters";
      valid = false;
    } else if (formData.lastName.length > 60) {
      newErrors.lastName = "Must be 60 characters or less";
      valid = false;
    } else {
      newErrors.lastName = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="Form-container" style={style}>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            spellCheck
          />
          <div className="error">{errors.firstName}</div>
          <div className="character-count">
            Character Count: {formData.firstName.length}/20
          </div>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            spellCheck
          />
          <div className="error">{errors.lastName}</div>
          <div className="character-count">
            Character Count: {formData.lastName.length}/60
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
