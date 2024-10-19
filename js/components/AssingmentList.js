import SingleAssignment from "./SingleAssignment.js";
import AssingmentTag from "./AssingmentTag.js";
export default {

    components:{SingleAssignment,AssingmentTag},

    template:`
          <section v-show="assignments.length">
          <div class="mb-2 flex justify-between items-start">
                <h2 class="font-bold">
                    {{title}}
                    ({{assignments.length}})
                </h2>
                <button v-show="hideToggle" @click="$emit('toggle')">&times;</button>
          </div>
            
            <div class="mb-2">
                 <assingment-tag :initialTag="assignments.map(a => a.tag)" v-model="currentTag" @change="currentTag=$event"></assingment-tag>
            </div>
            
            <ul class="border border-gray-600 divide-y divide-gray-600">
            <single-assignment 
                  v-for="assignment in filterTag"
                  :key="assignment.id"
                  :assignment="assignment"      
            ></single-assignment>
            </ul>
            <slot></slot>   
        </section>
    `,

    props: {
        assignments:Array,
        title:String,
        hideToggle: {type: Boolean,Default:false}
    },
    data(){
      return {
          currentTag:'all',
      }

    },
    computed: {


        filterTag(){
            if (this.currentTag === 'all'){
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        }

    }
}