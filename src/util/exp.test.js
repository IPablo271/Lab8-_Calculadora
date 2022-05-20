import {cube,square,suma,resta,multiplicacion,division,modulo} from './exp'

describe('Given a number',()=>{
    it('returns its squared', ()=>{
        expect(square(2)).toBe(4)
    })
    it('returns its cube', ()=>{
        expect(cube(2)).toBe(8)
    })
    it('returns its sum', ()=>{
        expect(suma(2,4)).toBe(6)
    })
    it('returns its substraction', ()=>{
        expect(resta(10,6)).toBe(4)
    })
    it('returns its multiplication', ()=>{
        expect(multiplicacion(5,3)).toBe(15)
    })
    it('returns its multiplication', ()=>{
        expect(division(16,2)).toBe(8)
    })
    it('returns its multiplication', ()=>{
        expect(modulo(25,22)).toBe(3)
    })


    
})