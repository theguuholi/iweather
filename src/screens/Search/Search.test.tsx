import { mockCiyAPIResponse } from "@__tests__/mocks/apis/mockCityAPIResponse";
import { fireEvent, render, screen, waitFor } from "@__tests__/utils/customRender"
import { api } from "@services/api";
import { Search } from ".";

describe("Screen: Search", () => {
    it("should be show city option.", async () => {
        jest.spyOn(api, "get").mockResolvedValue({ data: mockCiyAPIResponse });

        render(<Search />);

        const searchInput = screen.getByTestId("search-input");
        fireEvent.changeText(searchInput, "São Paulo");

        const option = await waitFor(() => screen.findByText(/são paulo/i));
        expect(option).toBeTruthy();
    });
});
