export function routingTo(href) {
  let route = "signup";
  switch (href) {
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
