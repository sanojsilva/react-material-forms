import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextFormField } from "../FormFields/TextFormField";
import { SelectFormField } from "../FormFields/SelectFormField";
import { Button } from "@material-ui/core";

const schema = yup.object({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  addressline1: yup.string().required("Address line 1 is required"),
  addressline2: yup.string().required("Address line 2 is required"),
  email: yup.string().required("Email address is required").email(),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  postalcode: yup.number().required("Postal code is required"),
  phone: yup.number().required("Phone number is required")
});

interface Props {}

const ProfileForm: React.FC<Props> = () => {
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        addressline1: "",
        addressline2: "",
        email: "",
        city: "",
        state: "",
        postalcode: "",
        phone: "",
        country: "Sri Lanka"
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => console.log(values)}
    >
      {({ values, errors }) => (
        <Form>
          <h2> Edit Profile </h2>
          <Field
            label="First Name"
            name="firstname"
            component={TextFormField}
            variant="outlined"
          />

          {/* <div>Values</div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <div>Errors</div>
          <pre>{JSON.stringify(errors, null, 2)}</pre> */}
          <Field
            label="Last Name"
            name="lastname"
            component={TextFormField}
            variant="outlined"
          />
          <Field
            label="Address Line 1"
            name="addressline1"
            component={TextFormField}
            variant="outlined"
          />
          <Field
            label="Address Line 2"
            name="addressline2"
            component={TextFormField}
            variant="outlined"
          />
          <Field
            label="Email Address"
            name="email"
            component={TextFormField}
            variant="outlined"
          />
          <Field
            label="City"
            name="city"
            component={TextFormField}
            variant="outlined"
          />
          <Field
            label="State or Province"
            name="state"
            component={SelectFormField}
            options={[
              { label: "Western", value: "western" },
              { label: "Uva", value: "uva" },
              { label: "Southern", value: "southern" },
              { label: "Sabaragamuwa", value: "sabaragamuwa" },
              { label: "North Western", value: "North western" },
              { label: "Northern", value: "northern" },
              { label: "North Central", value: "northcentral" },
              { label: "Eastern", value: "eastern" },
              { label: "Central", value: "central" }
            ]}
            // variant="outlined"
          />
          <Field
            label="Postal Code"
            name="postalcode"
            component={TextFormField}
            variant="outlined"
          />
          <Field
            label="Country"
            name="country"
            component={TextFormField}
            variant="outlined"
            disabled={true}
          />
          <Field
            label="Phone Number"
            name="phone"
            component={TextFormField}
            variant="outlined"
          />

          {/* <Button type="submit">Submit</Button> */}
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
