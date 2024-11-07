import {
    MODEL_PROVIDER_AZURE_OPENAI,
    MODEL_PROVIDER_AZURE_SERVERLESS_MODELS,
    MODEL_PROVIDER_GITHUB,
    MODEL_PROVIDER_OLLAMA,
    MODEL_PROVIDER_OPENAI,
} from "./constants"
import { parseModelIdentifier } from "./models"

export function isToolsSupported(modelId: string): boolean | undefined {
    if (!modelId) return undefined
    const { provider, model } = parseModelIdentifier(modelId)

    if (/^o1-(mini|preview)/.test(model)) {
        return false
    }

    const oai = {
        "o1-preview": false,
        "o1-mini": false,
    }
    const data: Record<string, Record<string, boolean>> = {
        [MODEL_PROVIDER_OLLAMA]: {
            ["llama3.2-vision"]: false,
            ["phi3.5"]: false,
            ["gemma2"]: false,
            ["deep-seek-coder-v2"]: false,
            ["codegemma"]: false,
            ["llava"]: false,
            ["llama3"]: false,
            ["gemma"]: false,
            ["qwen"]: false,
            ["phi3"]: false,
            ["llama2"]: false,
            ["codellama"]: false,
            ["phi"]: false,
        },
        [MODEL_PROVIDER_OPENAI]: oai,
        [MODEL_PROVIDER_AZURE_OPENAI]: oai,
        [MODEL_PROVIDER_AZURE_SERVERLESS_MODELS]: oai,
        [MODEL_PROVIDER_GITHUB]: {
        }
    }

    return data[provider]?.[model]
}