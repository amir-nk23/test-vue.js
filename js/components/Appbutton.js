
export default {



    template: `
                <button style="background-color = gray,border-radius=20px"> 
                   <slot \>    
                </button>
`,

    props:{

        type: String,

    },
}