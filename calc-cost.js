export function calcPrice(searchParams) {
    const from = searchParams.get("pick-up-date");
    const to = searchParams.get("return-date");
    const carCat = searchParams.get("car-category");
    console.log(from, to, carCat);
    const timeDiff = (new Date(to)) - (new Date(from));
    const days = timeDiff / (1000 * 60 * 60 * 24);
    const pricePerDay = carCat === "A" ? 35 : carCat === "B" ? 45 : carCat === "C" ? 50 : carCat === "D" ? 60 : 0;
    return pricePerDay * days;
}