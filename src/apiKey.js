let apiKey=import.meta.env.VITE_API_KEY;
if(apiKey===undefined)
{
    apiKey = process.env.VITE_API_KEY
}
export default apiKey