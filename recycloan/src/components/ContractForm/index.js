import React from "react";
import { Formik } from "formik";

const ContractForm = () => (
  <div>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="field has-addons has-addons-centered">
            <div className="title is-4 clear">
              Enter addresses separated by commas:
            </div>
            <br />
            <textarea
              className="input clear"
              type="text"
              placeholder="Addresses"
            />
            {/* {TODO} */}
          </div>
          <div className="field has-addons has-addons-centered">
            <p className="control">
              <img src="https://assets.coingecko.com/coins/images/4344/small/Y88JAze.png?1565065793" />
            </p>
            <input
              className="input"
              type="text"
              placeholder="Amount of Harmony (ONE) to lend"
            />
            <p className="control">
              <a className="button is-primary">Start Loan</a>
            </p>
          </div>
          <div
            className="field is-grouped is-grouped-right"
            disabled={isSubmitting}
          >
            <p className="control">
              <a className="button is-light">Clear</a>
            </p>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default ContractForm;
