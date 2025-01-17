import { act, render, screen, waitFor } from "@__tests__/utils/customRender"
import { Routes } from "."
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { api } from "@services/api"
import { mockWeatherAPIResponse } from "@__tests__/mocks/apis/mockWeatherAPIResponse"

describe("Routes", () => {
    it("should render Search Screen when is not selected", async () => {
        // render(<Routes />, {wrapper: SafeAreaProvider})
        // const {debug} =
         render(<Routes />)
        // console.log(debug)

        const title = await waitFor(() => screen.findByText(/^escolha um local/i));
        expect(title).toBeTruthy()
    })

    it("should render Dashboard screen when is selected", async () => {
        jest.spyOn(api, "get").mockResolvedValueOnce({
            data: mockWeatherAPIResponse
        })
        
        const city = {
            name: "São Paulo",
            id: "SP",
            latitude: -23.5489,
            longitude: -46.6388
        }

        await saveStorageCity(city)
        await waitFor(() => render(<Routes />));

        const title = await waitFor(() => screen.getByText(city.name));
    
        expect(title).toBeTruthy();

    })
})