import React, { Component } from 'react';
import Specialty from './Specialty';
// I have a mind set of having a list of specialties stored in an Object of Array
// They will be keys so for example specialty: is a key anything before the : is a key
// Although this one does not have a key id that would come first
class Specialties extends Component {
        state = {
            specialties: [
            {
                specialty: "JavaScript",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png",
                description: "Description: JavaScript is a programming language commonly used in web development.It was originally developed by Netscape as a means to add dynamic and interactive elements to websites.While JavaScript is influenced by Java, the syntax is more similar to C and is based on ECMAScript, a scripting language developed by Sun Microsystems."
            },
            {
                specialty: "Ruby",
                image_url: "https://blog.joefallon.net/wp-content/uploads/2014/07/rubylang.png",
                description: "Ruby is a dynamic, reflective, object - oriented, general - purpose programming language.It was designed and developed in the mid - 1990s by Yukihiro \"Matz\" Matsumoto in Japan.According to its creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, and Lisp.[11] It supports multiple programming paradigms, including functional, object - oriented, and imperative.It also has a dynamic type system and automatic memory management."
            },
           {
                specialty: "js",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
                description: "Node.js is an open - source, cross - platform JavaScript run - time environment for executing JavaScript code server - side.Historically, JavaScript was used primarily for client - side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser.Node.js enables JavaScript to be used for server - side scripting, and runs scripts server - side to produce dynamic web page content before the page is sent to the user's web browser."
            }]
        }
    
    render() {
        const Specialties = this.state.specialties.map((anything) => {
            return (
                <div><Specialty spec={anything} mydog="Steve"/></div>
                // when passing in after = it's a property for a component which you can use with .props to pass from parent
                // curly braces inside of a return means its javascript
                // Specialty here is the parent, and this is where you are giving it properties, wherever you see the equal sign
                // past array indivdually into spec
                // there is no valid key in the data so nothing is being shown, although there will be a key at times
                // just no avail key here
            )
        })

        return (
            <div>
                <h2>I specialize in {this.state.specialties[0].specialty}</h2>
                <h3>Full Stack Developer</h3>
                {Specialties}
            </div>
        );
    }
} 

export default Specialties;

// find out if const Specialties is what's being rendered in line 43
// props properties havd id=, 