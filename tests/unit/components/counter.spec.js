import {shallowMount} from '@vue/test-utils'
import Counter from '@/components/Counter';

describe('Counter Component', () => {
    
    // test('Debe hacer match con el snapshot', () => {
        
    //     const wrapper = shallowMount(Counter) // wrapper es un standar

    //     expect(wrapper.html()).toMatchSnapshot()

    // })

    // Segunda prueba
    test('H2 debe tener el valor por defecto de "Counter"', () => {
        
        const wrapper = shallowMount( Counter );

        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('counter')

    })
    
    test('valor por defecto debe ser 100 en el p', () => {
        
        // Wrapper
        const wrapper = shallowMount( Counter );
        // pTags
        // expect( wrapper.findAll('p').lastItem().toBeTruthy)
        const pTags = wrapper.find('[data-testid="counter"]').text()
        
        // expect segundo p === 100
        // expect(pTags[1].text()).toBe('100')
        expect(pTags).toBe("100")

    })
    
    
})
