// Write your code here
import { Component } from "react";

import {SuggestionItem} from "../SuggestionItem/index"

class GoogleSuggestions extends Component{
    
    state={
        searchInput:"",
        UserDetails:this.props.suggestionsList
    }

    onChangeSearchInput=(event)={
        this.setState({
            searchInput:event.target.value
        })

    }

    showResult=(id)=>{
        const{searchInput,UserDetails}=this.state
          
        const filterSearchInput= UserDetails.filter(eachId=>
            eachId.id===id)

        this.setState({
            UserDetails:filterSearchInput
        })

    }

     render(){
         const{searchInput,UserDetails}=this.state

         const searchList=UserDetails.filter(eachChar=>
            eachChar.name.includes(searchInput))

         return(
             <div className="container">
             <div>
                 <input type="search" placeholder="Search Google" value={searchInput}
                 onChange={this.onChangeSearchInput}/>
                 <ul>
                  {searchList.map(eachChar=>(
                      <SuggestionItem details={eachChar} key={eachChar.Id} showResult={this.showResult}/>
                  )
                  )}
                 </ul>
             </div>
             </div>
         )
     }
}