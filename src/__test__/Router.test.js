import React from "react";
import { shallow } from "enzyme";
import App from "../App/App";
import Router from "../App/Router";

it("Router it Worked", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(Router).length).toEqual(1);
});
