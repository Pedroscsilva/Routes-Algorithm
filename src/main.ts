function findRoutes(routes: string[][]): string[] {
    // creates an object mapping every location to its next location
    const nextMap = Object.fromEntries(routes);

    
    // finds the first known location and assigns its value to currentLocation
    let currentLocation = "";
    const beforeList = Object.keys(nextMap);
    for (const location of beforeList) {
        if (!(Object.values(nextMap)).includes(location)) {
            currentLocation = location;
            break;
        }
    }

    const order = [currentLocation];

    // inserts the next known location based on the nextMap object
    while (nextMap[currentLocation]) {
        order.push(nextMap[currentLocation]);
        currentLocation = nextMap[currentLocation];
    }

    return order;
}

export default findRoutes;