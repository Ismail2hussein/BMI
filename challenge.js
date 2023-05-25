function calculateBMI(weight, height) {
    // Calculate the BMI
    const bmi = weight / (height ** 2);
    
    // Return the BMI
    return bmi;
  }
  
  // Calculate the BMI of Ali
  const aliWeight = 70;
  const aliHeight = 1.8;
  const aliBMI = calculateBMI(aliWeight, aliHeight);
  
  // Calculate the BMI of Mohamed
  const mohamedWeight = 80;
  const mohamedHeight = 1.75;
  const mohamedBMI = calculateBMI(mohamedWeight, mohamedHeight);
  
  // Compare the BMIs and log the result
  if (aliBMI > mohamedBMI) {
    console.log("Ali's BMI is higher than Mohamed's");
  } else if (mohamedBMI > aliBMI) {
    console.log("Mohamed's BMI is higher than Ali's");
  } else {
    console.log("Ali and Mohamed have the same BMI");
  }