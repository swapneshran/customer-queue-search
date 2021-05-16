import axios  from 'axios'


describe('tests data fetched from customer Api', ()=> {
    beforeEach(()=>{
        jest.resetModules()
    })
    test('when api returns successful response', async ()=> {
        jest.mock('axios', () => {
            return {
                  default: {
                      get: jest.fn().mockImplementationOnce(()=> Promise.resolve({ data: "mock data"}))
                  },
                get: jest.fn(() => Promise.resolve({ data: "mock data"}))

            };
        });
        const {getCustomersFromApi} = require('./customerApi')
        const response = await getCustomersFromApi();
        expect(response).toEqual('mock data')
    })
})