import { handleKeyBoardInput } from "./src/index";

document.getElementById = jest.fn(() => ({textcontent: ''}))

describe('handleKeyboardInput', () => {
    handleKeyBoardInput ('A')
    expect(document.getElementById('output').textContent).tobe('')
})