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
          <div class="field has-addons has-addons-centered">
            <label className="title is-4">
              Enter addresses separated by commas:
            </label>
            <input class="input" type="text" placeholder="Addresses" />
            {/* {TODO} */}
          </div>
          <div class="field has-addons has-addons-centered">
            <p class="control">
              <img src="https://assets.coingecko.com/coins/images/4344/small/Y88JAze.png?1565065793" />
            </p>
            <input
              class="input"
              type="text"
              placeholder="Amount of Harmony (ONE) to lend"
            />
            <p class="control">
              <a class="button is-primary">Start Loan</a>
            </p>
          </div>
          <div
            class="field is-grouped is-grouped-right"
            disabled={isSubmitting}
          >
            <p class="control">
              <a class="button is-light">Clear</a>
            </p>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default ContractForm;
