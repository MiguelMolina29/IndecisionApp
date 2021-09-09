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

    test('Debe de incrementar y decrementar el contador', async() => {
        
        const wrapper = shallowMount( Counter )

        const increaseBtn = wrapper.find('button')
        
        await increaseBtn.trigger('click') // trigger es un disparador
        
        let value = wrapper.find('[data-testid="counter"]').text()
        
        expect( value ).toBe('101')
        
        const decreaseBtn = wrapper.findAll('button')[1]

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        value = wrapper.find('[data-testid="counter"]').text()
        expect( value ).toBe('99')

    })
    
    
    
})
