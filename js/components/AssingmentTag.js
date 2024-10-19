export default {

    template:`
      <span><button 
            class="border rounded px-1 py-1 py-px text-xs ml-2" 
            v-for="tag in tags" @click="$emit('update:modelValue',tag)"
            :class="{'border-blue-600 text-blue-600' : tag===modelValue}"
            >{{tag}}
            </button></span>
    `,

    props:{
        initialTag:Array,
        modelValue:String

    },
    data(){
            return {

            }
    },
    computed:{
        tags(){

            return ['all',...new Set(this.initialTag)]

        },

    }

}