---
title: JSON Mode
sidebar:
    order: 12
---

You can use `system.json` system message to force a single JSON output file. This
enables the [JSON mode](https://platform.openai.com/docs/guides/text-generation/json-mode) of OpenAI.
## JSON Output Mode
```javascript
script({
    ...,
    system: ["system.json"],
})
```

The generated file name will be `[spec].[template].json`.