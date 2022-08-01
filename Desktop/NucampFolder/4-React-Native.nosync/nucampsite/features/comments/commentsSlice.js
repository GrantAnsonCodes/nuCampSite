import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/BaseUrl';

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch(baseUrl + 'comments');
        return response.json();
    }
);

export const postComment = createAsyncThunk(
    'comments/postComment',
    async (payload, { dispatch, getState }) => {
        setTimeout(() => {
            setTimeout(() => {
                const { comments } = getState();
                const payload={ ...payload, id, date };
                const d = new Date();
                payload.date = d.toISOString();
                dispatch(addComment(payload));
            }, 2000);
        });
    })

        const commentsSlice = createSlice({
            name: 'comments',
            initialState: { isLoading: true, errMess: null, commentsArray: [] },
            reducers: {
                addComment: (state, action) => {
                    const commentsArray = state.commentsArray;
                    commentsArray.push(action.payload);
                },
            },
            extraReducers: {
                [fetchComments.pending]: (state) => {
                    state.isLoading = true;
                },
                [fetchComments.fulfilled]: (state, action) => {
                    state.isLoading = false;
                    state.errMess = null;
                    state.commentsArray = action.payload;
                },
                [fetchComments.rejected]: (state, action) => {
                    state.isLoading = false;
                    state.errMess = action.error ? action.error.message : 'Fetch failed';
                }
            }
        });

        export const { addComment } = commentsSlice.actions;
        export const commentsReducer = commentsSlice.reducer;

