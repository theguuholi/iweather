import { render, screen } from "@testing-library/react-native"
import { Input } from "."

describe("Component: Input", () => {
    it("should render without activity indicator if loading prop is undefined", () => {
        // const {debug} = render(<Input />)
        // debug()
        render(<Input />);
        const activityIndicator = screen.queryByTestId("activity-indicator");
        expect(activityIndicator).toBeNull();
    })

    it("should render activity indicator if loading prop is true", () => {
        render(<Input isLoading />);
        const activityIndicator = screen.queryByTestId("activity-indicator");
        expect(activityIndicator).toBeTruthy()
    })
})

// Components: ...., Screens: ...., Utils: ...., Services: ....