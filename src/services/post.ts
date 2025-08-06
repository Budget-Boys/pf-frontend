export const POST = async (url: string, data: unknown) => {
  try {
    const response = await fetch(url, {
      method: "POST",
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
      let message = "Erro desconhecido.";

      if (json.errors) {
        if (typeof json.errors === "string") {
          message = json.errors;
        } else if (typeof json.errors === "object") {
          // Concatena múltiplos erros (ex: email e senha)
          message = Object.values(json.errors).join(" | ");
        }
      } else if (json.message) {
        message = json.message;
      } else {
        message = response.statusText;
      }

      return { success: false, message };
    }
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Erro inesperado na requisição",
    };
  }
};
