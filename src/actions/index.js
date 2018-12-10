const UPPERBOUNDS = [33401, 55081, 99120, 132160, 198240, 264319, 396479, 528638, 99999999]
const PERCENTAGES = [.05, .09, .12, .15, .19, .23, .31, .35]

const NON_TAXABLE_MINIMUM = 85848.99
const FOURTH_CATEGORY_EXTRA = 321205.97

const PARTNER_DEDUCTION = 80033.97
const CHILD_DEDUCTION = 40361.43

// Falta actualizar los máximos
const MAX_CONTRIBUTION_DEDUCTION = 13926.16
const MAX_RETIRED_DEDUCTION = 407593
const MAX_RENT_DEDUCTION = 51967
const MAX_MORTGAGE_DEDUCTION = 20000

export const calculateTax = state => {  
  console.log(state);

  var rentDeduction,
    mortgageDeduction,
    monthlyContributionDeduction,
    monthlyContribution,
    annualContributionDeduction,
    nonTaxableMinimum

  // Se puede deducir hasta el 40% del alquiler mensuale.
  rentDeduction = 12 * state.rentDeduction * .4
  rentDeduction = rentDeduction > MAX_RENT_DEDUCTION ? MAX_RENT_DEDUCTION : rentDeduction

  mortgageDeduction = 12 * state.mortgageDeduction
  mortgageDeduction = mortgageDeduction > MAX_MORTGAGE_DEDUCTION ? MAX_MORTGAGE_DEDUCTION : mortgageDeduction

  if (state.isRetired) {
    monthlyContribution = state.grossSalary * .06

    if (monthlyContribution > MAX_CONTRIBUTION_DEDUCTION) {
      monthlyContributionDeduction = monthlyContribution - MAX_CONTRIBUTION_DEDUCTION
    } else {
      monthlyContributionDeduction = monthlyContribution * .94
    }
  } else {
    monthlyContribution = state.grossSalary * .17

    if (monthlyContribution > MAX_CONTRIBUTION_DEDUCTION) {
      monthlyContributionDeduction = monthlyContribution - MAX_CONTRIBUTION_DEDUCTION
    } else {
      monthlyContributionDeduction = monthlyContribution * .83
    }
  }

  annualContributionDeduction = 13 * monthlyContributionDeduction

  if (state.isRetired) {
    nonTaxableMinimum = MAX_RETIRED_DEDUCTION + rentDeduction + mortgageDeduction
  } else {
    nonTaxableMinimum = NON_TAXABLE_MINIMUM + FOURTH_CATEGORY_EXTRA

    if (state.livesInPatagonia) {
      nonTaxableMinimum *= 1.22
    }

    if (state.hasPartner) {
      nonTaxableMinimum += PARTNER_DEDUCTION
    }

    nonTaxableMinimum += state.childrenCount * CHILD_DEDUCTION + rentDeduction + mortgageDeduction
  }

  console.log(annualContributionDeduction)
  console.log(nonTaxableMinimum)
}
