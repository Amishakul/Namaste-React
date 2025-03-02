import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


test("Should load Header Component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    //const loginButton = screen.getByText("Login");


    expect(loginButton).toBeInTheDocument()

    
});




test("Should load Header Component with cart items 0", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 items)");

    expect(cartItems).toBeInTheDocument()

    
});




test("Should load Header Component with a cart item", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument()

    
});


test("Should Login button to logout button on click", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login"})

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout"})


    expect(logoutButton).toBeInTheDocument()

    
});