# Type safe JavaScript with JSDoc and TypeScript

Here's what you're going to want to know before you read this. This isn't a comprehensive guide to writing comments using JSDoc syntax, although there will be a few examples. It also isn't a guide to writing TypeScript, you'll find even less of that here. It's about how you can continue writing plain JavaScript and still enjoy type safety--or, if you're using TypeScript, why you should consider coming back.

## Backround

TypeScript is a typed superset of JavaScript that enforces type safety by catching type related errors at compile time. It is generally argued that enforcing type safety leads to code that is less error prone, more readable and therefore scales better. Traditionally, you'd write your source code using TypeScript (in .ts files) and compile the code into JavaScript before running it.

Having previously worked on a traditional TypeScript project and finding it both enjoyable and efficient, it seemed like the obvious choice for our current project. However, as I prepared to present the case for using TypeScript to the rest of the team, I came across a few articles and discussions. These resources shed light on the trend of some larger projects moving away from TypeScript, albeit not entirely, and adopting a solution that includes the use of JSDoc.

## The solution

The solution involves the TypeScript engine for type checking while still allowing developers to write code in plain JavaScript and use JSDoc comments for type annotations. There are a lot of reasons why you should consider this:

-   This means that you still get typesafe code and some other TypeScript benefits. For instance, you can use the compiler to automatically generate type declarations (.d.ts files) from your annotated JavaScript code. This is good when creating a library, as it allows you to provide type information to end users who may be working with TypeScript. For more details, you can refer to the `tsconfig.json` file in this project.

-   Perhaps the most obvious difference is that you don't have to compile the source code. This means that there's no necessary build step when testing or running the code in development. No more build in watch mode to see changes! You also don't have to worry about the mapping between source code and the build output.

-   Since the majority of our group members are more comfortable with plain JavaScript, this approach ensures that everybody can contribute effectively. You may find that the same is true for you or your team.

-   Also, we're going to comment our code anyway. And you should too!

There are also some potential drawbacks:

-   Having to use JSDoc for writing types can feel verbose compared to writing in TypeScript. In other words, if you're coming from TypeScript you may feel that JSDoc takes longer to write and isn't as nice--or, if you're completely new to this, you may feel that there's just to much stuff to learn.

A counter point to this is that being verbose is rarely a bad thing. Documenting how your code works generally makes it more readable and easier to maintain. Writing in JSDoc encourages you to add descriptions of functions, objects and so on. If your're using VSCode, this will also provide better IntelliSense.

## Getting started

### About this project

The source code really isn't anything special. You can use it as reference, albeit very limited, for how to write some different types in JSDoc. What's most important is
how the project is configured.

To set up your own project, what you need is to install TypeScript:

```bash
npm install --save-dev typescript
```

Then create a `tsconfig.json`. For more details, see the actual `tsconfig.json` file in this project where I've added comments to describe the different compiler options.

:information_source: The complete tsconfig reference can be found at https://www.typescriptlang.org/tsconfig

### Type check

To type check the code in this project run:

```bash
tsc

# or
npm run checkjs
```

### Annotating types

You delcare types using the **@type** tag in a JSDoc comment:

```js
// on a single line like this:

/** @type {number} */
const age = 3;

// or like this:

/**
 * @type {number}
 */
const age = 3;
```

The type can be a primitive type, like `number` in the example above, or a type declared in a TypeScript declaration, or a type delcared using the **@typedef** tag in a JSDoc comment (see the example further down below).

### Types in third party code

A lot of large third party modules have type definitions available to install. In the case of Express you can run

```bash
npm install --save-dev @types/express
```

This will install the types to your node_modules/@types directory.

## More JSDoc Examples

Object literals:

```js
/**
 * A dog object with name, age and bark method.
 * @typedef {Object} Dog
 * @property {string} name The dogs's name.
 * @property {number} age The dogs's age.
 * @property {Function} bark Bark!
 */
export const dog = {
    name: "Rambo",
    age: 3,
    bark: () => "Woof!",
};
```

> The **@typedef** tag is used to declare types. These types can later be referenced using the **@type** tag. This is similar to how you declare and reference interfaces in .ts files.

Class constructor:

```js
/**
 * Class to construct a dog object with name, age and bark method.
 */
export class Dog {
    /**
     * @param {Object} props
     * @param {string} props.name
     * @param {number} props.age
     */
    constructor(props) {
        /**
         * @property {string} name The dogs's name.
         */
        this.name = props.name;

        /**
         * @property {number} age The dogs's age.
         */
        this.age = props.age;

        /**
         * @property {Function} bark Bark!
         * @returns void
         */
        this.bark = () => "woof!";
    }
}
```

Using the above example, we can look at the code in action by running the `tsc` command. If you have VSCode configured with the built in _TypeScript and JavaScript Lanquage Feature_, the `age` property in the second use case will be flagged with red squiggles underneath and you will get tool tip if you hover over it.

```js
// ✅ This works!
const myDogRambo = new Dog({ name: "Rambo", age: 3 });

// ❌ This does not, and will give you this: Type 'string' is not assignable to type 'number'
const myDogBuster = new Dog({ name: "Buster", age: "five" });
```

## Happy coding!

Remember that, in most cases, comments can be written in different ways to achieve the same result and type safety. Finding a style that fits your or your team's use cases and preferences is the way to go. Just as with traditional TypeScript, you can configure how strict you want the type checking to be.
