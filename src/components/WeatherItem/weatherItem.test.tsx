import { render, screen } from "@testing-library/react-native"
import { WeatherItem } from "."
import drop from "@assets/drop.svg"
describe("Component: WeatherItem", () => {
    it("should render without crashing", () => {
        render(<WeatherItem
            icon={drop}
            title="Rain"
            value="100%"
        />)

        const title = screen.getByText("Rain")
        const value = screen.getByText("100%")

        expect(title).toBeTruthy()
        expect(value).toBeTruthy()
    })
})