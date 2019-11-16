import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextFormField } from "../FormFields/TextFormField";
import {Button} from "@material-ui/core";

const schema = yup.object({
    name: yup.string().required("Company name is required"),
    email : yup.string().required("email address is required"),
    message : yup.string().required("message is required")
})

interface Props {}

const ContactForm: React.FC<Props>= () =>{
    return (
       
        <Formik
             initialValues = {{
                name : "",
                email : "",
                contactnumber: "",
                message : ""

            }}
            validationSchema={schema}
            onSubmit ={(values,{setSubmitting}) => console.log(values)}
            >

            {({values , errors}) => (
                <Form>
                    <h2>Contact Form</h2>
                     <Field
                    label="Name"
                    name="name"
                    component={TextFormField}
                    variant="outlined"
                        />
                         <Field
                    label="Email"
                    name="email"
                    component={TextFormField}
                    variant="outlined"
                        />
                         <Field
                    label="Contact Number"
                    name="contactnumber"
                    component={TextFormField}
                    variant="outlined"
                        />
                         <Field
                    label="Message"
                    name="message"
                    component={TextFormField}
                    variant="outlined"
                        />
                         <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm;