import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from ".";

describe("Component: SelectList", () => {
    it("should return city details selected", () => {
        const data = [
            {
                name: "São Paulo",
                id: "1",
                latitude: 123,
                longitude: 12,
            },
            {
                name: "Americana",
                id: "2",
                latitude: 222,
                longitude: 444,
            },
        ];

        const onPress = jest.fn();

        render(
            <SelectList
                data={data}
                onChange={() => { }}
                onPress={onPress}
            />
        );

        const selectedCity = screen.getByText("Americana");
        fireEvent.press(selectedCity);

        expect(onPress).toHaveBeenCalled()
        expect(onPress).toHaveBeenCalledWith(data[1])
    });

    it("should not show options when data props is empty", () => {
        render(<SelectList data={[]} onChange={() => { }} onPress={() => { }} />);

        const options = screen.queryByTestId("options");
        // console.log(options.children)
        expect(options.children).toHaveLength(0);
    })
});
