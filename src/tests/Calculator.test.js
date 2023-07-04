import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add two numbers', () => {
    const num1Button = container.getByTestId("number1")
    const num4Button = container.getByTestId("number4")
    const addButton = container.getByTestId("operator-add")
    const equalsButton = container.getByTestId("operator-equals")
    fireEvent.click(num4Button);
    fireEvent.click(addButton);
    fireEvent.click(num1Button);
    fireEvent.click(equalsButton);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');

})

  it('should subtract two numbers', () => {
    const num7Button = container.getByTestId("number7")
    const num4Button = container.getByTestId("number4")
    const subtractButton = container.getByTestId("operator-subtract")
    const equalsButton = container.getByTestId("operator-equals")
    fireEvent.click(num7Button);
    fireEvent.click(subtractButton);
    fireEvent.click(num4Button);
    fireEvent.click(equalsButton);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');

})

it('should multiply two numbers', () => {
  const num3Button = container.getByTestId("number3")
  const num5Button = container.getByTestId("number5")
  const multiplyButton = container.getByTestId("operator-multiply")
  const equalsButton = container.getByTestId("operator-equals")
  fireEvent.click(num3Button);
  fireEvent.click(multiplyButton);
  fireEvent.click(num5Button);
  fireEvent.click(equalsButton);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('15');

})

it('should divide two numbers', () => {
  const num2Button = container.getByTestId("number2")
  const num1Button = container.getByTestId("number1")
  const num7Button = container.getByTestId("number7")
  const divideButton = container.getByTestId("operator-divide")
  const equalsButton = container.getByTestId("operator-equals")
  fireEvent.click(num2Button);
  fireEvent.click(num1Button);
  fireEvent.click(divideButton);
  fireEvent.click(num7Button);
  fireEvent.click(equalsButton);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('3');

})

it('concatenate multiple number button clicks', () => {
  const num2Button = container.getByTestId("number2")
  const num1Button = container.getByTestId("number1")
  const num3Button = container.getByTestId("number3")
  const addButton = container.getByTestId("operator-add")
  const equalsButton = container.getByTestId("operator-equals")
  fireEvent.click(num1Button);
  fireEvent.click(num2Button);
  fireEvent.click(num1Button);
  fireEvent.click(num2Button);
  fireEvent.click(addButton);
  fireEvent.click(num3Button);
  fireEvent.click(equalsButton);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('1215');

})

it('chain multiple operations together', () => {
  const num2Button = container.getByTestId("number2")
  const num1Button = container.getByTestId("number1")
  const num7Button = container.getByTestId("number7")
  const divideButton = container.getByTestId("operator-divide")
  const multiplyButton = container.getByTestId("operator-multiply")
  const subtractButton = container.getByTestId("operator-subtract")
  const equalsButton = container.getByTestId("operator-equals")
  fireEvent.click(num1Button);
  fireEvent.click(num2Button);
  fireEvent.click(multiplyButton);
  fireEvent.click(num1Button);
  fireEvent.click(num2Button);
  fireEvent.click(divideButton);
  fireEvent.click(num2Button);
  fireEvent.click(subtractButton);
  fireEvent.click(num7Button);
  fireEvent.click(equalsButton);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('65');

})
it('clear the running total without affecting the calculation', () => {
  const num2Button = container.getByTestId("number2")
  const addButton = container.getByTestId("operator-add")
  const equalsButton = container.getByTestId("operator-equals")
  fireEvent.click(num2Button);
  fireEvent.click(addButton);
  fireEvent.click(num2Button);
  fireEvent.click(addButton);
  fireEvent.click(num2Button);
  fireEvent.click(equalsButton);
  fireEvent.click(clear);
  fireEvent.click(addButton);
  fireEvent.click(num2Button);
  fireEvent.click(equalsButton);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('8');

})

})