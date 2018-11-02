const sumNumbers = require("./sumNumberSolution");

test('Sum numbers of abc123xyz equals 123', () => {
    expect(sumNumbers("abc123xyz")).toEqual(123);
});

test('Sum numbers of apoc311xyz equals 311', () => {
    expect(sumNumbers("apoc311xyz")).toEqual(311);
});

test('Sum numbers of apoc311xyz equals 311', () => {
    expect(sumNumbers("0 1290")).toEqual(1290);
});

test('Sum numbers of -1 90 equals 91', () => {
    expect(sumNumbers("-1 90")).toEqual(91);
});

test('Sum numbers of -zyx 10100 equals 10100', () => {
    expect(sumNumbers("-zyx 10100")).toEqual(10100);
});

test('Sum numbers of q0-0x98+#1 equals 99', () => {
    expect(sumNumbers("q0-0x98+#1")).toEqual(99);
});

test('Sum numbers of l501%322 equals 823', () => {
    expect(sumNumbers("l501%322")).toEqual(823);
});

test('Sum numbers of 0-1 equals 1', () => {
    expect(sumNumbers("0-1")).toEqual(1);
});
