
import { compose } from './compose';
import { formatName } from './utils';
describe('declaring variables etc with typescript', () => {
  describe('eventual typing', () => {
    it('an example to evental typing', () => {
      let age: number;

      //
      age = 49;

      expect(age).toBe(49);
      expect(typeof age).toBe('number');

      // age = 'Old';
      // expect(typeof age).toBe('string');
      // age = ['blue', 'green', 'red'];
    });
    it('implicit typing', () => {
      let age = 49;

      expect(age).toBe(49);

      age = 60;
    });
    it('using const', () => {
      const PI = 3.1415;

      expect(PI).toBe(3.1415);

      // Later on

      // PI = 3;

      const FAVORITE_NUMBERS = [1, 12, 20, 108, 23];

      expect(FAVORITE_NUMBERS[1]).toBe(12);

      FAVORITE_NUMBERS[1] = 32;

      const movie = {
        title: 'Lego Movie 2'
      };

      // movie = { title: 'Thumbalina!'};

      movie.title = 'Thor';
    });
  });

  describe('literals in typescript', () => {
    it('has number literals', () => {
    const first = 10;
    const second = 10.1;
    const salary = 1_000_000;
    const hexNumber = 0xff;
    const binaryNumber = 0b1010101;
    const octal = 0o744;
    // let first = 'Tacos';
    });
    it('has boolean literals', () => {
      const isTrue = true;
      const isFalse = false;
    });
    it('some things about strings', () => {
      const myName = 'Putintane';
      expect(`The name is ${myName}`).toBe('The name is Putintane');
    });
    it('has array literals', () => {
    const things = [];
    things[0] = 'Morning';
    things[1] = 99;
    things[200] = things;

    const numbers: number[] = [];

    // numbers[0] = 'Red';
    numbers[0] = 12;

    // const settings: (boolean | string)[] = [];
    const settings: Array<boolean | string> = [];

    settings[0] = true;
    settings[1] = 'Hello';
    // settings[2] = 99;
    });
  });

  describe('tuples', () => {
    it('making the case', () => {
      interface FormattedNameResult {
        fullName: string;
        numberOfLetters: number;
      }
      function formatName(first: string, last: string): FormattedNameResult {
        const fullName = `${last}, ${first}`;
        return {
          fullName,
          numberOfLetters: fullName.length
        };
      }

      const formattedName = formatName('Han', 'Solo');
      expect(formattedName.fullName).toBe('Solo, Han');
      expect(formattedName.numberOfLetters).toBe(9);
    });
    it('a couple pieces before we look at a tuple', () => {

        let d1: [boolean, string, string];
        d1 = [true, '12', 'cat'];
        type Person = [string, string, number, string];

          // type ThingyWithLettersInIt = string;

          // const name: ThingyWithLettersInIt = 'Jeff';
        const warren: Person = ['Warren', 'Ellis', 58, 'Musician'];
      });
    it('formatting a name with a tuple', () => {
          function formatName(first: string, last: string): [string, number] {
            const fullName = `${last}, ${first}`;
            return [fullName, fullName.length];
      }
    });
  });
  describe('Object literals', () => {
    it('has them', () => {
    interface Person {
    firstName: string;
    lastName: string;
    age: number;
    }
    const Joe: Person = {
    firstName: 'Joe',
    lastName: 'Schmidt',
    age: 53
    };
    function getPersonsInfo(person: Person): string {
    return `This person is ${person.firstName} and they are ${person.age}`;
    }

    console.log(getPersonsInfo(Joe));
    });
    it('duck typing', () => {


      function logIt(thing: { message: string }) {
        console.log(thing.message);
      }
      logIt({ message: 'You\'ve Got mail!' });
    });
    it('using a dictionary', () => {

      interface Actor {
        firstName: string;
        lastName: string;
        agent?: string;
      }
      interface Movie {
      title: string;
      director: string;
      yearReleased: number;
      cast: {
        [key: string]: Actor
      };
    }

      const movie: Movie = {
        title: 'Thor Ragnorak',
        director: 'Waititi',
        yearReleased: 2017,
        cast: {
          // tslint:disable-next-line:object-literal-key-quotes
          'Thor': { firstName: 'Chris', lastName: 'Hemsworth' },
          // tslint:disable-next-line:object-literal-key-quotes
          'Odin': { firstName: 'Anthony', lastName: 'Hopkins', agent: 'Smith' }
        }
      };

      // const actor = movie.cast.filter(cm => cm.role === 'Odin').map(m => m.actor)[0];
      // expect(actor).toBe('Hopkins');

      // tslint:disable-next-line:no-string-literal
      const actor = movie.cast['Odin'].lastName;
      expect(actor).toBe('Hopkins');

      const drStrange: Movie = {
        title: 'Doctor Strange',
        director: 'Smith',
        yearReleased: 2016,
        cast: {
          'Dr. Strange': { firstName: 'Benjamin', lastName: 'Cumberbath', agent: 'Jones' },
          'The Ancient One': { firstName: 'Tilda', lastName: 'Swinton' }
        }
      };
      expect(drStrange.cast['The Ancient One'].lastName).toBe('Swinton');

      interface Dictionary<T> {
        [key: string]: T;
      }

      // Parametric Polymorphism
      const decoder: Dictionary<number> = {
        one: 1,
        two: 2,
        three: 3
      };

      expect(decoder.one + decoder.two).toBe(3);

      type MathOperation = (a: number, b: number) => number;
      const calculator: Dictionary<MathOperation> = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        // add: (a, b) => a + b
      };

      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.multiply(3, 3)).toBe(9);
    });
  });
});
describe('higher order functions', () => {
  it('an example', () => {
    expect(formatName('Han', 'Solo')).toBe('Solo, Han');
    const makeNameUpper = (s: string) => s.toUpperCase();
    expect(
      formatName('Han', 'Solo', makeNameUpper)).toBe('SOLO, HAN');
    const makeFlashy = (s: string) => `***${s}***`;
    expect(formatName('Han', 'Solo', makeFlashy)).toBe('***Solo, Han***');
    // const doBoth = (s: string) => makeFlashy(makeNameUpper(s));
    const doBoth = compose(makeNameUpper, makeFlashy);
    expect(formatName('Han', 'Solo', doBoth)).toBe('***SOLO, HAN***');

  });
});
