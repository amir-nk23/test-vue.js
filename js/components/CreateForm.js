export default {


    template:`
        <form @submit.prevent="add" class="">
            <div class="border border-gray-600">
            
                <input class="text-black p-2" v-model="newAssignment" placeholder="add new assignment">
                <button class="bg-green-800 p-2 border-l">add</button>
            
            </div>
        </form>
    `,

    props:{

        assignments:Object

    },

    data() {
            return {
                newAssignment: ''
            };
    },
    methods: {


        add(){

            this.$emit('add',this.newAssignment);

            this.newAssignment = ''

        }

    }

}