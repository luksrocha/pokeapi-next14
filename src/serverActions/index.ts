export const fetchGet = async <T>(url: string): Promise<T> => {
    try {
        const response = await fetch(`${process.env.POKEAPI_BASE_URL}/${url}`);

        if (!response.ok) {
            throw new Error("Error to fetch data.");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ocorreu um erro:", error);
        throw new Error("Could not parse data");
    }
};
