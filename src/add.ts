export function sumOf(a:number, b:number) : String {
    return new String(a + b)
}

(() => {
    sumOf(1, 2);
})();