import Vue from 'vue';
import TodoItem from '@/views/tools/cavan/todoitem.vue';


function mountComponentWithProps (Component, propsData) {
    const Constructor = Vue.extend(Component);
    const vm = new Constructor({
      propsData
    }).$mount();
  
    return vm.$el;
  }


  
describe('todoitem.vue', () => {
    it('should be the correct color', () => {
      const headingData = mountComponentWithProps(TodoItem, { title: 'Hello, Vue!' });

      const titleData = headingData.textContent;
      expect(titleData).toEqual('Hello, Vue!');
      //const styleData = headingData.style.getPropertyValue('color');
  
      //console.log("styel:"+styleData);
      //expect(styleData).toMatchSnapshot();
      //expect(styleData).toEqual('red');
    });
  
     
  });