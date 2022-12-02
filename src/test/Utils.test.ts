import {Utils} from '../app/Utils'

describe('Utils test suite', ()=>{
    test('first test', ()=>{
        const data_test= 'abc'
        const result = Utils.toUpperCase(data_test)
        expect(result).toBe('ABC'); 
    });

    test('Validate parse simple URL', ()=>{
        const data_test = 'http://localhost:8080/login';
        const parsedUrl = Utils.parseUrl(data_test)
        expect(parsedUrl.href).toBe(data_test);
        expect(parsedUrl.protocol).toBe('http:')
        expect(parsedUrl.port).toBe('8080')
        expect(parsedUrl.query).toEqual({});
    });

    test('Parse URL with query', ()=>{
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login?user=user&password=pass');
        const expectQuery = {
            user: 'user',
            password: 'pass'
        }
        expect(parsedUrl.query).toEqual(expectQuery);
    });

    test('Test invalid URL',()=>{
        expect(() => {
            Utils.parseUrl('')
        }).toThrow('Empty url')
      
    });

    test('Test invalid URL with Try and Catch', ()=>{
        try{
            Utils.parseUrl('');
        } catch(error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message','Empty url')
        }
    })
});