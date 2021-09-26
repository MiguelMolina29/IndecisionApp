import {shallowMount} from '@vue/test-utils'
import Counter from '@/components/Counter';

describe('Counter Component', () => {

    let wrapper = shallowMount( Counter );

    beforeEach(() => {
        wrapper = shallowMount( Counter )
    })
    
    // test('Debe hacer match con el snapshot', () => {
        
    //     const wrapper = shallowMount(Counter) // wrapper es un standar

    //     expect(wrapper.html()).toMatchSnapshot()

    // })

    // Segunda prueba
    test('H2 debe tener el valor por defecto de "Counter"', () => {
        

        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('counter')

    })
    
    test('valor por defecto debe ser 100 en el p', () => {
        
        // pTags
        // expect( wrapper.findAll('p').lastItem().toBeTruthy)
        const pTags = wrapper.find('[data-testid="counter"]').text()
        
        // expect segundo p === 100
        // expect(pTags[1].text()).toBe('100')
        expect(pTags).toBe("100")

    })

    test('Debe de incrementar y decrementar el contador', async() => {
        
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
        
        await increaseBtn.trigger('click') // trigger es un disparador
        await increaseBtn.trigger('click') // trigger es un disparador
        await increaseBtn.trigger('click') // trigger es un disparador
        

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()
        expect( value ).toBe('101')

    })
    
    
    
})
