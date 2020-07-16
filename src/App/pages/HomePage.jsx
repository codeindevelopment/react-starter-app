import React from "react";
import { FormattedMessage } from "react-intl";
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="React Starter App" />
        <title>HomePage</title>
      </Helmet>

      

      <h2>
        <FormattedMessage id="WELCOME.REACT" />
      </h2>
    </>
  );
}
