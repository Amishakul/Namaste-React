import { render, screen, fireEvent } from "@testing-library/react";
import { act} from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// we are making a dummy/mock fetch function, we are trying to make exact copy of fetch function and how it works.

// fetch function returns us a promise, and that promise returns us a json, and we convert it to the json form. And then it returns us a promise once again and when we resolve the promise then we actually get the data.

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA); // rather than making actual api call and fetching data from it, fetch from a dummy mock data.
        }
    })
});

it("should Search Res List for pizza text input " , async () => {
    await act(async () => // act is used to handle state changes i.e. here fetch
        render(
            <BrowserRouter>
        <Body/>
        </BrowserRouter>
        )
    ) ;

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(8);

const searchBtn = screen.getByRole("button", { name: "Search"});

const searchInput = screen.getByTestId("searchInput"); // searching the search textbox

fireEvent.change(searchInput, {target: {value: "pizza"}});

fireEvent.click(searchBtn);

//     //console.log(searchBtn);

//     //expect(searchBtn).toBeInTheDocument();

//     // screen should load 4 res cards

const cardsAfterSearch = screen.getAllByTestId("resCard");

expect(cardsAfterSearch.length).toBe(1);

});

it("should filter Top Rated Restaurant" , async () =>{
    await act(async () => // act is used to handle state changes i.e. here fetch
        render(
            <BrowserRouter>
        <Body/>
        </BrowserRouter>
        )
    ) ;

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(1);


})