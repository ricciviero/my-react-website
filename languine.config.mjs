export default {
  version: "1.0.2",
  locale: {
    source: "en",
    targets: ["ita"],
  },
  files: {
    json: {
      include: ["locales/[locale].json"],
    },
  },
  llm: {
    provider: "openai",
    model: "gpt-4-turbo",
  },
  
};