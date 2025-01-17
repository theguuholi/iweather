import { useCity } from "@hooks/useCity"
import { act, renderHook, waitFor } from "@testing-library/react-native"
import { CityProvider } from "./CityContext"

const city = {
    name: "São Paulo",
    id: "123",
    latitude: 123,
    longitude: 3333
}
describe("Context: CityContext", () => {
    it("should be able to set a city", async () => {
        const { result } = renderHook(() => useCity(), { wrapper: CityProvider })
        await waitFor(() => act(() => result.current.handleChanceCity(city)))
        expect(result.current.city).toEqual(city)
    })
})