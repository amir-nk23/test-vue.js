export default {

    template: `
    <li class="p-2">
        <label class="flex justify-between items-center">
                {{assignment.name}}
            <input type="checkbox" class="ml-4" v-model="assignment.complete">
            </label>
     </li>
    `,

    props: {

        assignment: Object


    },
}




