import '@testing-library/jest-dom';
import { chatsReducer } from "./chatsReducer";

describe('chatsReducerTest', () => {
    it('should return empty state', () => {
        expect(chatsReducer([], {type: 'noType', payload: null})).toEqual([]);
    });

    it('should return array with one chat', () => {
        const chats = chatsReducer([], {type: 'SET_CHAT', payload: {
            id: Math.round(Math.random() * 99),
            name: 'testChat'
        }});
        expect(chats.length).toBeGreaterThan(0);
    });

    it('should return filtered chats', () => {
        const state = [
            {id: 1, name: 'chat1'},
            {id: 2, name: 'chat2'},
            {id: 3, name: 'chat3'}
        ];
        const filteredChats = chatsReducer(state, {type: 'DELETE_CHAT', payload: {id: 1}});
        expect(filteredChats.length).toBeLessThan(state.length);
    })
})