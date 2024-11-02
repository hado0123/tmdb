import axios from 'axios'

// TMDB API 기본 URL과 API 키 설정
const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'YOUR_TMDB_API_KEY' // TMDB에서 발급받은 API 키

const options = {
   method: 'GET',
   headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDI5ZmIzYTNiOGFkZjkzYzNkNTQxNDU4OTczNzA0OSIsIm5iZiI6MTczMDUzNTYxOC41NTE3OTcyLCJzdWIiOiI2MjRkNDM0MWMzOTI2NjAwNGY5Mjk4YmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.O5nRjv35TxNUAD_5FX1de7mEJhnIZt5qv3f4dCT7Pi4',
   },
   params: {
      language: 'ko-KR',
      page: 1,
      region: 'KR',
   },
}

// axios 인스턴스 생성
const tmdbApi = axios.create({
   baseURL: BASE_URL,
})

// API를 통해 영화 목록을 가져오는 함수
export const getMovies = async (page = 1, filters = {}) => {
   // const response = await tmdbApi.get('/movie/popular', {
   //    params: {
   //       page,
   //       ...filters, // 장르나 언어 등 필터링 옵션 추가
   //    },
   // })

   const response = await tmdbApi.get('/movie/popular', options)
   return response
}

// 영화 상세 정보 가져오기
export const getMovieDetails = async (movieId) => {
   const response = await tmdbApi.get(`/movie/${movieId}`)
   return response
}

// 장르 목록 가져오기
export const getGenres = async () => {
   const response = await tmdbApi.get('/genre/movie/list')
   return response
}

export default tmdbApi
