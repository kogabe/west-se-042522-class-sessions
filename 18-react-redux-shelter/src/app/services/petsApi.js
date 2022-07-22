import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const petsApi = createApi({
    reducerPath: 'petsApi', // used by store to track reducer
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    tagTypes: ['Pet'],
    endpoints(builder){ // or => ({}) syntax
        return {
            /*
            start simpler...
            fetchPets: builder.query({
                query(){
                    return `/pets`
                },
            }),
             */
            fetchPets: builder.query({
                query(type){
                    return `/pets?type_like=${type}`
                },
                // providesTags: ['Pet'],  // step 1: means total result of this query will be invalidated and re-fetched
                // Provides a list of `Pets` by `id`.
            // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
              // Step 2: add ids to individual items to add granularity
                providesTags: (result, error, arg) => 
                  result
                    ? [...result.map(({id}) => ({type: 'Pet', id})), 'Pet']
                    : ['Pet'],
            // The `LIST` id is an arbitrary "virtual id" which would allow us to invalidate this query separately from those tagged more generally 'Pet'
            //     providesTags: (result) => 
            //     result // is result available?
            //     ? [...result.map(({id}) => ({id})), // successful query
            //     { id: 'LIST'},
            // ]
            // : [{id: 'LIST'}], // an error occurred, but we still want to refetch this query when `{ id: 'LIST' }` is invalidated

            }),
            updatePets: builder.mutation({
                query: ({id, ...patch}) => ({
                    url: `/pets/${id}`,
                    method: 'PATCH',
                    body: patch
                }),
                // invalidatesTags: ['Pet'], // Invalidates all queries with the same tag
                // step 2: invalidate by id
                // Invalidates all queries that subscribe to this Pet `id` only.
                invalidatesTags: (result, error, arg) => [{type: 'Pet', id: arg.id}],
                // invalidatesTags: (result, error, { id }) => [{id}], // alt syntax
            })
        
        }
    }
})

// export created hooks
export const { useFetchPetsQuery, useUpdatePetsMutation } = petsApi