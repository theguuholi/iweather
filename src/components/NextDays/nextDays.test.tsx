import { render, screen } from "@testing-library/react-native"
import { NextDays } from "."
import clearDay from "@assets/clear_day.svg"

describe("Component: NextDays", () => {
    it("should render without crashing", () => {
        const data = [
            {
                day: "18/07",
                min: "30",
                max: "40",
                icon: clearDay,
                weather: "Clean sky"
            },
            {
                day: "19/07",
                min: "30",
                max: "40",
                icon: clearDay,
                weather: "Clean sky"
            },
            {
                day: "20/07",
                min: "30",
                max: "40",
                icon: clearDay,
                weather: "Clean sky"
            },
            {
                day: "21/07",
                min: "30",
                max: "40",
                icon: clearDay,
                weather: "Clean sky"
            },
            {
                day: "22/07",
                min: "30",
                max: "40",
                icon: clearDay,
                weather: "nothing sky"
            }
        ]
        render(<NextDays data={data} />)

        expect(screen.getByText("18/07")).toBeTruthy()

    })
})