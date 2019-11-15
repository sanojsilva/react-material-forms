import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextFormField } from "../FormFields/TextFormField";
import { Button } from "@material-ui/core";

const schema = yup.object({
    username: yup.string().required()
});

interface Props {}

const LoginForm: React.FC<Props> = () => {
    return (
        <Formik
            initialValues={{ username: "" }}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => console.log(values)}
        >
            {({ values, errors }) => (
                <Form>
                    <Field
                        label="Username"
                        name="username"
                        component={TextFormField}
                        variant="outlined"
                    />
                    <Button type="submit">Submit</Button>
                    <div>Values</div>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                    <div>Errors</div>
                    <pre>{JSON.stringify(errors, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
