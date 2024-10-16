import SingleAssignment from "./SingleAssignment.js";
export default {

    components:{SingleAssignment},

    template:`
          <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
            {{title}}
            ({{assignments.length}})
            </h2>
            <span ><button 
            class="border rounded px-1 py-1 py-px text-xs ml-2" 
            v-for="tag in tags" @click="currentTag=tag"
            :class="{'border-blue-600 text-blue-600' : tag===currentTag}"
            >{{tag}}</button></span>
            <ul class="border border-gray-600 divide-y divide-gray-600">
            <single-assignment 
                  v-for="assignment in filterTag"
                  :key="assignment.id"
                  :assignment="assignment"      
            ></single-assignment>
            </ul>
        </section>
    `,

    props: {
        assignments:Array,
        title:String
    },
    data(){
      return {
          currentTag:'all',
      }

    },
    computed: {
        tags(){

            return ['all',...new Set(this.assignments.map(a => a.tag))]

        },

        filterTag(){
            if (this.currentTag === 'all'){
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        }

    }
}