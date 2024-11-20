import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


// Render the contact us component to js-dom first

// instead of writing the function name as test we can also write "it".

describe("Contact Us page test case" , () => {

    test("Should load contact us component", () => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
    
        // Assertion
        expect(heading).toBeInTheDocument();
    
    });
    
    
    test("Should load button inside contact us component", () => {
        render(<Contact/>);
    
        //const button = screen.getByRole("button")
    
        const button = screen.getByText("Submit");
    
    
        // Assertion
        expect(button).toBeInTheDocument();
    
    });
    
    
    test("Should load input name inside contact us component", () => {
        render(<Contact/>);
    
        const inputname = screen.getByPlaceholderText("name");
    
    
        // Assertion
        expect(inputname).toBeInTheDocument();
    
    });
    
    
    test("should load 2 input boxes on the contact component", () => {
        render(<Contact />);
        
        // Querying
        const inputBoxes = screen.getAllByRole("textbox"); // this returns your JSX element/react element/object/React fiber node/virtual dom object
    
        console.log(inputBoxes.length);
    
        // assertion
        //expect(inputBoxes.length).toBe(2);
        expect(inputBoxes.length).not.toBe(3);
    })

})


