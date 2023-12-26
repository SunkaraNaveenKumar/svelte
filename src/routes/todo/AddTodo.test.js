import { render, screen } from '@testing-library/svelte';
import AddTodo from './AddTodo.svelte'
describe("render AddTodo Component", () => {
    it("render Component correctly", () => {
        render(AddTodo, { props: { text: "naveen", editToggle: false, taskDone: false } })
        const handleInput = screen.getByPlaceholderText("Enter some text")
        expect(handleInput).toBeDefined()
        expect(handleInput.value).toBe("naveen")
        const handleCheckBox = screen.getByRole("checkbox")
        expect(handleCheckBox.checked).toBeFalsy()
        const handleAddBtn = screen.getByRole("button", { name: "Add" })
        expect(handleAddBtn).toBeDefined()
        const handleSaveBtn = screen.queryByRole("button", { name: "Save" })
        expect(handleSaveBtn).toBeNull()
        const handleCancelBtn = screen.queryByRole("button", { name: "Cancel" })
        expect(handleCancelBtn).toBeNull()
    })
    it("clicked on add button", () => {

    })
})