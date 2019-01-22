export function routingTo(href) {
 //console.log("routingTo", href);
  let route;
  switch (href) {
    case "/":
    case "/signup": {
      route = "signup";
      break;
    }
    case "/aboutme": {
      route = "aboutme";
      break;
    }
    case "/successful": {
      route = "successful";
      break;
    }
  }
  return {
    type: "ROUTING",
    route: route
  };
}
