import axios from "axios";

export const useAPI = (baseUrl) => {
  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      // insere autorização aqui
      "Content-Type": "application/json",
    },
  });

  api.interceptors.request.use(
    (config) => {
      // Adicione o token de autenticação aqui, se necessário
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        // Redirecionar para a página de login ou exibir uma mensagem de erro
        console.error("Token inválido ou expirado.");
      }
      if (error.response.status === 500) {
        // Redirecionar para tela de indisponivel
        console.error("Erro interno do servidor.");
      }
      return Promise.reject(error);
    }
  );
  return api;
};
