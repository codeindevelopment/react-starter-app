import React from "react";
import { FormattedMessage } from "react-intl";

export default function HomePage() {
  return (
    <div>
      <h2>Hello React</h2>

      <h2>
        <FormattedMessage id="WELCOME.REACT" />
      </h2>
    </div>
  );
}
