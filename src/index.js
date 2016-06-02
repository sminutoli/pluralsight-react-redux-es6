import ExampleFactory from './Example';
import Another from './Another';
import expect from 'expect';

const Example = ExampleFactory();
console.log(Example.hey());
console.log(Example.next());
console.log(Example.next());
console.log(Example.next());

const Example2 = ExampleFactory('Papu');
console.log(Example2.hey());
console.log(Example2.next());
console.log(Example2.next());
console.log(Example2.print());

expect(Example.next).toBe(Example2.next);
expect(Example.print).toBe(Example2.print);
expect(Example.hey).toNotBe(Example2.hey);
expect(Example.getSecret).toNotBe(Example2.getSecret);
console.log('test passed');