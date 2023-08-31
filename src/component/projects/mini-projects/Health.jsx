import { useState } from 'react';
import './index.css';

function Health() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [BMI, setBMI] = useState({
    value: 0,
    guidanceMsg: '',
  });

  const validation = (userInput, inputType) => {
    const isNumber = !Number.isNaN(Number(userInput));
    const isWithinLimit = userInput < 999;

    if (isNumber && isWithinLimit) {
      switch (inputType) {
        case 'height':
          setHeight(Number(userInput));
          break;
        case 'weight':
          setWeight(Number(userInput));
          break;
        case 'waist':
          setWaist(Number(userInput));
          break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const BMI = Number(weight / Math.pow(height / 100, 2)).toFixed(1);
    const waistHeightRatio = Number((waist / height).toFixed(1));
    const maxBMI =
      ethnicity && ethnicity !== 'white' && ethnicity !== 'other' ? 22.9 : 24.9;

    const underweight = BMI < 18.5;
    const healthyweight = BMI >= 18.5 && BMI <= maxBMI;
    const overweight = BMI >= maxBMI && BMI <= 29.9;
    const obese = BMI >= 30;

    const healthyWeightRange = {
      lowerValue: Number((18.5 * Math.pow(height / 100, 2)).toFixed(1)),
      upperValue: Number((maxBMI * Math.pow(height / 100, 2)).toFixed(1)),
    };

    const weightToGainOrLose = underweight
      ? (healthyWeightRange.lowerValue - weight).toFixed(1)
      : (weight - healthyWeightRange.upperValue).toFixed(1);

    const firstGuidance = `A healthy BMI, for a person over 18 years old, is between 18.5 and ${maxBMI
    }. `;
    const secondGuidance = 'Your result suggests you are ';
    const thirdGuidance = `Your ideal weight range is between: ${healthyWeightRange.lowerValue}kg and ${healthyWeightRange.upperValue}kg. Aim to `;
    const fourthGuidance = healthyweight
      ? 'maintain your weight. '
      : `${underweight ? 'gain' : 'lose'} ${weightToGainOrLose}kg. `;

    const guidanceModifier = [
      [underweight, 'underweight. '],
      [healthyweight, 'within the healthy weight range. '],
      [overweight, 'overweight. '],
      [obese, 'obese. '],
    ];

    const waistGuidance =
      waistHeightRatio <= 0.5
        ? 'Your waist size suggests you have a healthy amount of tummy fat. '
        : 'Your waist size suggests you have an unhealthy excess amount of tummy. ';

    setBMI((currBMI) => {
      const newBMI = { ...currBMI };

      newBMI.value = BMI;

      for (const modifier of guidanceModifier) {
        if (modifier[0]) {
          newBMI.guidanceMsg =
            firstGuidance +
            secondGuidance +
            modifier[1] +
            thirdGuidance +
            fourthGuidance;

          if (waist) {
            newBMI.guidanceMsg += waistGuidance;
          }

          return newBMI;
        }
      }

      return newBMI;
    });
  };

  return (
    <div className="project--container">
      <h2>BMI Calculator</h2>
      <form onSubmit={handleSubmit} className="bmiForm">
        <label>Height: </label>
        <input
          type="text"
          required
          className="input"
          value={height}
          onChange={(e) => validation(e.target.value, 'height')}
        />
        <br />
        <label>Weight: </label>
        <input
          type="text"
          required
          className="input"
          value={weight}
          onChange={(e) => validation(e.target.value, 'weight')}
        />
        <br />
        <label>Waist Size: </label>
        <input
          type="text"
          className="input"
          value={waist}
          onChange={(e) => validation(e.target.value, 'waist')}
        />
        <br />
        <label>Ethnicity: </label>
        <select
          value={ethnicity}
          onChange={(e) => setEthnicity(e.target.value)}
        >
          <option hidden></option>
          <option value="bangladeshi">Bangladeshi</option>
          <option value="black african">Black African</option>
          <option value="black carribbean">Black Carribbean</option>
          <option value="chinese">Chinese</option>
          <option value="indian">Indian</option>
          <option value="middle eastern">Middle Eastern</option>
          <option value="pakistani">Pakistani</option>
          <option value="white">White</option>
          <option value="other">Other</option>
        </select>
        <br />
        <input type="submit" value="submit" className="button"></input>
      </form>
      <div>
        {BMI.value ? (
          <>
            <h2>Your BMI is: {BMI.value}</h2>
            <p>{BMI.guidanceMsg}</p> <br />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Health;
