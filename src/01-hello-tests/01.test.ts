import {summ} from './01';

test('summ chould be corrected', ()=>{

    //data
    let a =1;
    let b =2;
    let c =3;

    //action
    let result1 = summ(a,b)
    let result2 = summ(b,c)

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)

})