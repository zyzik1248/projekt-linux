import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import { render as ren, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from './App'
import Home from './pages/Home'
import Quiz from './pages/Quiz';
import RadioQuestion from './components/RadioQuestion'
import Distributions from './pages/Distributions'

test("renders components", async () => {
  const { getAllByText } = render(<App />)
  expect(getAllByText("Wszystko o linuxie")[0]).toBeInTheDocument()
})

test('click start quiz corectly', async () => {
  const { getByTestId } = render(<App />)
  fireEvent.click(getByTestId(/start quiz/i))
  expect(getByTestId(/b quiz/i)).toBeInTheDocument()
})

test("matches snapshot home page", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
})

test('should display timer', async () => {
  jest.useFakeTimers();
  const { getByTestId } = render(<Quiz />)
  fireEvent.click(getByTestId(/start quiz/i))
  jest.advanceTimersByTime(5000);
  expect(getByTestId(/timer/i)).toHaveTextContent("55")
  //sanity test
  expect(getByTestId(/timer/i)).not.toHaveTextContent("54")
})

test('should radio question work', () => {
  jest.useFakeTimers();
  const handleChange = jest.fn();
  const { getByTestId } = render(
    <RadioQuestion
      correct="ps aux"
      id={2}
      answers={["rm -fr", "cd", "chmod +rx", "ps aux"]}
      handleChange={handleChange}
      disabled={true} />
  )
  fireEvent.change(getByTestId(/radio-question-cd/i), { target: { value: "cd" } })
  jest.runAllTimers();
  expect(getByTestId(/radio-question-cd/i).value).toBe('cd')
  expect(getByTestId(/radio-question-cd/i).value).not.toBe('chmod +rx')
})

test('data from json file', async () => {
  const { getAllByTestId } = render(<Distributions />)
  expect(getAllByTestId('logo_distr').map((el) =>
    el.alt
  )).toContain('ubuntu')
})