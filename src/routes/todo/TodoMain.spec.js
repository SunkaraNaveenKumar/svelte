import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import TodoMain from './TodoMain.svelte'
import userEvent from '@testing-library/user-event';
let todos = [
    { id: 1, text: "Create a Svelte starter app", done: true },
    { id: 2, text: "Create your first component", done: true },
    { id: 3, text: "Test your first component", done: false },
];
describe("render Todomain component correctly", () => {

    it("render heading text", () => {
        render(TodoMain)
        const text = screen.getByText(`1 of ${todos.length} remaining`)
        expect(text).toBeDefined()
    }),
        it("type value in input box", async () => {
            render(TodoMain)
            const inputHandle = screen.getByPlaceholderText("Enter some text")
            await userEvent.type(inputHandle, "naveen")
            expect(inputHandle.value).toBe("naveen")

        }),
        it("checkbox is unchecked initally", async () => {
            render(TodoMain)
            const handleCheckbox = screen.getByRole("checkbox")
            expect(handleCheckbox.checked).toBeFalsy()
            await userEvent.click(handleCheckbox)
            expect(handleCheckbox.checked).toBe(true)
        })
    it("click on add button", async () => {
        render(TodoMain)
        const handleAddButton = screen.getByRole("button", { name: "Add" })
        const handleInputText = screen.getByPlaceholderText("Enter some text")
        await userEvent.type(handleInputText, "kavin")
        await userEvent.click(handleAddButton)
        const handleList = screen.getAllByRole("list")
        if (Array.isArray(handleList)) {
            expect(handleList.length).toBe(todos.length + 1)
        }
        const secondEle = handleList[1]
        const getStyles = getComputedStyle(secondEle)
        expect(getStyles.textDecoration).toContain("line-through")
        const lastElement = handleList[3]
        expect(getComputedStyle(lastElement).textDecoration).not.toContain("line-through")
        //////////// add checkbox true
        const handleCheckbox = screen.getByRole("checkbox")
        await userEvent.type(handleInputText, "naveen")
        await userEvent.click(handleCheckbox)
        await userEvent.click(handleAddButton)
        const handleNewList = screen.getAllByRole("list")
        expect(handleNewList.length).toBe(todos.length + 2) // checking length of the array 
        const newLastEle = handleNewList[handleNewList.length - 1]
        expect(getComputedStyle(newLastEle).textDecoration).toContain("line-through") // checking the element has strike or not
    })
})