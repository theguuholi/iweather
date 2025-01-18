import { CityProps } from "@services/getCityByNameService";
import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage"

const city: CityProps = {
    name: "London",
    id: "123",
    latitude: 51.5085,
    longitude: -0.1257
}

describe("Storage: cityStorage", () => {
    it("should save city data", async () => {
        const response = await getStorageCity();
        expect(response).toBeNull()
    })

    it("should save city data", async () => {
        const city: CityProps = {
            name: "London",
            id: "123",
            latitude: 51.5085,
            longitude: -0.1257
        }


        await saveStorageCity(city);

        const response = await getStorageCity();
        expect(response).toEqual(city)
    })

    it("should remove city data", async () => {
        await saveStorageCity(city);
        await removeStorageCity();

        const response = await getStorageCity();
        expect(response).toBeNull()

    })
})