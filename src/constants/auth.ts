export const officialAPIEndpoint = 'https://api.openai.com/v1/chat/completions';
const customAPIEndpoint =
  import.meta.env.VITE_CUSTOM_API_ENDPOINT || 'https://api.aigcfun.com/api/v1/text?key=FCAW3STZXEVXDUJUL8';
export const defaultAPIEndpoint =
  import.meta.env.VITE_DEFAULT_API_ENDPOINT || customAPIEndpoint;

export const availableEndpoints = [officialAPIEndpoint, customAPIEndpoint];
