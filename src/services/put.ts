export const PUT = async (url: string, data: unknown) => {
    try {
        const response = await fetch(url, {
            method: "PUT",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const json = await response.json();

        if (response.ok) {
            return { success: true, data: json.data ?? json };
        } else {
            console.error("Erro na requisição PUT:", response.statusText);
            return { success: false, message: `Erro: ${response.statusText}` };
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        return { success: false, message: `Erro na requisição: ${error}` };
    }
};
