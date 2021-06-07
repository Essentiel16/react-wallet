import Button from "../src/components/Button";


test('mock implementation of a basic function', () => {
  const mock = jest.fn(() => 'I am a mock function')
  expect (mock('Calling my mock function!')).toBe('I am a mock function')

})

test('mock return value of a function one time', () => {
  const mock = jest.fn()
  mock.mockReturnValueOnce('Hello').mockReturnValueOnce('there!')

  mock()

  expect(mock).toHaveBeenCalledTimes(1)

  mock('Hello', 'there', 'Steve')
  expect(mock).toHaveBeenCalledWith('Hello', 'there', 'Steve')
})

describe('<Button/>', () => {
  const data = {
    isLoading: true,
    onClick: () => {},
    buttonStyle: "btn--primary-solid",
    disabled: false,
    type: "button"
  }

  test('Render button', () => {
    render(() => Button(data))
  })
})