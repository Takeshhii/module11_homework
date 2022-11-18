import { getPercents } from "../../tasks/task2";

describe("tests for getPercents function", () => {

    it("Проверка на работу вычисления", () => {
        expect(getPercents(10,300)).toBe(30);
        expect(getPercents(50,200)).toBe(100);
    });

    it("Проверка на работу вычисления дробного числа", () => {
        expect(getPercents(25, 325)).toBe(81.25);
        expect(getPercents(50, 100.5)).toBeLessThan(50.25); //50.24999..
    })

    it("Проверка вычисления с нулём", () => {
        expect(getPercents(123, 0)).toBe(0);
        expect(getPercents(0, 532)).toBe(0);
    })

    it("Проверка вычисления с десятичными", () => {
        expect(getPercents(0.2, 0.1)).toBeCloseTo(0.0002, 4);
    });
});
