
export default function Profile(props) {

    if(props.profileType === "Business")
    {
        if (props.profile === 0) {
            return <div> Hi i'm your assistent, May i help you!</div>
    
        } else if (props.profile === 1) {
            return <div> Hi i'm Waseem Akram, I'm a react developer!</div>
    
        } else if (props.profile === 2) {
            return <div> Hi i'm Rohit, I'm Quality Analyst!</div>
    
        } else if (props.profile === 3) {
            return <div> Hi i'm Akash, I'm Business Analyst!</div>
        }

    } else if(props.profileType === "Employee"){
        if(props.employee === 0){
            return <div> Hi i'm Eva to help you!</div>

        } else if (props.employee === 1){
            return <div> Hi i'm from Software Development team, What you want to develop!</div>

        } else if (props.employee === 2){
            return <div> Hi i'm from HR departmant team, How may i help you!</div>
            
        } else if (props.employee === 3){
            return <div> Hi i'm from Support team, Is there any problem!</div>
        }
    }

}