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

        const h2 = wrapper.find('h2')

        expect(h2.text()).toBe('counter')

    })
    
    
})
