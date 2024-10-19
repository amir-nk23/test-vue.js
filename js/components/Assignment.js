import AssingmentList from "./AssingmentList.js";
import CreateForm from "./CreateForm.js";
export default {
    components:{AssingmentList,CreateForm},

    template:`<div class="flex gap-8">
    <assingment-list :assignments="filters.inProgress" title="in progress">
          <create-form @add="add"></create-form>
    </assingment-list>
    <assingment-list 
    v-if="showCompelete"
    :assignments="filters.complete" 
    title="complete" 
    hide-toggle 
    @toggle="showCompelete = !showCompelete"></assingment-list>
    </div>
`,

    data() {
        return {
            assignments: [

            ],
            showCompelete:true
        }
    },
    created(){

        fetch('http://localhost:3001/assignment')
            .then($response => $response.json())
            .then(data => {
             this.assignments = data
            })

    },

    computed: {
        filters(){

            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                complete: this.assignments.filter(assignment => assignment.complete),
            }
        },


    },

    methods: {

        add(name){

            this.assignments.push({

                name:name,

                complete:false,

                id:this.assignments.length +1

            })
            this.newAssignment = ''
        }
    }


}