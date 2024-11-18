script({
    model: "small",
    tests: {
        keywords: "paris",
    },
})

const res = await runPrompt((ctx) => {
    ctx.importTemplate("src/templates/basic.prompty", {
        question: "what is the capital of france?",
        hint: "starts with p",
        n: 3,
    })
})
console.log(`inline: ${res.text}`)

importTemplate("src/templates/basic.prompty", {
    question: "what is the capital of france?",
    hint: "starts with p",
    n: 5,
})

const resError = await runPrompt((ctx) => {
    ctx.importTemplate("src/templates/basic.prompty", {
        questionTYPO: "what is the capital of france?",
        hint: "starts with p",
        n: 5,
    })
})
console.log(resError)
if (!resError.error) throw new Error("should have failed")
