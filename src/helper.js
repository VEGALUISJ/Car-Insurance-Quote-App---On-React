// date calculation function base on user choice
export function obtainDiffYear(year) {
  return new Date().getFullYear() - year;
}

// export the total to pay base in the brand
export function brandCalculation(brand) {
  let increase;

  switch (brand) {
    case "European":
      increase = 1.3;
      break;
    case "American":
      increase = 1.15;
      break;
    case "Asian":
      increase = 1.05;
      break;
    default:
      break;
  }

  return increase;
}

//export the plan calculation
export function planCalculation(plan) {
  if (plan === "basic") {
    return 1.2;
  } else if (plan === "fullCover") {
    return 1.5;
  }
}
