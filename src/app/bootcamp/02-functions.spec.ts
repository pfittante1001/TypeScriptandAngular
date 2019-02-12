describe('functions', () => {

  it('arbitrary number of parameters', () => {

    // Rest operator.
    function add(a: number, b: number, ...rest: number[]): number {
      const firstTwo = a + b;
      return rest.reduce((prev, next) => prev + next, firstTwo);
    }

    expect(add(2, 2)).toBe(4);
    expect(add(2, 2, 2)).toBe(6);
    expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
  });
});
describe('practical', () => {

  interface Payments {
    date: string;
    amount: number;
    customer: string;
  }

  const payments: Payments[] = [
    { date: '1/1/2018', amount: 300, customer: 'Bob' },
    { date: '1/8/2018', amount: 615.23, customer: 'Bob' },
    { date: '1/19/2018', amount: 10082, customer: 'Sue' },
    { date: '2/2/2018', amount: 12, customer: 'Bob' },
  ];

  // it('Your practice:', () => {

    // Write some code here that gives me the answer
    // the total of all the payments by just bob.

    // expect(answer.total).toBe(927.23);


});

