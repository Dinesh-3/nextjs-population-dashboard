import React from "react"

/* 
* Scroll To Top Component
*/
class ScrollTopComponent extends React.Component {

    ScrollToTop() {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
       
    }
    render() {
        return (
            <div onClick={this.ScrollToTop} className="scroll noselect"> 
            <h1>&#8673;</h1> 
            </div>
        )
    }
}

export default ScrollTopComponent