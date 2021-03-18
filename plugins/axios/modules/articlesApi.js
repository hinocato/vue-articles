import { axios } from '../index.js';

export default {
  async putArticleById(item) {
    const response = await axios.put(`/articles/${item.id}`, item);
    return response.data;
  }
}