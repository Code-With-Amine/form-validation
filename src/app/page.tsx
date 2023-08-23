"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style/style.css";

const Home = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(15, "Must be at least 15 characters")
      .max(60, "Must be at most 60 characters")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be at most 20 characters")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const handleSubmit = (values: any) => {
    console.log("submitted successfully", values);
  };

  const handleCharacterCount = (value: string) => {
    return `${value.length}`;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field type="text" id="firstName" name="firstName">
            {({ field }) => (
              <>
                <input {...field} />
                <div className="character-count">
                  {handleCharacterCount(field.value)}
                </div>
              </>
            )}
          </Field>
          <ErrorMessage name="firstName" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field type="text" id="lastName" name="lastName">
            {({ field }) => (
              <>
                <input {...field} />
                <div className="character-count">
                  {handleCharacterCount(field.value)}
                </div>
              </>
            )}
          </Field>
          <ErrorMessage name="lastName" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email">
            {({ field}) => (
              <>
                <input {...field} />
                <div className="character-count">
                  {handleCharacterCount(field.value)}
                </div>
              </>
            )}
          </Field>
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Home;
