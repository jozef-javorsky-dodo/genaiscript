![GenAIScript Logo](./docs/public/images/favicon.png)

# GenAIScript

🚀 **JavaScript-ish environment with convenient tooling for file ingestion, prompt development, and structured data extraction.**

**Read the ONLINE DOCUMENTATION at [microsoft.github.io/genaiscript](https://microsoft.github.io/genaiscript/)**

## 🌟 Introduction

GenAIScript is a powerful scripting environment tailored for building and managing Large Language Model (LLM) prompts with ease. Whether you are a developer, data scientist, or researcher, GenAIScript provides the tools you need to create, debug, and share scripts efficiently.

> 🤖 This readme is maintained by the [readme-updater](https://github.com/microsoft/genaiscript/blob/main/packages/sample/genaisrc/readme-updater.genai.mts) script.

## 🚀 Quickstart Guide

Get started quickly by installing the [Visual Studio Code Extension](https://microsoft.github.io/genaiscript/getting-started/installation/) or using the [command line](https://microsoft.github.io/genaiscript/getting-started/installation).

## ✨ Features

### 🎨 Stylized JavaScript & TypeScript

Build prompts programmatically using [JavaScript](https://microsoft.github.io/genaiscript/reference/scripts/) or [TypeScript](https://microsoft.github.io/genaiscript/reference/scripts/typescript).

```js
def("FILE", env.files, { endsWith: ".pdf" })
$`Summarize FILE. Today is ${new Date()}.`
```

### 🚀 Fast Development Loop

Edit, [Debug](https://microsoft.github.io/genaiscript/getting-started/debugging-scripts/), [Run](https://microsoft.github.io/genaiscript/getting-started/running-scripts/), and [Test](https://microsoft.github.io/genaiscript/getting-started/testing-scripts/) your scripts in [Visual Studio Code](https://microsoft.github.io/genaiscript/getting-started/installation) or with the [command line](https://microsoft.github.io/genaiscript/getting-started/installation).

### 🔗 Reuse and Share Scripts

Scripts are [files](https://microsoft.github.io/genaiscript/reference/scripts/)! They can be versioned, shared, and forked.

```js
// define the context
def("FILE", env.files, { endsWith: ".pdf" })
// structure the data
const schema = defSchema("DATA", { type: "array", items: { type: "string" } })
// assign the task
$`Analyze FILE and extract data to JSON using the ${schema} schema.`
```

### 📋 Data Schemas

Define, validate, and repair data using [schemas](https://microsoft.github.io/genaiscript/reference/scripts/schemas).

```js
const data = defSchema("MY_DATA", { type: "array", items: { ... } })
$`Extract data from files using ${data} schema.`
```

### 📄 Ingest Text from PDFs, DOCX, ...

Manipulate [PDFs](https://microsoft.github.io/genaiscript/reference/scripts/pdf), [DOCX](https://microsoft.github.io/genaiscript/reference/scripts/docx), ...

```js
def("PDF", env.files, { endsWith: ".pdf" })
const { pages } = await parsers.PDF(env.files[0])
```

### 📊 Ingest Tables from CSV, XLSX, ...

Manipulate tabular data from [CSV](https://microsoft.github.io/genaiscript/reference/scripts/csv), [XLSX](https://microsoft.github.io/genaiscript/reference/scripts/xlsx), ...

```js
def("DATA", env.files, { endsWith: ".csv", sliceHead: 100 })
const rows = await parsers.CSV(env.files[0])
defData("ROWS", rows, { sliceHead: 100 })
```

### 📝 Generate Files

Extract files and diff from the LLM output. Preview changes in Refactoring UI.

```js
$`Save the result in poem.txt.`
```

```txt
FILE ./poem.txt
The quick brown fox jumps over the lazy dog.
```

### 🔍 File Search

Grep or fuzz search [files](https://microsoft.github.io/genaiscript/reference/scripts/files).

```js
const { files } = await workspace.grep(/[a-z][a-z0-9]+/, "**/*.md")
```

### 🔍 RAG Built-in

[Vector search](https://microsoft.github.io/genaiscript/reference/scripts/vector-search/).

```js
const { files } = await retrieval.vectorSearch("cats", "**/*.md")
```

### 🐙 GitHub Models and GitHub Copilot

Run models through [GitHub Models](https://microsoft.github.io/genaiscript/getting-started/configuration/#github-models) or [GitHub Copilot](https://microsoft.github.io/genaiscript/getting-started/configuration/#github-copilot-in-visual-studio-code).

```js
script({ ..., model: "github:gpt-4o" })
```

### 💻 Local Models

Run your scripts with [Open Source models](https://microsoft.github.io/genaiscript/getting-started/configuration/#local-models), like [Phi-3](https://azure.microsoft.com/en-us/blog/introducing-phi-3-redefining-whats-possible-with-slms/), using [Ollama](https://ollama.com/), [LocalAI](https://localai.io/).

```js
script({ ..., model: "ollama:phi3" })
```

### 🐍 Code Interpreter

Let the LLM run code in a sandboxed execution environment.

```js
script({ tools: ["python_code_interpreter"] })
```

### 🐳 Containers

Run code in Docker [containers](https://microsoft.github.io/genaiscript/reference/scripts/containers).

```js
const c = await host.container({ image: "python:alpine" })
const res = await c.exec("python", ["--version"])
```

### 🧩 LLM Composition

[Run LLMs](https://microsoft.github.io/genaiscript/reference/scripts/inline-prompts/) to build your LLM prompts.

```js
for (const file of env.files) {
    const { text } = await runPrompt((_) => {
        _.def("FILE", file)
        _.$`Summarize the FILE.`
    })
    _.def("SUMMARY", text)
}
$`Summarize all the summaries.`
```

### 🅿️ Prompty support

Run your [Prompty](https://prompty.ai) files as well!

```markdown
---
name: poem
---

Write me a poem
```

### ⚙ Automate with CLI

Automate using the [CLI](https://microsoft.github.io/genaiscript/reference/cli), integrate reports in your CI/CD pipeline.

```bash
npx genaiscript run tlaplus-linter "*.tla"
```

### 💬 Pull Request Reviews

Integrate into your [Pull Requests checks](https://microsoft.github.io/genaiscript/reference/cli/run/#pull-requests) through comments, reviews, or description updates. Supports GitHub Actions and Azure DevOps pipelines.

```bash
npx genaiscript ... --pull-request-reviews
```

### ⭐ Tests and Evals

Build reliable prompts using [tests and evals](https://microsoft.github.io/genaiscript/reference/scripts/tests) powered by [promptfoo](https://promptfoo.dev/).

```js
script({ ..., tests: {
  files: "penguins.csv",
  rubric: "is a data analysis report",
  facts: "The data refers about penguin population in Antarctica.",
}})
```

## Contributing

We accept contributions! Checkout the [CONTRIBUTING](./CONTRIBUTING.md) page for details and developer setup.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
