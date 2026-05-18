---
title: Macros
description: All about Macros
---

# Macros

```skll title="macro.skll"
#macro YourMacroName(waitTime) {
    wait(waitTime);
}
```

Since `function`s are hard to implement in JJS (again), we have Macros, that expand during compile time so we don't have to deal with more branching stuff.

## Real-world use-case
Macros are perfect for hiding massive, complicated macro definitions behind a single, descriptive name.

```skll title="hugefreakinghitbox.skll"
#macro HUGEFREAKINGHITBOX(damage) {
    hitbox("0, 0, 0", "0, 0, 0", "50, 50, 50", damage, 1, true, true, true, true, true, false, true, -2.5, "EXPLOSION", true);
}

skill "BigBoom" {
    cooldown: 67;
    
    HUGEFREAKINGHITBOX(100);
}
```

Isn't the huge freaking hitbox so huge? Because it's a macro, the compiler will unpack that massive line directly inside the BigBoom timeline block automatically.

:::tip[Zero Runtime Cost]
Because macros inline their logic directly into the parent skill scope during compilation, you can use as many macros as you want without adding any performance overhead to the JJS runtime engine.
:::