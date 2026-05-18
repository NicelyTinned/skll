---
title: Getting Started
description: Learn the basics of variables and constants in SKLL.
---

## Variables
Since you can't really print Hello, World! in Jujutsu Shenanigans, we're starting with variables.

```skll title="variables.skll"
let var = 10 // only numbers
const CONSTANT = "Hello JJS!"
const CONSTANT_BUT_ITS_A_NUMBER = 67
const ARRAY = [1, 2] // not really arrays, just a string arrays are hard to implement
```

A `let` variable is a variable that can be changed at runtime, as it uses the TAG mechanic of Jujutsu Shenanigans.

:::note[Implementation Detail]
Under the hood, the compiler transforms let variables into global tags prefixed with !SKLL_VAR- so they can safely mutate during gameplay.
:::

A `const`ant variable cannot be changed at runtime, as it is just internal and doesn't really exist in the runtime.

:::caution[Array Limitation]
As shown in the example, arrays in SKLL are compiled straight into raw strings. True native array structures are incredibly complex to implement inside the underlying engine runtime, so treat them as decorative or read-only values for now!
:::