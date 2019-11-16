import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextFormField } from "../FormFields/TextFormField";
import { SelectFormField } from "../FormFields/SelectFormField";
import { Button } from "@material-ui/core";

const schema = yup.object({
  companyname: yup.string().required("Company name is required"),
  email: yup.string().required("Email is required"),
  addressline1: yup.string().required("Coporate address line 1 is required"),
  addressline2: yup.string().required("Coporate address line 2 is required")
});

interface Props {}

const CompanyDetailForm: React.FC<Props> = () => {
  return (
    <Formik
      initialValues={{
        companyname: "",
        email: "",
        hotline: "",
        addressline1: "",
        addressline2: ""
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => console.log(values)}
    >
      {({ values, errors }) => (
        <Form>
          <h2>Company Detail Form</h2>
          <Field
            label="Company Name"
            name="companyname"
            component={TextFormField}
            variant="outlined"
          />

          {/* <div>Values</div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <div>Errors</div>
          <pre>{JSON.stringify(errors, null, 2)}</pre> */}
          <Field
            label="Email"
            name="email"
            component={TextFormField}
            variant="outlined"
          />
          <Field
            label="Hotline"
            name="hotline"
            component={TextFormField}
            variant="outlined"
          />
          <Field
            label="Coporate Address Line 1"
            name="addressline1"
            component={TextFormField}
            variant="outlined"
          />
          <Field
            label="Coporate Address Line 2"
            name="addressline2"
            component={TextFormField}
            variant="outlined"
          />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CompanyDetailForm;
