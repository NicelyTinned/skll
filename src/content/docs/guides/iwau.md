---
title: If, While and #unroll 
description: A guide into conditional statements
---

# If statements

```skll title="if.skll"
let testVariable = 5;

skill "IfStatement" {
    cooldown: 0.5;
    if (testVariable < 10) {
        // should always run
    }
    // shouldnt run unless jjs updated
}
```

It functions like if statements from other languages, but IT CANNOT HANDLE COMPARING CONSTANT TO CONSTANT.

:::caution[JJS Limitation]
Again, you cannot compare constant to constant in if statements AND while loops.
Notice in the script, that the end of the if statement and the rest of the skill scope cannot/shouldn't run, because JJS cannot handle async nor prioritizing a single task first for some god forsaken reason, which is why the scope can only continue in the if statement scope.
:::

# While loops

```skll title="while.skll"
let testVariable = 10;

skill "WhileLoop" {
    cooldown: 0.5;
    while (testVariable > 1) {
        testVariable--;
        wait(0.5);
    }
}
```

# `#unroll` loops

```skll title="unroll.skll"
skill "UnrollLoop" {
    cooldown: 0.5;
    
    // #unroll(repetitions, start_idx)
    #unroll(5, 1) {
        // $(i - constant)
        wait($i);
    }
    // code after CAN be run
}
```

:::note[Limitless (pun intended)]
Code after `#unroll` loops CAN be run.
:::