import {summ} from './01';

test('summ chould be corrected', ()=>{

    //data
    let a =1;
    let b =2;
    let c =3;

    //action
    let result = summ(a,b)

    //expect result
    expect(result).toBe(3)

})