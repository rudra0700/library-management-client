import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const libraryApi = createApi({
  reducerPath: "libraryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://library-management-server-zeta-two.vercel.app" }),
  tagTypes: ["Books", "Borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "api/books",
      providesTags: ["Books"],
    }),

    getSingleBook: builder.query({
      query: (id) => `api/books/${id}`,
    }),

    createBook: builder.mutation({
      query: (data) => ({
        url: "api/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `api/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),

    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `api/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),

    borrowBook: builder.mutation({
      query: ({ bookId, data }) => ({
        url: `api/borrow/${bookId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books", "Borrow"],
    }),

    borrowSummery : builder.query({
      query: () => "api/borrow",
      providesTags: ["Borrow"]
    })
  }),
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGetSingleBookQuery,
  useBorrowBookMutation,
  useBorrowSummeryQuery
} = libraryApi;
