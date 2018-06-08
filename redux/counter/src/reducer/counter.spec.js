import reducer from './counter'
import { inc, reset } from '../actions';

describe('counter reducer', () => {
    it('should handle initial state', () => {
        expect(reducer(undefined, {})).toEqual({val: 0})
    })

    it('should increment', () => {
        expect(reducer(
            {val: 1},
            inc()
        )).toEqual( {val: 2} )
    })

    it('should reset', () => {
        expect(reducer(
            {val: 7},
            reset()
        )).toEqual( {val: 0} )
    })
})