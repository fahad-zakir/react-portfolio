import React, {Component} from 'react'

class Specialty extends Component{

    render(){
        // this points to this component (specialty) points to that and
        // you are selecting inside the component, looking at props, says look into
        // this component and look into this property and look for spec
        // we are storing spec in these variables since we can not use javascript
        const anyspecname = this.props.spec;
        const anyoldthing = this.props.key;

        // console.log("Spec", spec)

        return (
            <div>
                {this.props.mydog}
               <h1>{anyspecname.specialty}</h1>
               <img width="200" src={anyspecname.image_url}/>
               <div>{anyspecname.description}</div>
            </div>
            // 
        )
    }
}

export default Specialty