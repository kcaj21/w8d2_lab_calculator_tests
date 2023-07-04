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

    expect()
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

    expect()
})

})