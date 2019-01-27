import React from "react";
import { Switch, Route } from "react-router-dom";
import SignupForm from "./SignupForm";
import AboutmeForm from "./AboutmeForm";
import SuccessfulForm from "./SuccessfulForm";
import MotionFade from "./MotionFade";

class Content extends React.PureComponent {
  render() {
    //console.log("Content");
    return (
      <React.Fragment>
        <MotionFade>
          <Switch>
            <Route exact path="/" component={SignupForm} />
            <Route exact path="/aboutme" component={AboutmeForm} />
            <Route exact path="/successful" component={SuccessfulForm} />
          </Switch>
        </MotionFade>
      </React.Fragment>
    );
  }
}

export default Content;
