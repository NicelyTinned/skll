---
title: `skill` blocks and More
description: An introduction to skills and more (coming soon)
---

# `skill`
First of all, the (currently only) way to actually use logic is by creating a skill using the `skill` keyword.

```skll title="skill.skll"
skill "YourSkill" {
    // logic
}
```

This will (obviously) create a new skill with the logic. The keybind is handled automatically using the order the skills were created.
You can also set the skill's properties by doing:

```skll title="skill_property.skll"
skill "YourSkill" {
    cooldown: 10;
}
```

# Others
In the future, more blocks will be added like `special` (not to be confused with `#special`), `awakening`, `melee` and `chase`.
These will function similarly to `skill` but with other properties and behaviors.