import { render, screen } from "@testing-library/react-native"
import { Day } from "."
import clearDay from "@assets/clear_day.svg"

describe("Component: Day", () => {
    it("should render without crashing", () => {
        const data = {
            day: "18/07",
            min: "30", 
            max: "40",
            icon:  clearDay,
            weather: "Clean sky"
        }
        
        render(<Day data={data} />)
        expect(screen.getByText("18/07")).toBeTruthy()
    })
})