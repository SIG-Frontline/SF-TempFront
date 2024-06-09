export const load = async (serverLoadEvent) => {
    const { fetch, params } = serverLoadEvent;
    const urlParam = params.location
    return { urlParam };
};