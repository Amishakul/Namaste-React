import {fireEvent, render, screen} from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve ({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
})


it("should load restaurant menu component", async() => {
    await act(async () => render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    <RestaurantMenu/>
    <Cart/>
    </Provider>
    </BrowserRouter>
));

    const accordianHeader = screen.getByText("One Plus One Medium @649 (2)");
    fireEvent.click(accordianHeader);

    
    expect(screen.getAllByTestId("foodItems").length).toBe(2);

    const addBtns = screen.getAllByRole("button", {name: "Add +"});

    //console.log(addBtns.length);

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(4); // in the cart page

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(2);

    expect(screen.getByText("Cart is empty please add items to the cart !")).toBeInTheDocument();
});