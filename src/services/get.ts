export const GET = async (url: string) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        if (response.ok) {
            return { success: true, data: json.data ?? json };
        } else {
            console.error("Erro na requisição GET:", response.statusText);
            return {
                success: false,
                message: json.message || `Erro: ${response.statusText}`,
                status: response.status
            };
        }
    } catch (error) {
        console.error("Erro na requisição GET:", error);
        return {
            success: false,
            message: `Erro na requisição: ${error instanceof Error ? error.message : String(error)}`
        };
    }
};