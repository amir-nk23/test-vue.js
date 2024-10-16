import AssingmentList from "./AssingmentList.js";
import CreateForm from "./CreateForm.js";
export default {
    components:{AssingmentList,CreateForm},

    template:`
    <assingment-list :assignments="filters.inProgress" title="in progress"></assingment-list>
    <assingment-list :assignments="filters.complete" title="complete"></assingment-list>
    <create-form @add="add"></create-form>
    

`,

    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, id: 1,tag:'math' },
                { name: 'Read Chapter 4', complete: false, id: 2,tag: 'math' },
                { name: 'Turn in Homework', complete: false, id: 3, tag:'science' },
            ],
        }
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