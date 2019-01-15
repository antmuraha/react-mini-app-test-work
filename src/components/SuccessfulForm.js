import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SuccessfulForm = () => (
  <React.Fragment>
    <SvgIcon>
      <path d="M24.7802734,5.0820313c-0.2939453-0.2929688-0.7685547-0.2929688-1.0605469,0L9.4921875,19.3265381  l-7.2119141-7.2200928c-0.2919922-0.2919922-0.7666016-0.2939453-1.0605469,0c-0.2929688,0.2919922-0.2929688,0.7675781,0,1.0605469  l7.7421875,7.7509766c0.1464844,0.1464844,0.3378906,0.2197266,0.5302734,0.2197266s0.3837891-0.0732422,0.5302734-0.2197266  L24.7802734,6.1425781C25.0732422,5.8496094,25.0732422,5.3740234,24.7802734,5.0820313z" />
    </SvgIcon>

    <button onClick={onPress}>Go to Dashboard</button>
  </React.Fragment>
);

let onPress = () => {
  alert("successful");
};

export default SuccessfulForm;