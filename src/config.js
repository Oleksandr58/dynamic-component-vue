import HelloWorld from './components/HelloWorld.vue';
import HelloWorld1 from './components/HelloWorld1.vue';
import HelloWorld2 from './components/HelloWorld2.vue';

export const configs = [
    {
        type: 'type1-1',
        component: HelloWorld,
        props: [
            {
                key: 'label',
                type: 'type2', 
                isComponentProp: true,

                componentProps: {
                    msg: 'Field message',
                }
            }
        ],
    },
    {
        type: 'type1-2',
        component: HelloWorld,
        props: [
            {
                key: 'label',
                type: 'type2', 
                isComponentProp: true,
                
                componentProps: {
                    msg: 'Field message - second',
                }
            }
        ],
    },
    {
        type: 'type2',
        component: HelloWorld1,
    },
    {
        type: 'type3',
        component: HelloWorld2,
    },
];
