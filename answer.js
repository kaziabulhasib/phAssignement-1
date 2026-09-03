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

// question 3 : validateUsername

function validateUsername(username) {
  const isShorter = username.length < 4;
  const isSpaceIncludes = username.includes(" ");
  const isContainAdmin = username.toLowerCase().includes("admin");
  if (isShorter) {
    return "Too Short";
  } else if (isSpaceIncludes) {
    return "No Space Allowed";
  } else if (isContainAdmin) {
    return "Reserved Word";
  } else {
    return "Available";
  }
}

// question 4 :  Fare Meter

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  const minFare = 50;
  let totalFare = 0;
  const disTanceCharge = distance > 2 ? (distance - 2) * 15 : 0;
  const waitingCharge = waitingMinutes > 0 ? waitingMinutes * 2 : 0;

  totalFare = minFare + disTanceCharge + waitingCharge;

  const nightCharge = isNight ? totalFare * 0.2 : 0;

 const  grandTotalFare = nightCharge ? totalFare + nightCharge : totalFare;

  return grandTotalFare;
}


// question 5 : getFullName
const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  let verdict;
  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
