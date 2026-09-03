// question: 1
function describeValue(name) {
  const truethVal = Boolean(name) === true ? "truthy" : "falsy";

  const propType = ` "${typeof name} | ${truethVal}"`;

  return propType;
}

// question: 2

function getDayType(day) {
    const updatedDay = day.toLowerCase();
  switch (updatedDay) {
    case "friday":
    case "saturday":
    return "weekend";
      
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    return "Working Day";
      
    default:
    return "Invalid Day";
  }
}




