import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const petsApi = createApi({
    reducerPath: 'petsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001"
    }),
    tagTypes: ['Pet'],
    endpoints(builder){
       return {
           fetchPets: builder.query({
               query(){
                   return `/pets`
               },
               // providesTags: ['Pet'] // allow the total result of this query to be invalidate and refetched
               providesTags: (result, error, arg) => {
               console.log('result: ', result);
               return result
                 ? [...result.map(({id}) => ({type: 'Pet', id})), 'Pet']
                 : ['Pet']
                }
           }),
           updatePets: builder.mutation({
               query: ({id, ...patch }) => ({ 
                    url: `/pets/${id}`,
                    method: 'PATCH',
                    body: patch
               }),
               // invalidatesTags: ['Pet'] // Invalidates all queries with the same tag
               invalidatesTags: (result, error, arg) => [{type: 'Pet', id: arg.id}], // Allow more granular tag invalidation
           })
       }
    }
})

// export create hooks
export const { useFetchPetsQuery, useUpdatePetsMutation } = petsApi