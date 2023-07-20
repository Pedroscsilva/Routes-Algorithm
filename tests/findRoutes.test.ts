import findRoutes from "../src/main";

describe("tests for findRoutes", () => {
    const userRoutes = [
        ["GRU", "SSA"],
        ["GIG", "POA"],
        ["SSA", "GIG"],
        ["POA", "FOR"]
    ]

    it("should return the correct order with a 1 sized sample", () => {
        const slicedRoute = userRoutes.slice(0, 1);
        const simplifiedRoute = findRoutes(slicedRoute);

        expect(simplifiedRoute).toEqual(["GRU", "SSA"]);
    });

    it("should return the correct order with a 3 sized sample", () => {
        const slicedRoute = userRoutes.slice(0, 3);
        const simplifiedRoute = findRoutes(slicedRoute);

        console.log(simplifiedRoute);

        expect(simplifiedRoute).toEqual(["GRU", "SSA", "GIG", "POA"]);
    });

    it("should return the correct order with a 4 sized sample", () => {
        const simplifiedRoute = findRoutes(userRoutes);

        expect(simplifiedRoute).toEqual(["GRU", "SSA", "GIG", "POA", "FOR"]);
    });
});