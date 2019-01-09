export class Util {
    static isNullOrEmpty(value: string) {
        return value == null || value.length === 0;
    }

    static reverse(value: string) {
        return value.split("").reverse().join("")
    }
}